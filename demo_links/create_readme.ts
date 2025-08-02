import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

type Config = {
  base: string[]
  globals: {}
  grids: { mercator: { base: 'GLOBAL_MERCATOR'; num_levels: 22 } }
  services: {
    demo: {}
    tms: { origin: 'nw'; use_grid_names: true }
  }
}

type EndpointConfig = {
  layers?: {
    name: string
    sources: string[]
    title: string
  }[]
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
  }
>

// Load main config
const config = yaml.load(fs.readFileSync('../config.yml', 'utf8')) as Config

// Merge all endpoint configurations
const allLayers: EndpointConfig['layers'] = []
const allCaches: EndpointConfig['caches'] = {}
const allSources: EndpointConfig['sources'] = {}
const allComments: Comment = {}

// Load each endpoint file and its corresponding comments
config.base.forEach((endpointPath) => {
  const endpointFile = path.join('..', endpointPath)
  const endpointConfig = yaml.load(fs.readFileSync(endpointFile, 'utf8')) as EndpointConfig
  
  // Merge layers, caches, and sources
  if (endpointConfig.layers) allLayers.push(...endpointConfig.layers)
  if (endpointConfig.caches) Object.assign(allCaches, endpointConfig.caches)
  if (endpointConfig.sources) Object.assign(allSources, endpointConfig.sources)
  
  // Load corresponding comment file
  const commentFile = endpointFile.replace('.yaml', '_comments.yml')
  if (fs.existsSync(commentFile)) {
    const comments = yaml.load(fs.readFileSync(commentFile, 'utf8')) as Comment
    Object.assign(allComments, comments)
  }
})

const markdownFile = fs.createWriteStream('./README.md')

const intro = `
  # A list of all available maps with demo and editing urls

  See [UPDATE.md](https://github.com/codeforberlin/mapproxy-config/blob/master/demo_links/UPDATE.md) for instructions on how to update this file.

  The list reads [config.yml](../config.yml) and endpoint comment files from [endpoints/](../endpoints/).

  ---

`

markdownFile.write(intro)

allLayers.forEach((layer) => {
  const cacheName = layer.sources[0]
  const sourceNames = allCaches[cacheName].sources
  const sourceDatas = sourceNames.map((sourceName) => allSources[sourceName])
  const tmsUrl = `https://mapproxy.codefor.de/tiles/1.0.0/${layer.name}/mercator/{z}/{x}/{y}.png`
  const comment = allComments[layer.name]

  console.log('Handling', layer.name)

  const listItem = `
## ${comment?.deprecated ? '⚠️ ' : ''}${layer.title}

<img src="${tmsUrl
    .replace('{z}', '16')
    .replace('{x}', '35198')
    .replace('{y}', '21494')}" width=200 alt="Demo image for ${layer.title}" />

${comment?.deprecation_note ? `> [!CAUTION]\n> ${comment.deprecation_note}` : ''}

${comment?.source_check_note ? `> [!NOTE]\n> ${comment.source_check_note}` : ''}

- TMS URL: \`\`\`${tmsUrl}\`\`\`

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=${tmsUrl}">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:${tmsUrl}&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  ${comment?.osm_editing_note ? `> ${comment.osm_editing_note}` : ''}

<details>
<summary>Show layer config options</summary>

\`\`\`
${JSON.stringify(sourceDatas, undefined, 2)}
\`\`\`

</details>
`

  markdownFile.write(listItem)
})

markdownFile.end()
