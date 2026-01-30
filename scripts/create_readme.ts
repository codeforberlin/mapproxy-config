import fs from 'node:fs'
import path from 'node:path'

type Config = {
  base: string[]
  globals: Record<string, unknown>
  grids: { mercator: { base: 'GLOBAL_MERCATOR'; num_levels: 22 } }
  services: {
    demo: Record<string, unknown>
    tms: { origin: 'nw'; use_grid_names: true }
  }
}

type LayersConfig = {
  layers: {
    name: string
    sources: string[]
    title: string
  }[]
}

type SourceConfig = {
  caches?: Record<string, { grids: ['mercator']; sources: [string] }>
  sources?: Record<
    string,
    {
      req: {
        format: 'png'
        layers: string
        style: string
        transparent: boolean
        url: string
      }
      supported_srs: [`EPSG:${string}`]
      type: 'wms'
      wms_opts: { version: '1.3.0' }
    }
  >
}

type Comment = Record<
  string,
  {
    deprecated: boolean
    deprecation_note: string | null
    source_check_note: string | null
    osm_editing_note: string | null
    last_check_date?: string
    check_status?: 'ok' | 'failed' | 'layers_missing' | 'url_changed'
    check_note?: string
    suggested_new_url?: string
    reference_links?: string
  }
>

const config = Bun.YAML.parse(fs.readFileSync('config.yml', 'utf8')) as Config
const layersConfig = Bun.YAML.parse(fs.readFileSync('config_layers.yml', 'utf8')) as LayersConfig
const allLayers = layersConfig.layers

const allCaches: SourceConfig['caches'] = {}
const allSources: SourceConfig['sources'] = {}
const allComments: Comment = {}

for (const sourcePath of config.base.slice(1)) {
  const sourceFile = sourcePath
  const sourceConfig = Bun.YAML.parse(fs.readFileSync(sourceFile, 'utf8')) as SourceConfig

  if (sourceConfig.caches) Object.assign(allCaches, sourceConfig.caches)
  if (sourceConfig.sources) Object.assign(allSources, sourceConfig.sources)

  const commentFile = sourceFile.replace('.yaml', '_comments.yml')
  if (fs.existsSync(commentFile)) {
    const comments = Bun.YAML.parse(fs.readFileSync(commentFile, 'utf8')) as Comment
    Object.assign(allComments, comments)
  }
}

const markdownFile = fs.createWriteStream('demo_links/README.md')

const intro = `
  # A list of all available maps with demo and editing urls

  See [UPDATE.md](UPDATE.md) for instructions on how to update this file.

  The list reads [config.yml](../config.yml), [config_layers.yml](../config_layers.yml) and source files from [sources/](../sources/).

  ---

`

markdownFile.write(intro)

function collectSourceUrls(cacheName: string, visitedCaches = new Set<string>()) {
  if (visitedCaches.has(cacheName)) return []
  visitedCaches.add(cacheName)

  const cache = allCaches?.[cacheName]
  if (!cache) return []

  const urls: string[] = []

  for (const sourceName of cache.sources) {
    if (allCaches?.[sourceName]) {
      urls.push(...collectSourceUrls(sourceName, visitedCaches))
    } else if (allSources?.[sourceName]?.req?.url) {
      urls.push(allSources[sourceName].req.url)
    }
  }

  return urls
}

function collectSourceConfigs(cacheName: string, visitedCaches = new Set<string>()) {
  if (visitedCaches.has(cacheName)) return []
  visitedCaches.add(cacheName)

  const cache = allCaches?.[cacheName]
  if (!cache) return []

  const configs: SourceConfig['sources'][string][] = []

  for (const sourceName of cache.sources) {
    if (allCaches?.[sourceName]) {
      configs.push(...collectSourceConfigs(sourceName, visitedCaches))
    } else if (allSources?.[sourceName]) {
      configs.push(allSources[sourceName])
    }
  }

  return configs
}

for (const layer of allLayers) {
  const cacheName = layer.sources[0]
  const tmsUrl = `https://mapproxy.codefor.de/tiles/1.0.0/${layer.name}/mercator/{z}/{x}/{y}.png`

  const sourceDatas = collectSourceConfigs(cacheName)

  let comment = allComments[layer.name]

  if (!comment?.reference_links && sourceDatas.length > 0) {
    for (const sourceData of sourceDatas) {
      if (sourceData.req?.url) {
        const wmsUrl = sourceData.req.url
        const serviceMatch = wmsUrl.match(/\/wms\/([^/?]+)/)
        if (serviceMatch) {
          const serviceName = serviceMatch[1]
          const serviceComment = allComments[serviceName]
          if (serviceComment?.reference_links) {
            if (comment) {
              comment = {
                ...serviceComment,
                ...comment,
                reference_links: comment.reference_links || serviceComment.reference_links,
              }
            } else {
              comment = serviceComment
            }
            break
          }
        }
      }
    }
  }

  console.log('Handling', layer.name)

  const sourceUrls = collectSourceUrls(cacheName)
  const uniqueSourceUrls = [...new Set(sourceUrls)]
  const wfsExplorerLinks = uniqueSourceUrls
    .map((url) => {
      const encodedUrl = encodeURIComponent(url)
      return `- <a href="https://wfsexplorer.netlify.app/?wfs=${encodedUrl}">WFSExplorer</a> for ${url}`
    })
    .join('\n')

  const checkStatusDisplay =
    comment?.check_status && comment.check_status !== 'ok'
      ? `
<details>
<summary style="color: ${comment.check_status === 'failed' ? 'red' : 'orange'}">⚠️ URL Check: ${comment.check_status}${comment.last_check_date ? ` (${comment.last_check_date})` : ''}</summary>

**Status**: ${comment.check_status}
${comment.last_check_date ? `**Date**: ${comment.last_check_date}\n` : ''}**Note**: ${comment.check_note || 'No additional information'}
${comment.suggested_new_url ? `\n**Suggested URL**: ${comment.suggested_new_url}` : ''}
</details>
`
      : ''

  const referenceLinksDisplay = comment?.reference_links
    ? `\n${comment.reference_links.trim()}\n`
    : ''

  const listItem = `
## ${comment?.deprecated ? '⚠️ ' : ''}${layer.title}

<img src="${tmsUrl
    .replace('{z}', '16')
    .replace('{x}', '35198')
    .replace('{y}', '21494')}" width=200 alt="Demo image for ${layer.title}" />

${comment?.deprecation_note ? `> [!CAUTION]\n> ${comment.deprecation_note}` : ''}

${comment?.source_check_note ? `> [!NOTE]\n> ${comment.source_check_note}` : ''}

${checkStatusDisplay}
${referenceLinksDisplay}
- TMS URL: \`\`\`${tmsUrl}\`\`\`

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=${tmsUrl}">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:${tmsUrl}&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  ${comment?.osm_editing_note ? `> ${comment.osm_editing_note}` : ''}

${wfsExplorerLinks ? wfsExplorerLinks : ''}

<details>
<summary>Show layer config options</summary>

\`\`\`
${JSON.stringify(sourceDatas.length > 0 ? sourceDatas : sourceUrls.map((url) => ({ url })), undefined, 2)}
\`\`\`

</details>
`

  markdownFile.write(listItem)
}

markdownFile.end()
