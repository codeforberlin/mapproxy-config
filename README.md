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
mapproxy-util serve-develop config.yml
```

Useful WMS query params
-----------------------

```
?service=WMS&request=GetCapabilities&version=1.1.1

?format=image%2Fpng&height=512&bbox=388800.010065,5818137.195276,393794.488433,5821374.047744&layers=0&srs=ESPG:25833&style=default&service=WMS&request=GetMap&width=512&version=1.1.1

?width=512&height=512&bbox=388800,5818137,393794,5821374&layers=0&srs=EPSG:4326&styles=default&format=image/png&service=WMS&request=GetMap&version=1.1.1
```