import fs from 'fs'
import yaml from 'js-yaml'

type Config = {
  globals: {}
  grids: { mercator: { base: 'GLOBAL_MERCATOR'; num_levels: 22 } }
  services: {
    demo: {}
    tms: { origin: 'nw'; use_grid_names: true }
  }
  layers: {
    name: string
    sources: string[]
    title: string
  }[]
  caches: Record<string, { grids: ['mercator']; sources: [string] }>
  sources: Record<
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
const config = yaml.load(fs.readFileSync('../config.yml', 'utf8')) as Config

type Comment = Record<
  string,
  {
    deprecated: boolean
    deprecation_note: string | null
    source_check_note: string | null
    osm_editing_note: string | null
  }
>
const comments = yaml.load(fs.readFileSync('../layer_comments.yml', 'utf8')) as Comment

const markdownFile = fs.createWriteStream('./README.md')

const intro = `
  # A list of all available maps with demo and editing urls

  Generate list from project root running \`node ./demo_links/create_list_of_demo_links.js\`

  The list reads [config.yml](../config.yml) and [layer_comments.yml](../layer_comments.yml).

  ---

`

markdownFile.write(intro)

config.layers.forEach((layer) => {
  const cacheName = layer.sources[0]
  const sourceName = config.caches[cacheName].sources[0]
  const sourceData = config.sources[sourceName]
  const tmsUrl = `https://mapproxy.codefor.de/tiles/1.0.0/${layer.name}/mercator/{z}/{x}/{y}.png`
  const comment = comments[layer.name]

  console.log('Handling', layer.name)

  const listItem = `
## ${comment.deprecated ? '⚠️ ' : ''}${layer.title}

<img src="${tmsUrl
    .replace('{z}', '16')
    .replace('{x}', '35198')
    .replace('{y}', '21494')}" width=200 alt="Demo image for ${layer.title}" />

${comment.deprecation_note ? `> [!CAUTION]\n> ${comment.deprecation_note}` : ''}

${comment.source_check_note ? `> [!NOTE]\n> ${comment.source_check_note}` : ''}

- TMS URL: \`\`\`${tmsUrl}\`\`\`

- <a href="https://supaplexosm.github.io/strassenraumkarte-neukoelln/mapproxy_demo_map/?url=${tmsUrl}">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:${tmsUrl}&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  ${comment.osm_editing_note ? `> ${comment.osm_editing_note}` : ''}

<details>
<summary>Show layer config options</summary>

\`\`\`
${JSON.stringify(sourceData, undefined, 2)}
\`\`\`

</details>
`

  markdownFile.write(listItem)
})

markdownFile.end()
