# require 'debug' # binding.break
require 'yaml'
config = YAML.load_file('./config.yml')
comments = YAML.load_file('./layer_comments.yml')

markdown_file = File.new("demo_links/index.md", "w+")

intro = <<~EOH
  # A list of all avaliable maps with demo and editing urls

  Generate list from project root running `ruby ./demo_links/create_list_of_demo_links.rb`

  The list reads [config.yml](../config.yml) and [layer_comments.yml](../layer_comments.yml).

  ---

EOH

list = []
config['layers'].each do |layer|
  source_name = config['caches'][layer['sources'].first]['sources'].first
  source_data = config['sources'][source_name]
  tms_url = "https://mapproxy.codefor.de/tiles/1.0.0/#{layer['name']}/mercator/{z}/{x}/{y}.png"

  list << <<~EOH
    ## #{comments[layer['name']]['deprecated'] ? '⚠️' : ''} #{layer['title']}

    <img src="#{tms_url.gsub('{z}', '16').gsub('{x}', '35198').gsub('{y}', '21494')}" width=100 alt="Demo image for #{layer['title']}" />

    #{comments[layer['name']]['deprecated'] ? "> ⚠️ DEPRECATED: #{comments[layer['name']]['deprecation_note']}" : ''}

    * TMS URL: `#{tms_url}`

    * [Preview layer](https://supaplexosm.github.io/strassenraumkarte-neukoelln/mapproxy_demo_map.html?url=#{tms_url})

    * [Use layer to edit OSM](https://www.openstreetmap.org/edit?editor=id#background=custom:#{tms_url}&disable_features=boundaries&map=20.00/52.47241/13.44637)
      #{(note = comments[layer['name']]['osm_editing_note']) ? "> #{note}" : ''}

    <details>
    <summary>Show config options</summary>

    ```
    #{source_data.inspect}
    ```

    </details>

    ---

  EOH
end

markdown_file.write(intro + list.join(''))
markdown_file.close()
