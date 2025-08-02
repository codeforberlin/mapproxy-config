# mapproxy-config

A MapProxy configuration that groups layers **by WMS endpoint/service URL** for better organization and maintainability.

```
mapproxy-config/
├── config.yml                # Main configuration (loads all endpoint modules)
├── endpoints/                # One file per WMS endpoint
│   ├── fbinter-senstadt.yaml      # 🛰️  Aerial imagery (2013, 2015, 2016)
│   ├── fbinter-alkis.yaml          # 🗺️  ALKIS cadastral data
│   ├── fbinter-oeffbeleucht.yaml   # 💡 Public lighting
│   ├── gdi-bdom.yaml               # 🏔️  Digital elevation model
│   ├── gdi-strassenbefahrung.yaml  # 🛣️  Street survey 2014
│   ├── gdi-baumbestand.yaml        # 🌳 Tree inventory (all variants)
│   ├── gdi-tempolimits.yaml        # 🚦 Speed limits
│   └── gdi-fussgaengernetz.yaml    # 🚶 Pedestrian network
└── demo_links/               # Demo URLs for all available layers
```

## Available maps

[🗺 A list of all available maps with demo and editing urls …](./demo_links)

## Other projects

- [luftbilder.berlin.codefor.de](https://luftbilder.berlin.codefor.de) showcases aerial images from different years [Github](https://github.com/codeforberlin/luftbilder.berlin.codefor.de)
- [maps.berlin.codefor.de](https://maps.berlin.codefor.de) showcases all kind of maps [Github](https://github.com/codeforberlin/maps.berlin.codefor.de)
- [github.com/codeforberlin/tilestache-config](https://github.com/codeforberlin/tilestache-config) is the config for serving aerial imagery from file ([config](https://github.com/codeforberlin/tilestache-config/blob/master/config.json))
<!-- * [github.com/codeforberlin/mapproxy-config](https://github.com/codeforberlin/mapproxy-config) is a map proxy for some imagery layers by the City of Berlin -->

## Add new layer

### For Existing Endpoints

1. Open the corresponding `endpoints/xxx.yaml` file
2. Add your layer, cache, and source definitions
3. Use https://gdi.berlin.de/viewer/main/ as the main source
4. Inspect the network request of layers
5. Craft the config from there
6. Add documentation in `layer_docs` if helpful

### For New Endpoints

1. Create `endpoints/new-service.yaml` with complete layer definitions
2. Add the file to `config.yml` base section:
   ```yaml
   base:
     # ... existing files
     - endpoints/new-service.yaml
   ```

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

### Which config sources are recognized by Mapproxy?

Use the [Mapproxy Debug Page](https://mapproxy.codefor.de/demo/). It lists all layers that are avaliable based on the config.
However, there is an issue with the projection, so the previews do not work.

### Which URLs does the Mapproxy call?

Check that [log.ini](log.ini) "active" (not commented out); if needed, change and restart.
Use `cat mapproxy-config/mapproxy_log/source-requests.log` to see the requested URLs.

Copy one of those URLs and fiddle with the URL params the browser until the right image is shown.

### Remeber to delete the file system cache.

`ls mapproxy-config/cache_data/` shows all layer that have cached images. Remove the folder to trigger a cache refresh, eg `rm -rf mapproxy-config/cache_data/alkis_30_cache_EPSG900913`

### Remeber to refresh the browser cache.

Even with a fresh file system cache, images might still be cached in the browser. Unfortunately, iD Editor does not allow hard reloads to refresh this data. One workaround is, to zoom and pan the map so new images are requested.

### Which layer are avaliable for a given WMS service?

Use URLs like `https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis?service=WMS&request=GetCapabilities&version=1.3.0` to create a list of layer IDs with description. Examples are [layer_alkis_berlin.md] and [layer_strassenbefahrung_berlin.md].

You can also try https://mybinder.org/v2/gh/rbuffat/eli-helper/master ([GitHub](https://github.com/rbuffat/eli-helper)) with the fbintern URL from above to get a list of avaliable layers.

### Mapproxy documentation.

- https://mapproxy.github.io/mapproxy/latest/index.html
- https://mapproxy.github.io/mapproxy/latest/configuration_examples.html#merge-multiple-layers how to merge layers

To see the installed version of mapproxy:

```
cd mapproxy-config
source env/bin/activate
mapproxy-util --version
# MapProxy 1.13.2
```

## Useful WMS query params

```
?service=WMS&request=GetCapabilities&version=1.3.0
```

```
?format=image%2Fpng&height=512&bbox=388800.010065,5818137.195276,393794.488433,5821374.047744&layers=0&srs=ESPG:25833&style=default&service=WMS&request=GetMap&width=512&version=1.3.0
```

```
?width=512&height=512&bbox=388800,5818137,393794,5821374&layers=0&srs=EPSG:4326&styles=default&format=image/png&service=WMS&request=GetMap&version=1.3.0
```
