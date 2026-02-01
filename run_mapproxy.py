#!/usr/bin/env python3
"""
Run MapProxy with log.ini loaded so source request URLs are logged to
mapproxy_log/source-requests.log and to stderr (docker logs).
Clears tile cache on every start so restart always fetches fresh tiles.
"""
import logging
import logging.config
import os
import shutil
import sys

# Clear tile cache on every start (so docker compose restart gives fresh tiles)
cache_data = "/mapproxy/cache_data"
if os.path.isdir(cache_data):
    shutil.rmtree(cache_data, ignore_errors=True)

# Create log dir before loading log.ini (FileHandler needs it)
log_dir = "/mapproxy/mapproxy_log"
os.makedirs(log_dir, exist_ok=True)
logging.config.fileConfig(
    "/mapproxy/log.ini",
    disable_existing_loggers=False,
    defaults={"here": "/mapproxy"},
)

from mapproxy.wsgiapp import make_wsgi_app
from mapproxy.config.loader import ConfigurationError
from mapproxy.util.ext.serving import run_simple

mapproxy_conf = "/mapproxy/config.yml"
debug = "--debug" in sys.argv or "-d" in sys.argv
host, port = "0.0.0.0", 8080

try:
    app = make_wsgi_app(mapproxy_conf, debug=debug)
except ConfigurationError:
    sys.exit(2)

extra_files = list(app.config_files.keys())
run_simple(
    host,
    port,
    app,
    use_reloader=True,
    processes=1,
    threaded=True,
    passthrough_errors=True,
    extra_files=extra_files,
)
