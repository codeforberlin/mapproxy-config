#!/usr/bin/env bun

import { existsSync } from 'node:fs'
import { readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { spawn } from 'bun'
import { XMLParser } from 'fast-xml-parser'

type SourceConfig = {
  sources?: Record<
    string,
    {
      req?: {
        url?: string
        layers?: string | number
        style?: string
        format?: string
        transparent?: boolean
      }
      supported_srs?: string[]
      type?: string
      wms_opts?: {
        version?: string
      }
    }
  >
}

type CommentConfig = Record<
  string,
  {
    deprecated?: boolean
    deprecation_note?: string | null
    source_check_note?: string | null
    osm_editing_note?: string | null
    last_check_date?: string
    check_status?: 'ok' | 'failed' | 'layers_missing' | 'url_changed'
    check_note?: string
    suggested_new_url?: string
  }
>

type CheckResult = {
  url: string
  sourceName: string
  layerName: string
  status: 'ok' | 'failed' | 'layers_missing' | 'url_changed' | 'getmap_failed'
  note: string
  suggestedNewUrl?: string
  missingLayers?: string[]
  layerDocPath?: string
  sourceConfig?: SourceConfig['sources'][string]
  layers?: string[]
}

const TEST_BBOX = {
  minx: 388800,
  miny: 5818137,
  maxx: 393794,
  maxy: 5821374,
}

const ZOOMED_IN_BBOX = {
  minx: 392000,
  miny: 5819000,
  maxx: 394000,
  maxy: 5821000,
}

const ZOOMED_OUT_BBOX = {
  minx: 385000,
  miny: 5810000,
  maxx: 400000,
  maxy: 5825000,
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
})

function normalizeFormat(format?: string) {
  if (!format) return 'image/png'
  return format.includes('/') ? format : `image/${format}`
}

async function checkUrl(
  url: string,
  expectedLayers: string[],
  sourceConfig?: SourceConfig['sources'][string]
) {
  const result: CheckResult = {
    url,
    sourceName: '',
    layerName: '',
    status: 'ok',
    note: '',
  }

  try {
    const capabilitiesUrl = `${url}?service=WMS&request=GetCapabilities&version=1.3.0`
    const capabilitiesResponse = await fetch(capabilitiesUrl, {
      signal: AbortSignal.timeout(15000),
    })

    if (!capabilitiesResponse.ok) {
      result.status = 'failed'
      result.note = `GetCapabilities failed: HTTP ${capabilitiesResponse.status}`
      return result
    }

    const xmlText = await capabilitiesResponse.text()
    const capabilities = parser.parse(xmlText)

    const availableLayers: string[] = []

    function extractLayers(layer: { Name?: string; Layer?: unknown }) {
      if (layer.Name) {
        availableLayers.push(layer.Name)
      }
      if (layer.Layer) {
        const layers = Array.isArray(layer.Layer) ? layer.Layer : [layer.Layer]
        for (const l of layers) {
          extractLayers(l as { Name?: string; Layer?: unknown })
        }
      }
    }

    const wmsCapabilities = capabilities.WMS_Capabilities || capabilities['?xml']?.WMS_Capabilities
    if (wmsCapabilities?.Capability?.Layer) {
      extractLayers(wmsCapabilities.Capability.Layer)
    }

    if (expectedLayers.length > 0) {
      const missingLayers = expectedLayers.filter((layer) => !availableLayers.includes(layer))

      if (missingLayers.length > 0) {
        result.status = 'layers_missing'
        result.missingLayers = missingLayers
        result.note = `Missing layers: ${missingLayers.join(', ')}`
        return result
      }
    }

    if (sourceConfig?.req && expectedLayers.length > 0) {
      try {
        const layers = expectedLayers.join(',')
        const style = sourceConfig.req.style || ''
        const format = normalizeFormat(sourceConfig.req.format)
        const srs = sourceConfig.supported_srs?.[0] || 'EPSG:25833'
        const transparent = sourceConfig.req.transparent ? 'true' : 'false'
        const version = sourceConfig.wms_opts?.version || '1.3.0'

        const getMapParams = new URLSearchParams({
          service: 'WMS',
          request: 'GetMap',
          version,
          layers,
          styles: style,
          bbox: `${TEST_BBOX.minx},${TEST_BBOX.miny},${TEST_BBOX.maxx},${TEST_BBOX.maxy}`,
          crs: srs,
          width: '256',
          height: '256',
          format,
          transparent,
        })

        const getMapUrl = `${url}?${getMapParams.toString()}`
        const getMapResponse = await fetch(getMapUrl, {
          signal: AbortSignal.timeout(15000),
        })

        if (!getMapResponse.ok) {
          const errorText = await getMapResponse.text().catch(() => '')
          result.status = 'getmap_failed'
          result.note = `GetCapabilities OK, but GetMap failed: HTTP ${getMapResponse.status}${errorText ? ` - ${errorText.substring(0, 100)}` : ''}`
          return result
        }

        const contentType = getMapResponse.headers.get('content-type') || ''
        if (!contentType.startsWith('image/')) {
          const responseText = await getMapResponse.text()
          if (responseText.trim().startsWith('<?xml') || responseText.trim().startsWith('<')) {
            try {
              const errorXml = parser.parse(responseText)
              const errorMsg =
                errorXml.ServiceExceptionReport?.ServiceException?.['#text'] ||
                errorXml.ServiceExceptionReport?.ServiceException?.Message ||
                errorXml.ServiceException?.Message ||
                errorXml['ows:Exception']?.['ows:ExceptionText'] ||
                errorXml.ServiceExceptionReport?.ServiceException ||
                'Unknown error'
              const errorCode = errorXml.ServiceExceptionReport?.ServiceException?.['@_code'] || ''
              result.status = 'getmap_failed'
              result.note = `GetMap error${errorCode ? ` (${errorCode})` : ''}: ${String(errorMsg).trim()}`
            } catch {
              result.status = 'getmap_failed'
              result.note = `GetMap returned XML error (not image): ${contentType}`
            }
          } else {
            result.status = 'getmap_failed'
            result.note = `GetMap returned non-image content: ${contentType}`
          }
          return result
        }
      } catch (getMapError: unknown) {
        const errorMessage =
          getMapError instanceof Error ? getMapError.message : String(getMapError)
        result.status = 'getmap_failed'
        result.note = `GetCapabilities OK, but GetMap error: ${errorMessage}`
        return result
      }
    }

    result.status = 'ok'
    result.note = `Service accessible, ${availableLayers.length} layers available${sourceConfig?.req ? ', GetMap test passed' : ''}`
    return result
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    result.status = 'failed'
    result.note = `Error: ${errorMessage}`

    if (url.includes('fbinter.stadt-berlin.de')) {
      const urlMatch = url.match(/fbinter\.stadt-berlin\.de\/fb\/wms\/(.+)/)
      if (urlMatch) {
        const servicePath = urlMatch[1]
        const serviceName = servicePath
          .split('/')
          .pop()
          ?.replace(/^wmsk?_/, '')
        if (serviceName) {
          result.suggestedNewUrl = `https://gdi.berlin.de/services/wms/${serviceName}`
          result.status = 'url_changed'
          result.note += ` (suggested: ${result.suggestedNewUrl})`
        }
      }
    }

    return result
  }
}

async function findSourcesInConfig(config: SourceConfig) {
  const sources: Array<{
    url: string
    layers: string[]
    sourceName: string
    sourceConfig: SourceConfig['sources'][string]
  }> = []

  if (!config.sources) return sources

  for (const [sourceName, source] of Object.entries(config.sources)) {
    if (source.type === 'wms' && source.req?.url) {
      const layers = source.req.layers
        ? String(source.req.layers)
            .split(',')
            .map((l) => l.trim())
        : []
      sources.push({
        url: source.req.url,
        layers,
        sourceName,
        sourceConfig: source,
      })
    }
  }

  return sources
}

function getServiceNameFromUrl(url: string) {
  const match = url.match(/\/wms\/([^/?]+)/)
  return match ? match[1] : null
}

function getLayerDocPath(url: string) {
  const serviceName = getServiceNameFromUrl(url)
  if (!serviceName) return null
  return join(process.cwd(), 'layer_docs', `layer_${serviceName}.md`)
}

function generateWMSGetMapUrl(
  baseUrl: string,
  layers: string[],
  bbox: { minx: number; miny: number; maxx: number; maxy: number },
  sourceConfig?: SourceConfig['sources'][string]
) {
  const layersStr = layers.join(',')
  const style = sourceConfig?.req?.style || ''
  const format = normalizeFormat(sourceConfig?.req?.format)

  const srs = sourceConfig?.supported_srs?.[0] || 'EPSG:25833'
  const transparent = sourceConfig?.req?.transparent ? 'true' : 'false'
  const version = sourceConfig?.wms_opts?.version || '1.3.0'

  const params = new URLSearchParams({
    service: 'WMS',
    request: 'GetMap',
    version,
    layers: layersStr,
    styles: style,
    bbox: `${bbox.minx},${bbox.miny},${bbox.maxx},${bbox.maxy}`,
    crs: srs,
    width: '256',
    height: '256',
    format,
    transparent,
  })

  return `${baseUrl}?${params.toString()}`
}

function encodeUrlPreservingVariables(url: string) {
  const variablePlaceholders: Record<string, string> = {}
  let placeholderCounter = 0
  let processedUrl = url

  processedUrl = processedUrl.replace(/\{[^}]+\}/g, (match) => {
    const placeholder = `__VAR_${placeholderCounter++}__`
    variablePlaceholders[placeholder] = match
    return placeholder
  })

  const encoded = encodeURIComponent(processedUrl)

  return encoded.replace(
    /__VAR_\d+__/g,
    (placeholder) => variablePlaceholders[placeholder] || placeholder
  )
}

function generateWMSIDEditorLink(
  wmsBaseUrl: string,
  layers: string[],
  sourceConfig?: SourceConfig['sources'][string]
) {
  const berlinLat = 52.52133
  const berlinLon = 13.40396
  const zoom = 17.69

  const layersStr = layers.join(',')
  const style = sourceConfig?.req?.style || ''
  const format = normalizeFormat(sourceConfig?.req?.format)

  const srs = sourceConfig?.supported_srs?.[0] || 'EPSG:25833'
  const version = sourceConfig?.wms_opts?.version || '1.3.0'
  const transparent = sourceConfig?.req?.transparent ? 'true' : 'false'

  const queryParams = [
    'service=WMS',
    'request=GetMap',
    `version=${version}`,
    `layers=${encodeURIComponent(layersStr)}`,
    `styles=${encodeURIComponent(style)}`,
    `format=${encodeURIComponent(format)}`,
    'bbox={bbox}',
    `crs=${encodeURIComponent(srs)}`,
    'width={width}',
    'height={height}',
    `transparent=${transparent}`,
  ].join('&')

  const backgroundUrl = `${wmsBaseUrl}?${queryParams}`

  const disableFeatures = [
    'address_points',
    'points',
    'service_roads',
    'paths',
    'buildings',
    'building_parts',
    'indoor',
    'landuse',
    'boundaries',
    'water',
    'rail',
    'pistes',
    'aerialways',
    'power',
    'past_future',
    'others',
  ].join(',')

  const hashParts = [
    `background=custom:${encodeUrlPreservingVariables(backgroundUrl)}`,
    `disable_features=${disableFeatures}`,
    `map=${zoom}/${berlinLat}/${berlinLon}`,
    'walkthrough=false',
  ]

  return `https://ideditor-release.netlify.app/#${hashParts.join('&')}`
}

function generateMapProxyDemoUrls(layerName: string) {
  const baseUrl = `https://mapproxy.codefor.de/tiles/1.0.0/${layerName}/mercator`
  const tmsUrl = `${baseUrl}/{z}/{x}/{y}.png`
  const imageZoomedIn = `${baseUrl}/16/35198/21494.png`
  const imageZoomedOut = `${baseUrl}/14/8799/5373.png`
  const copyUrl = tmsUrl
  const previewUrl = `https://www.openstreetmap.org/edit?editor=id#background=custom:${encodeURIComponent(tmsUrl)}&disable_features=boundaries&map=20.00/52.47241/13.44637`

  return {
    imageZoomedIn,
    imageZoomedOut,
    copyUrl,
    previewUrl,
  }
}

async function generateWMSSourceDemoUrls(
  wmsUrl: string,
  layers: string[],
  sourceConfig?: SourceConfig['sources'][string],
  layerDocPath?: string | null
) {
  if (!layers || layers.length === 0) return null

  const imageZoomedIn = generateWMSGetMapUrl(wmsUrl, layers, ZOOMED_IN_BBOX, sourceConfig)
  const imageZoomedOut = generateWMSGetMapUrl(wmsUrl, layers, ZOOMED_OUT_BBOX, sourceConfig)

  const layersStr = layers.join(',')
  const style = sourceConfig?.req?.style || ''
  const format = normalizeFormat(sourceConfig?.req?.format)

  const srs = sourceConfig?.supported_srs?.[0] || 'EPSG:25833'
  const version = sourceConfig?.wms_opts?.version || '1.3.0'
  const transparent = sourceConfig?.req?.transparent ? 'true' : 'false'

  const copyParams = new URLSearchParams({
    service: 'WMS',
    request: 'GetMap',
    version,
    layers: layersStr,
    styles: style,
    bbox: '{bbox}',
    crs: srs,
    width: '{width}',
    height: '{height}',
    format,
    transparent,
  })
  const copyUrl = `${wmsUrl}?${copyParams.toString()}`

  const previewUrl = generateWMSIDEditorLink(wmsUrl, layers, sourceConfig)

  return {
    imageZoomedIn,
    imageZoomedOut,
    copyUrl,
    previewUrl,
  }
}

async function getStyleFromLayerDoc(layerDocPath: string, layerName: string) {
  try {
    const content = await readFile(layerDocPath, 'utf-8')
    const lines = content.split('\n')
    let inTable = false
    for (const line of lines) {
      if (line.includes('| `<name>`') || line.includes('| Layer |')) {
        inTable = true
        continue
      }
      if (inTable && line.startsWith('|')) {
        const cells = line
          .split('|')
          .map((c) => c.trim())
          .filter((c) => c)
        if (cells.length >= 4 && cells[0] === `\`${layerName}\``) {
          const styleCell = cells[1]
          return styleCell.replace(/`/g, '').trim()
        }
      }
      if (inTable && line.trim() === '---') {
        break
      }
    }
  } catch {
    // File doesn't exist or can't be read
  }
  return null
}

async function getAllStylesFromLayerDoc(layerDocPath: string, layerNames: string[]) {
  const styleMap = new Map<string, string>()
  try {
    const content = await readFile(layerDocPath, 'utf-8')
    const lines = content.split('\n')
    let inTable = false

    for (const line of lines) {
      if (line.includes('| `<name>`') || line.includes('| Layer |')) {
        inTable = true
        continue
      }
      if (inTable && line.startsWith('|')) {
        const cells = line
          .split('|')
          .map((c) => c.trim())
          .filter((c) => c)
        if (cells.length >= 4) {
          const layerName = cells[0].replace(/`/g, '').trim()
          if (layerNames.includes(layerName)) {
            const styleCell = cells[1]
            const style = styleCell.replace(/`/g, '').trim()
            styleMap.set(layerName, style)
          }
        }
      }
      if (inTable && line.trim() === '---') {
        break
      }
    }
  } catch {
    // File doesn't exist or can't be read
  }
  return styleMap
}

async function updateLayerDoc(url: string) {
  try {
    const discoverScriptPath = join(process.cwd(), 'scripts', 'discover-layers.ts')
    const proc = spawn(['bun', 'run', discoverScriptPath, url], {
      stdout: 'pipe',
      stderr: 'pipe',
    })

    await proc.exited
    return proc.exitCode === 0
  } catch {
    return false
  }
}

async function updateCommentsFile(commentsPath: string, results: CheckResult[]) {
  let comments: CommentConfig = {}

  try {
    const content = await readFile(commentsPath, 'utf-8')
    // Use Bun's native YAML parser
    comments = Bun.YAML.parse(content) as CommentConfig
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && error.code !== 'ENOENT') {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error(`Error reading ${commentsPath}:`, errorMessage)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  for (const result of results) {
    if (!comments[result.layerName]) {
      comments[result.layerName] = {
        deprecated: false,
        deprecation_note: null,
        source_check_note: null,
        osm_editing_note: null,
      }
    }

    comments[result.layerName].last_check_date = today
    comments[result.layerName].check_status = result.status
    comments[result.layerName].check_note = result.note
    if (result.suggestedNewUrl) {
      comments[result.layerName].suggested_new_url = result.suggestedNewUrl
    }
  }

  const yamlContent = Bun.YAML.stringify(comments, undefined, 2)
  await writeFile(commentsPath, yamlContent, 'utf-8')
}

async function main() {
  const args = process.argv.slice(2)
  const sourceArg = args.find((arg) => arg.startsWith('--source='))
  const specificSource = sourceArg?.split('=')[1]

  const sourcesDir = join(process.cwd(), 'sources')
  const files = await readdir(sourcesDir)
  const yamlFiles = files.filter((f) => f.endsWith('.yaml') && !f.endsWith('_comments.yml'))

  const allResults: CheckResult[] = []
  const report: string[] = ['# URL Check Report', `Generated: ${new Date().toISOString()}`, '']

  let totalChecked = 0
  let totalOk = 0
  let totalFailed = 0
  let totalLayersMissing = 0
  let totalUrlChanged = 0

  for (const yamlFile of yamlFiles) {
    if (specificSource && !yamlFile.includes(specificSource)) {
      continue
    }

    const yamlPath = join(sourcesDir, yamlFile)
    const commentsPath = yamlPath.replace('.yaml', '_comments.yml')

    console.log(`\nChecking ${yamlFile}...`)

    try {
      const content = await readFile(yamlPath, 'utf-8')
      const config = Bun.YAML.parse(content) as SourceConfig

      const sources = await findSourcesInConfig(config)
      const results: CheckResult[] = []

      for (const source of sources) {
        console.log(`  Checking ${source.sourceName}: ${source.url}`)
        const result = await checkUrl(source.url, source.layers, source.sourceConfig)
        result.sourceName = source.sourceName
        result.layerName = source.sourceName.replace('_source', '')
        result.layerDocPath = getLayerDocPath(source.url)
        result.sourceConfig = source.sourceConfig
        result.layers = source.layers
        results.push(result)
        allResults.push(result)
        totalChecked++

        if (result.status !== 'ok' && result.layerDocPath) {
          const layerDocExists = existsSync(result.layerDocPath)
          if (!layerDocExists || result.status === 'getmap_failed') {
            console.log(`    Updating layer doc for ${source.url}...`)
            await updateLayerDoc(source.url)
          }

          if (
            result.status === 'getmap_failed' &&
            source.layers.length > 0 &&
            result.layerDocPath
          ) {
            const styleMap = await getAllStylesFromLayerDoc(result.layerDocPath, source.layers)
            if (styleMap.size > 0) {
              const styles = source.layers.map((layer) => styleMap.get(layer) || 'default')
              const stylesString = styles.join(',')

              const currentStyle = source.sourceConfig?.req?.style || ''
              if (currentStyle !== stylesString) {
                console.log(
                  `    Fixing styles: ${currentStyle.substring(0, 50)}... -> ${styles.length} styles`
                )
                if (source.sourceConfig?.req) {
                  source.sourceConfig.req.style = stylesString
                  const yamlContent = Bun.YAML.stringify(config, undefined, 2)
                  await writeFile(yamlPath, yamlContent, 'utf-8')
                  console.log(`    Updated ${yamlFile}`)
                }
              }
            }
          }
        }

        if (result.status === 'ok') totalOk++
        else if (result.status === 'failed') totalFailed++
        else if (result.status === 'layers_missing') totalLayersMissing++
        else if (result.status === 'url_changed') totalUrlChanged++
        else if (result.status === 'getmap_failed') totalFailed++
      }

      await updateCommentsFile(commentsPath, results)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error(`Error processing ${yamlFile}:`, errorMessage)
      report.push(`## ${yamlFile}\n\nError: ${errorMessage}\n`)
    }
  }

  report.push('## Summary\n')
  report.push(`- Total URLs checked: ${totalChecked}`)
  report.push(`- OK: ${totalOk}`)
  report.push(`- Failed: ${totalFailed}`)
  report.push(`- Layers missing: ${totalLayersMissing}`)
  report.push(`- URL changed: ${totalUrlChanged}`)
  report.push(`- GetMap failed: ${allResults.filter((r) => r.status === 'getmap_failed').length}\n`)

  if (
    totalFailed > 0 ||
    totalLayersMissing > 0 ||
    totalUrlChanged > 0 ||
    allResults.some((r) => r.status === 'getmap_failed')
  ) {
    report.push('## Issues\n')

    for (const result of allResults) {
      if (result.status !== 'ok') {
        report.push(`### ${result.sourceName} (${result.layerName})\n`)
        report.push(`- **URL**: ${result.url}`)
        report.push(`- **Status**: ${result.status}`)
        report.push(`- **Note**: ${result.note}`)
        if (result.missingLayers && result.missingLayers.length > 0) {
          report.push(`- **Missing layers**: ${result.missingLayers.join(', ')}`)
        }
        if (result.suggestedNewUrl) {
          report.push(`- **Suggested URL**: ${result.suggestedNewUrl}`)
        }
        if (result.layerDocPath) {
          const layerDocName = basename(result.layerDocPath)
          report.push(`- **Layer Doc**: [${layerDocName}](./layer_docs/${layerDocName})`)
        }

        report.push('')
        report.push('#### Demo URLs WMS source')
        report.push('')

        if (result.layers && result.layers.length > 0) {
          const wmsDemoUrls = await generateWMSSourceDemoUrls(
            result.url,
            result.layers,
            result.sourceConfig,
            result.layerDocPath
          )
          if (wmsDemoUrls) {
            report.push(
              `- **Image zoomed in**: <img src="${wmsDemoUrls.imageZoomedIn}" width=200 alt="Demo image zoomed in" />`
            )
            report.push(
              `- **Image zoomed out**: <img src="${wmsDemoUrls.imageZoomedOut}" width=200 alt="Demo image zoomed out" />`
            )
            report.push(`- **Copy URL for iD**: \`${wmsDemoUrls.copyUrl}\``)
            report.push(`- **Preview URL for iD**: [Preview with iD](${wmsDemoUrls.previewUrl})`)
          }
        }

        report.push('')
        report.push('#### Demo URLs MapProxy')
        report.push('')

        if (result.layerName) {
          const mapProxyUrls = generateMapProxyDemoUrls(result.layerName)
          report.push(
            `- **Image zoomed in**: <img src="${mapProxyUrls.imageZoomedIn}" width=200 alt="Demo image zoomed in" />`
          )
          report.push(
            `- **Image zoomed out**: <img src="${mapProxyUrls.imageZoomedOut}" width=200 alt="Demo image zoomed out" />`
          )
          report.push(`- **Copy URL for id**: \`${mapProxyUrls.copyUrl}\``)
          report.push(`- **Preview URL for ID**: [Preview layer](${mapProxyUrls.previewUrl})`)
        }
        report.push('')
      }
    }
  }

  const reportPath = join(process.cwd(), 'url-check-report.md')
  await writeFile(reportPath, report.join('\n'), 'utf-8')
  console.log(`\nReport written to ${reportPath}`)
  console.log(
    `\nSummary: ${totalOk} OK, ${totalFailed} failed, ${totalLayersMissing} missing layers, ${totalUrlChanged} URL changed`
  )
}

main().catch(console.error)
