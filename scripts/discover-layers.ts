#!/usr/bin/env bun

import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import * as p from '@clack/prompts'
import { XMLParser } from 'fast-xml-parser'

type LayerInfo = {
  name: string
  title: string
  abstract?: string
  styles: string[]
  crs: string[]
}

type ServiceInfo = {
  url: string
  title?: string
  abstract?: string
  layers: LayerInfo[]
  formats: string[]
  supportedSRS: string[]
}

const BERLIN_BBOX = {
  minx: 390000,
  miny: 5815000,
  maxx: 400000,
  maxy: 5825000,
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

const PREVIEW_TILE = {
  z: 16,
  x: 35198,
  y: 21494,
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  parseAttributeValue: true,
  trimValues: true,
})

function extractLayers(
  layer: {
    Name?: string
    Title?: string
    Abstract?: string
    CRS?: string | string[]
    SRS?: string | string[]
    Style?: { Name?: string } | { Name?: string }[]
    Layer?: unknown
  },
  parentCRS: string[] = []
): LayerInfo[] {
  const layers: LayerInfo[] = []
  const crs = layer.CRS || layer.SRS || parentCRS
  const crsList = Array.isArray(crs) ? crs : crs ? [crs] : parentCRS

  if (layer.Name && layer.Name !== '') {
    const styles = layer.Style
      ? Array.isArray(layer.Style)
        ? layer.Style.map((s) => (s.Name ? s.Name : 'default'))
        : [layer.Style.Name || 'default']
      : ['default']

    layers.push({
      name: layer.Name,
      title: layer.Title || layer.Name,
      abstract: layer.Abstract,
      styles,
      crs: crsList,
    })
  }

  if (layer.Layer) {
    const subLayers = Array.isArray(layer.Layer) ? layer.Layer : [layer.Layer]
    for (const subLayer of subLayers) {
      layers.push(
        ...extractLayers(
          subLayer as {
            Name?: string
            Title?: string
            Abstract?: string
            CRS?: string | string[]
            SRS?: string | string[]
            Style?: { Name?: string } | { Name?: string }[]
            Layer?: unknown
          },
          crsList.length > 0 ? crsList : parentCRS
        )
      )
    }
  }

  return layers
}

function generateGetMapUrl(
  baseUrl: string,
  layerName: string,
  style = 'default',
  bbox = BERLIN_BBOX,
  width = 512,
  height = 512,
  transparent = false
): string {
  const params = new URLSearchParams({
    service: 'WMS',
    request: 'GetMap',
    version: '1.3.0',
    layers: layerName,
    styles: style,
    bbox: `${bbox.minx},${bbox.miny},${bbox.maxx},${bbox.maxy}`,
    crs: 'EPSG:25833',
    width: String(width),
    height: String(height),
    format: 'image/png',
  })
  if (transparent) {
    params.set('transparent', 'true')
  }
  return `${baseUrl}?${params.toString()}`
}

function generatePreviewImageUrl(
  baseUrl: string,
  layerName: string,
  style = 'default',
  bbox = BERLIN_BBOX,
  isOverlayLayer = false
) {
  return generateGetMapUrl(baseUrl, layerName, style, bbox, 256, 256, isOverlayLayer)
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

function generateIDEditorLink(wmsBaseUrl: string, wmsLayerName: string, style = 'default') {
  const berlinLat = 52.52133
  const berlinLon = 13.40396
  const zoom = 17.69

  const queryParams = [
    'service=WMS',
    'request=GetMap',
    'version=1.3.0',
    `layers=${wmsLayerName}`,
    `styles=${style}`,
    'format=image/png',
    'bbox={bbox}',
    'crs={proj}',
    'width={width}',
    'height={height}',
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

function generateIDEditorUrl(wmsBaseUrl: string, wmsLayerName: string, style = 'default') {
  const queryParams = [
    'service=WMS',
    'request=GetMap',
    'version=1.3.0',
    `layers=${wmsLayerName}`,
    `styles=${style}`,
    'format=image/png',
    'bbox={bbox}',
    'crs={proj}',
    'width={width}',
    'height={height}',
  ].join('&')

  return `${wmsBaseUrl}?${queryParams}`
}

async function discoverLayers(serviceUrl: string): Promise<ServiceInfo> {
  const capabilitiesUrl = `${serviceUrl}?service=WMS&request=GetCapabilities&version=1.3.0`

  const response = await fetch(capabilitiesUrl, {
    signal: AbortSignal.timeout(15000),
  })

  if (!response.ok) {
    throw new Error(`GetCapabilities failed: HTTP ${response.status}`)
  }

  const xmlText = await response.text()
  const capabilities = parser.parse(xmlText)

  const wmsCapabilities = capabilities.WMS_Capabilities || capabilities['?xml']?.WMS_Capabilities

  if (!wmsCapabilities) {
    throw new Error('Invalid GetCapabilities response')
  }

  const service = wmsCapabilities.Service || wmsCapabilities.Capability?.Service
  const capability = wmsCapabilities.Capability

  // Extract formats
  const request = capability?.Request?.GetMap
  const formats = request?.Format
    ? Array.isArray(request.Format)
      ? request.Format
      : [request.Format]
    : ['image/png']

  // Extract root layer
  const rootLayer = capability?.Layer
  if (!rootLayer) {
    throw new Error('No layers found in GetCapabilities')
  }

  // Extract all layers
  const layers = extractLayers(rootLayer)

  // Extract supported SRS from root layer
  const rootCRS = rootLayer.CRS || rootLayer.SRS
  const supportedSRS = rootCRS ? (Array.isArray(rootCRS) ? rootCRS : [rootCRS]) : ['EPSG:25833']

  return {
    url: serviceUrl,
    title: service?.Title || rootLayer.Title || 'WMS Service',
    abstract: service?.Abstract || rootLayer.Abstract,
    layers,
    formats,
    supportedSRS,
  }
}

function generateMarkdown(serviceInfo: ServiceInfo, referenceLinks?: string) {
  const lines: string[] = []

  lines.push(`# Layer Definition: ${serviceInfo.title || 'WMS Service'}`)
  lines.push('')

  if (serviceInfo.abstract) {
    lines.push(serviceInfo.abstract)
    lines.push('')
  }

  lines.push(`**Source**: ${serviceInfo.url}`)
  lines.push('')
  lines.push(
    `**GetCapabilities**: ${serviceInfo.url}?service=WMS&request=GetCapabilities&version=1.3.0`
  )
  lines.push('')

  if (referenceLinks) {
    lines.push(referenceLinks.trim())
    lines.push('')
  }

  lines.push(`**Supported SRS**: ${serviceInfo.supportedSRS.join(', ')}`)
  lines.push('')
  lines.push(`**Supported Formats**: ${serviceInfo.formats.join(', ')}`)
  lines.push('')
  lines.push('---')
  lines.push('')

  lines.push('## Understanding Layers and Styles')
  lines.push('')
  lines.push(
    '- **Layers**: Each layer represents a distinct dataset (e.g., speed limits, street segments). Layers contain the actual geographic data.'
  )
  lines.push(
    '- **Styles**: Styles define how a layer is visualized (colors, symbols, line widths, etc.). Each layer has one or more available styles.'
  )
  lines.push(
    '- **Layer/Style Combinations**: Each layer can only be used with its own styles (as defined in the WMS GetCapabilities). Styles cannot be mixed across different layers.'
  )
  lines.push('')

  lines.push('---')
  lines.push('')

  lines.push('## Available Layers')
  lines.push('')
  lines.push(
    'Each layer lists its available styles. Use only the styles shown for each specific layer:'
  )
  lines.push('')
  lines.push('| `<name>` (Layer) | Available Styles | `<Title>` | Explanation |')
  lines.push('|------------------|------------------|-----------|-------------|')

  for (const layer of serviceInfo.layers) {
    const explanation = layer.abstract ? layer.abstract.replace(/\n/g, ' ').trim() : ''
    const styles = layer.styles.map((s) => `\`${s}\``).join(', ')
    lines.push(`| \`${layer.name}\` | ${styles} | ${layer.title} | ${explanation} |`)
  }

  lines.push('')
  lines.push('---')
  lines.push('')

  lines.push('## Demo Links')
  lines.push('')
  lines.push(
    'All possible layer/style combinations. Valid combinations (✓) have previews; invalid combinations (✗) are not supported by the WMS service.'
  )
  lines.push('')

  const layerMap = new Map<string, LayerInfo[]>()
  for (const layer of serviceInfo.layers) {
    if (!layerMap.has(layer.name)) {
      layerMap.set(layer.name, [])
    }
    layerMap.get(layer.name)?.push(layer)
  }

  const allStyles = new Set<string>()
  for (const layer of serviceInfo.layers) {
    for (const style of layer.styles) {
      allStyles.add(style)
    }
  }

  const validCombinations = new Map<string, Set<string>>()
  for (const layer of serviceInfo.layers) {
    if (!validCombinations.has(layer.name)) {
      validCombinations.set(layer.name, new Set())
    }
    for (const style of layer.styles) {
      validCombinations.get(layer.name)?.add(style)
    }
  }

  lines.push('| Layer | Style | Status | Preview Image | Links |')
  lines.push('|-------|-------|--------|---------------|-------|')

  for (const [layerName, layerVariants] of layerMap.entries()) {
    const layer = layerVariants[0]

    const isOverlayLayer = !layerName.toLowerCase().includes('raster')

    for (const style of layer.styles) {
      const previewUrlZoomedIn = generatePreviewImageUrl(
        serviceInfo.url,
        layerName,
        style,
        ZOOMED_IN_BBOX,
        isOverlayLayer
      )
      const previewUrlZoomedOut = generatePreviewImageUrl(
        serviceInfo.url,
        layerName,
        style,
        ZOOMED_OUT_BBOX,
        isOverlayLayer
      )
      const previewLink = generateIDEditorLink(serviceInfo.url, layerName, style)

      lines.push(
        `| \`${layerName}\` | \`${style}\` | ✓ Valid | <img src="${previewUrlZoomedIn}" width=200 alt="Preview (zoomed in): ${layer.title} (${style})"> <img src="${previewUrlZoomedOut}" width=200 alt="Preview (zoomed out): ${layer.title} (${style})"> | [Preview with iD](${previewLink}) |`
      )
    }

    for (const style of allStyles) {
      if (!validCombinations.get(layerName)?.has(style)) {
        lines.push(
          `| \`${layerName}\` | \`${style}\` | ✗ Invalid | ✗ Style not available for this layer | — |`
        )
      }
    }
  }

  lines.push('')
  lines.push('---')
  lines.push('')
  lines.push('## URLs for iD Editor')
  lines.push('')
  lines.push("Copy-paste these URLs into iD editor's custom background layer field:")
  lines.push('')

  for (const [layerName, layerVariants] of layerMap.entries()) {
    const layer = layerVariants[0]
    for (const style of layer.styles) {
      const idUrl = generateIDEditorUrl(serviceInfo.url, layerName, style)
      lines.push(`* \`${idUrl}\` (${layer.title})`)
    }
  }

  lines.push('')
  lines.push('---')
  lines.push('')
  lines.push('## Notes')
  lines.push('')
  lines.push(
    '- **Style compatibility**: Styles are layer-specific. You cannot use a style from one layer with a different layer (e.g., you cannot use `tempolimits_strab` style with the `hoechstgeschwindigkeit` layer).'
  )
  lines.push(
    '- Layer order matters for rendering: layers listed first render below layers listed later'
  )
  lines.push('- Use `transparent: true` in MapProxy config for overlay layers')
  lines.push('- Preview images use a sample bounding box around Berlin center')
  lines.push('')

  return lines.join('\n')
}

async function processAllSources() {
  const { readdir, readFile } = await import('node:fs/promises')
  const sourcesDir = join(process.cwd(), 'sources')
  const files = await readdir(sourcesDir)
  const yamlFiles = files.filter((f) => f.endsWith('.yaml') && !f.endsWith('_comments.yml'))

  let successCount = 0
  let errorCount = 0

  for (const yamlFile of yamlFiles) {
    try {
      const yamlPath = join(sourcesDir, yamlFile)
      const content = await readFile(yamlPath, 'utf-8')
      const config = Bun.YAML.parse(content) as {
        sources?: Record<
          string,
          {
            type?: string
            req?: { url?: string }
          }
        >
      }

      if (config.sources) {
        // Load comments file if it exists
        const commentsPath = yamlPath.replace('.yaml', '_comments.yml')
        let comments: Record<string, { reference_links?: string }> = {}
        try {
          const commentsContent = await readFile(commentsPath, 'utf-8')
          comments = Bun.YAML.parse(commentsContent) as Record<string, { reference_links?: string }>
        } catch {
          // Comments file doesn't exist or can't be read - that's OK
        }

        for (const [sourceName, source] of Object.entries(config.sources)) {
          if (source.type === 'wms' && source.req?.url) {
            const url = source.req.url
            const spinner = p.spinner()
            spinner.start(`Discovering layers for ${url}...`)

            try {
              const serviceInfo = await discoverLayers(url)
              const serviceName = url.split('/').pop() || sourceName.replace('_source', '')
              const referenceLinks = comments[serviceName]?.reference_links

              const markdown = generateMarkdown(serviceInfo, referenceLinks)
              const outputPath = join(process.cwd(), 'layer_docs', `layer_${serviceName}.md`)

              await writeFile(outputPath, markdown, 'utf-8')
              spinner.stop(`✓ Written to ${outputPath}`)
              successCount++
            } catch (error: unknown) {
              const errorMessage = error instanceof Error ? error.message : String(error)
              spinner.stop(`✗ Error processing ${url}: ${errorMessage}`)
              errorCount++
            }
          }
        }
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      p.log.error(`Error processing ${yamlFile}: ${errorMessage}`)
      errorCount++
    }
  }

  if (successCount > 0) {
    p.log.success(`Successfully generated ${successCount} layer documentation file(s)`)
  }
  if (errorCount > 0) {
    p.log.warn(`${errorCount} error(s) occurred during processing`)
  }
}

async function processSingleUrl(url: string, outputPath?: string) {
  const spinner = p.spinner()
  spinner.start(`Discovering layers for ${url}...`)

  try {
    const serviceInfo = await discoverLayers(url)

    let referenceLinks: string | undefined
    const serviceName = url.split('/').pop() || 'service'
    const { readdir, readFile } = await import('node:fs/promises')
    const sourcesDir = join(process.cwd(), 'sources')
    try {
      const files = await readdir(sourcesDir)
      const yamlFiles = files.filter((f) => f.endsWith('.yaml') && !f.endsWith('_comments.yml'))

      for (const yamlFile of yamlFiles) {
        const yamlPath = join(sourcesDir, yamlFile)
        const commentsPath = yamlPath.replace('.yaml', '_comments.yml')
        try {
          const commentsContent = await readFile(commentsPath, 'utf-8')
          const comments = Bun.YAML.parse(commentsContent) as Record<
            string,
            { reference_links?: string }
          >
          if (comments[serviceName]?.reference_links) {
            referenceLinks = comments[serviceName].reference_links
            break
          }
        } catch {
          // Continue searching
        }
      }
    } catch {
      // Ignore if can't search for comments
    }

    const markdown = generateMarkdown(serviceInfo, referenceLinks)
    const finalOutputPath =
      outputPath || join(process.cwd(), 'layer_docs', `layer_${serviceName}.md`)

    await writeFile(finalOutputPath, markdown, 'utf-8')
    spinner.stop(`✓ Layer documentation written to ${finalOutputPath}`)
    p.log.success(`Found ${serviceInfo.layers.length} layers`)
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    spinner.stop(`✗ Error: ${errorMessage}`)
    p.log.error(errorMessage)
    process.exit(1)
  }
}

async function main() {
  const args = process.argv.slice(2)

  if (args.includes('--help')) {
    console.log(`
Usage: bun run discover-layers.ts [options]

Options:
  --output <file>    Output file path (default: layer_docs/layer_<service_name>.md)
  --all              Process all sources from sources/*.yaml files
  <wms_url>          Process a single WMS URL

Examples:
  bun run discover-layers.ts
  bun run discover-layers.ts --all
  bun run discover-layers.ts https://gdi.berlin.de/services/wms/strassenbefahrung
`)
    process.exit(0)
  }

  if (args.length > 0 && !args.includes('--all') && !args.includes('--output')) {
    const url = args[0]
    const outputIndex = args.indexOf('--output')
    const outputPath = outputIndex >= 0 && args[outputIndex + 1] ? args[outputIndex + 1] : undefined
    await processSingleUrl(url, outputPath)
    return
  }

  if (args.includes('--all')) {
    await processAllSources()
    return
  }

  p.intro('Discover WMS Layers')

  const choice = await p.select({
    message: 'What would you like to do?',
    options: [
      {
        value: 'all',
        label: 'Update docs for all sources',
        hint: 'Process all WMS sources from sources/*.yaml files',
      },
      {
        value: 'single',
        label: 'Update docs for one URL',
        hint: 'Enter a WMS URL to process',
      },
    ],
  })

  if (p.isCancel(choice)) {
    p.cancel('Operation cancelled.')
    process.exit(0)
  }

  if (choice === 'all') {
    await processAllSources()
  } else {
    const url = await p.text({
      message: 'Enter WMS service URL',
      placeholder: 'https://gdi.berlin.de/services/wms/strassenbefahrung',
      validate: (value) => {
        if (!value || value.trim().length === 0) {
          return 'URL is required'
        }
        if (!value.startsWith('http://') && !value.startsWith('https://')) {
          return 'URL must start with http:// or https://'
        }
      },
    })

    if (p.isCancel(url)) {
      p.cancel('Operation cancelled.')
      process.exit(0)
    }

    await processSingleUrl(url as string)
  }

  p.outro('Done!')
}

main().catch(console.error)
