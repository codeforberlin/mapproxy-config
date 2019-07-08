fis-broker-proxy
================

Install
-------

```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
make  # will produce config.yml
```

Run local
---------

```
make serve
```

Deploment
---------

```
make wsgi  # creates the wsgi.py script
```

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


Useful WMS query params
-----------------------

```
?service=WMS&request=GetCapabilities&version=1.1.1

?format=image%2Fpng&height=512&bbox=388800.010065,5818137.195276,393794.488433,5821374.047744&layers=0&srs=ESPG:25833&style=default&service=WMS&request=GetMap&width=512&version=1.1.1

?width=512&height=512&bbox=388800,5818137,393794,5821374&layers=0&srs=EPSG:4326&styles=default&format=image/png&service=WMS&request=GetMap&version=1.1.1
```