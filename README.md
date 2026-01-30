# mapproxy-config

A MapProxy configuration that groups layers **by WMS endpoint/service URL** for better organization and maintainability.

```
mapproxy-config/
├── config.yml                # Main configuration (loads all source modules)
├── config_layers.yml         # All layer definitions (loaded first)
├── sources/                  # One file per WMS endpoint (caches & sources only)
│   ├── shared-alkis.yaml          # �️  Shared ALKIS background cache
│   ├── fbinter-alkis.yaml          # 🗺️  ALKIS cadastral data
│   ├── fbinter-senstadt.yaml       # 🛰️  Aerial imagery (2015, 2016 CIR)
│   ├── fbinter-oeffbeleucht.yaml   # 💡 Public lighting
│   ├── gdi-bdom.yaml               # 🏔️  Digital elevation model
│   ├── gdi-strassenbefahrung.yaml  # 🛣️  Street survey 2014
│   ├── gdi-baumbestand.yaml        # 🌳 Tree inventory (all variants)
│   ├── gdi-tempolimits.yaml        # 🚦 Speed limits
│   ├── gdi-fussgaengernetz.yaml    # 🚶 Pedestrian network
│   ├── gdi-postleitzahlen.yaml     # 📮 Postal codes
│   ├── gdi-abstell-mikromob.yaml   # 🛴 Micromobility parking
│   └── gdi-fahrradreparatur.yaml   # 🔧 Bicycle repair stations
├── demo_links/               # Demo URLs for all available layers
└── docker-compose.yml        # Local development environment
```

## Quick Start (Local Development)

```bash
# Start MapProxy locally with Docker
docker-compose up -d

# View demo with all layers
open http://localhost:8080/demo/

# View generated demo links
open http://localhost:3001/
```

## Available maps

[🗺 A list of all available maps with demo and editing urls …](./demo_links)

## Other projects

- [luftbilder.berlin.codefor.de](https://luftbilder.berlin.codefor.de) showcases aerial images from different years [Github](https://github.com/codeforberlin/luftbilder.berlin.codefor.de)
- [maps.berlin.codefor.de](https://maps.berlin.codefor.de) showcases all kind of maps [Github](https://github.com/codeforberlin/maps.berlin.codefor.de)
- [github.com/codeforberlin/tilestache-config](https://github.com/codeforberlin/tilestache-config) is the config for serving aerial imagery from file ([config](https://github.com/codeforberlin/tilestache-config/blob/master/config.json))
<!-- * [github.com/codeforberlin/mapproxy-config](https://github.com/codeforberlin/mapproxy-config) is a map proxy for some imagery layers by the City of Berlin -->

## Configuration Architecture

This MapProxy setup uses a **modular architecture** that separates concerns:

- **`config_layers.yml`**: Contains ALL layer definitions (must be first in base array)
- **`sources/`**: Individual files per data source containing only caches & sources
- **`config.yml`**: Main config that includes all modules via `base` directive

⚠️ **Important**: MapProxy only processes the first file with a `layers:` section, so all layers must be defined in `config_layers.yml`.

## Helper Scripts

Automated tools for managing configurations:

- **`bun run check-all`**: Run all checks (layer docs, URL validation, demo links)
- **`bun run discover-layers`**: Discover layers for a WMS service
- **`bun run generate-layer-docs`**: Generate documentation for all services
- **`bun run check-urls`**: Validate all WMS URLs and verify layers exist
- **`bun run create-demo-links`**: Regenerate demo links README

See [docs/wms_wfs_wmts_guide.md](docs/wms_wfs_wmts_guide.md) for detailed usage.

## Add new layer

### For Existing Data Sources

1. **Add layer definition** to `config_layers.yml`
2. **Add cache and source** to the appropriate `sources/xxx.yaml` file
3. Use `bun run discover-layers <service_url>` to find available layers
4. See [docs/wms_wfs_wmts_guide.md](docs/wms_wfs_wmts_guide.md) for WMS configuration details

### For New Data Sources

1. **Create** `sources/new-service.yaml` with caches and sources
2. **Add layer definitions** to `config_layers.yml`
3. **Include the new file** in `config.yml` base section (after `config_layers.yml`)
4. Run `bun run check-all` to validate and generate documentation

## Install

```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

## Run local

```
mapproxy-util serve-develop config.yml
```

## Deployment

```
# creates the wsgi.py script
mapproxy-util create -t wsgi-app -f config.yml wsgi.py
```

Note: We don't use `make_wsgi_app(…, reloader=True)` but restart the server manually. The auto reloading would only restart if the config is valid, which would hide a broken edit. The manual reload will make the error visible.

Create a systemd service script in `/etc/systemd/system/mapproxy.service`.

```
[Unit]
Description=Mapproxy gunicorn daemon
After=network.target

[Service]
User=tiles
Group=tiles
WorkingDirectory=/srv/tiles/proxy
ExecStart=/srv/tiles/proxy/env/bin/gunicorn --access-logfile /var/log/mapproxy/access.log --error-logfile /var/log/mapproxy/error.log --bind unix:/tmp/mapproxy.sock --workers 9 wsgi:application

[Install]
WantedBy=multi-user.target
```

```bash
systemctl daemon-reload
systemctl start mapproxy
```

Add to nginx configuration:

```
    location /proxy/ {
        proxy_pass http://unix:/tmp/mapproxy.sock;
        proxy_set_header Host $http_host;
        proxy_set_header X-Script-Name /proxy;
    }
```

```bash
nginx -t
systemctl start nginx
```

## Debugging

- **Available layers**: Use [MapProxy Debug Page](https://mapproxy.codefor.de/demo/) or `bun run discover-layers <service_url>`
- **Layer documentation**: See `layer_docs/` for detailed layer information
- **URL validation**: Run `bun run check-urls` to verify all WMS URLs
- **Request logging**: Enable in [log.ini](log.ini) and check `mapproxy_log/source-requests.log`
- **Cache refresh**: Delete `cache_data/` folders to force cache refresh
- **WMS/WFS details**: See [docs/wms_wfs_wmts_guide.md](docs/wms_wfs_wmts_guide.md)

## Documentation

- **WMS/WFS/WMTS Guide**: [docs/wms_wfs_wmts_guide.md](docs/wms_wfs_wmts_guide.md) - Protocol details and usage
- **Layer Documentation**: `layer_docs/` - Detailed layer information (auto-generated)
- **Demo Links**: [demo_links/README.md](demo_links/README.md) - All available layers with previews
- **MapProxy Docs**: https://mapproxy.github.io/mapproxy/latest/index.html
