#!/usr/bin/env python
# -*- coding: utf-8 -*-
import yaml

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

sources = [
    {
        'name': 'zoom',
        'title': 'Berlin Zoom',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/berlinzoom',
        'layer': '0'
    },
    {
        'name': 'alkis_30',
        'title': 'ALKIS Berlin (Amtliches Liegenschaftskatasterinformationssystem)',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis',
        'layer': '30'
    },
    {
        'name': 'atkis_dgm_1',
        'title': 'ATKIS® DGM - Digitales Geländemodell',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_dgm1',
        'layer': '1'
    },
    {
        'name': 'atkis_dgm_3',
        'title': 'ATKIS® DGM - Digitales Geländemodell',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_dgm1',
        'layer': '3'
    },
    {
        'name': 'atkis_dom',
        'title': 'ATKIS® DOM - Digitales Oberflächenmodell',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_dom',
        'layer': '1'
    },
    {
        'name': '2018',
        'title': 'Digitale farbige Orthophotos 2018 (DOP20RGB)',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2018_rgb',
        'layer': '0'
    },
    {
        'name': '2016_cir',
        'title': 'Digitale Color-Infrarot-Orthophotos 2016 (DOP20CIR)',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2016_cir',
        'layer': '0'
    },
    {
        'name': '2015_cir',
        'title': 'Digitale Color-Infrarot-Orthophotos 2015 (DOP20CIR)',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2015_cir',
        'layer': '0'
    },
    {
        'name': '1953',
        'title': 'Berlin 1953',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild1953',
        'layer': '0'
    },
    {
        'name': '1928',
        'title': 'Berlin 1928',
        'url': 'https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild1928',
        'layer': '0'
    }
]

for source in sources:
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
            'transparent': True
        }
    }

with open('config.yml', 'w') as f:
    f.write(yaml.dump(config))
