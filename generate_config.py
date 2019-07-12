#!/usr/bin/env python
# -*- coding: utf-8 -*-
import yaml

with open('sources.yml') as f:
    sources = yaml.safe_load(f.read())

config = {
    'services': {
        'demo': {},
        'tms': {
          'use_grid_names': True,
          'origin': 'nw'
        }
    },
    'layers': [],
    'caches': {},
    'sources': {},
    'grids': {
        'mercator': {
            'base': 'GLOBAL_MERCATOR'
        }
    },
    'globals': {}
}

for source in sources:
    assert isinstance(source['name'], str)

    cache_name = source['name'] + '_cache'
    source_name = source['name'] + '_source'

    config['layers'].append({
        'name': source['name'],
        'title': source['title'],
        'sources': [cache_name]
    })
    config['caches'][cache_name] = {
        'grids': ['mercator'],
        'sources': [source_name]
    }
    config['sources'][source_name] = {
        'type': 'wms',
        'wms_opts': {
            'version': '1.3.0'
        },
        'supported_srs': ['EPSG:25833'],
        'req': {
            'url': source['url'],
            'layers': source['layer'],
            'style': 'default',
            'format': 'png',
            'transparent': source['transparent']
        }
    }

with open('config.yml', 'w') as f:
    f.write(yaml.dump(config))
