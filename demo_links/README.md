
  # A list of all available maps with demo and editing urls

  See [UPDATE.md](https://github.com/codeforberlin/mapproxy-config/blob/master/demo_links/UPDATE.md) for instructions on how to update this file.

  The list reads [config.yml](../config.yml) and endpoint comment files from [endpoints/](../endpoints/).

  ---


## Digitale Color-Infrarot-Orthophotos 2015 (DOP20CIR)

<img src="https://mapproxy.codefor.de/tiles/1.0.0/2015_cir/mercator/16/35198/21494.png" width=200 alt="Demo image for Digitale Color-Infrarot-Orthophotos 2015 (DOP20CIR)" />



> [!NOTE]
> 2024-05-03: https://gdi.berlin.de/viewer/main/ verwendet noch fbinter.stadt-berlin.de.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/2015_cir/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/2015_cir/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/2015_cir/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fk_luftbild2015_cir">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2015_cir

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": 0,
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2015_cir"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## Digitale Color-Infrarot-Orthophotos 2016 (DOP20CIR)

<img src="https://mapproxy.codefor.de/tiles/1.0.0/2016_cir/mercator/16/35198/21494.png" width=200 alt="Demo image for Digitale Color-Infrarot-Orthophotos 2016 (DOP20CIR)" />



> [!NOTE]
> 2024-05-03: https://gdi.berlin.de/viewer/main/ verwendet noch fbinter.stadt-berlin.de.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/2016_cir/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/2016_cir/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/2016_cir/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fk_luftbild2016_cir">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2016_cir

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": 0,
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_luftbild2016_cir"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## ALKIS Berlin (Amtliches Liegenschaftskatasterinformationssystem)

<img src="https://mapproxy.codefor.de/tiles/1.0.0/alkis_30/mercator/16/35198/21494.png" width=200 alt="Demo image for ALKIS Berlin (Amtliches Liegenschaftskatasterinformationssystem)" />



> [!NOTE]
> 2024-05-03: https://gdi.berlin.de/viewer/main/ verwendet noch fbinter.stadt-berlin.de.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/alkis_30/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/alkis_30/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/alkis_30/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > Used in https://github.com/osmlab/editor-layer-index/blob/gh-pages/sources/europe/de/BerlinAlkis.geojson?short_path=b7406a2

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fwmsk_alkis">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "30,5,21,0,29,4,7,13,9,25,8,18,20,16,28,12,24,22,34,26,47,46,44,43",
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## ALKIS Berlin s/w (Amtliches Liegenschaftskatasterinformationssystem)

<img src="https://mapproxy.codefor.de/tiles/1.0.0/alkis_sw/mercator/16/35198/21494.png" width=200 alt="Demo image for ALKIS Berlin s/w (Amtliches Liegenschaftskatasterinformationssystem)" />



> [!NOTE]
> 2024-05-03: https://gdi.berlin.de/viewer/main/ verwendet noch fbinter.stadt-berlin.de.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/alkis_sw/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/alkis_sw/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/alkis_sw/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fwmsk_alkis_sw">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "30,21,0,29,4,13,9,25,8,18,20,28,12,24,22,34,26,47,46,44",
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## Öffentliche Beleuchtung, ALKIS Berlin s/w

<img src="https://mapproxy.codefor.de/tiles/1.0.0/k_oeffbeleucht_alkis/mercator/16/35198/21494.png" width=200 alt="Demo image for Öffentliche Beleuchtung, ALKIS Berlin s/w" />



> [!NOTE]
> 2025-08-02: Updated to use gdi.berlin.de/services/wms/beleuchtung.
2024-05-03: Added from https://daten.berlin.de/datensaetze/%C3%B6ffentliche-beleuchtung-wms


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/k_oeffbeleucht_alkis/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/k_oeffbeleucht_alkis/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/k_oeffbeleucht_alkis/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > I did not check if the OSM license waiver applies to this dataset as well.

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fwmsk_alkis_sw">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw
- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fbeleuchtung">WFSExplorer</a> for https://gdi.berlin.de/services/wms/beleuchtung

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "30,21,0,29,4,13,9,25,8,18,20,28,12,24,22,34,26,47,46,44",
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  },
  {
    "req": {
      "format": "png",
      "layers": "beleuchtung",
      "style": "default",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/beleuchtung"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## ATKIS® DOM - Digitales Oberflächenmodell

<img src="https://mapproxy.codefor.de/tiles/1.0.0/atkis_dom/mercator/16/35198/21494.png" width=200 alt="Demo image for ATKIS® DOM - Digitales Oberflächenmodell" />



> [!NOTE]
> 2024-05-03: Updated to use gdi.berlin.de.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/atkis_dom/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/atkis_dom/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/atkis_dom/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > OK for trees and houses, but otherwise pretty pixelated.

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fbdom">WFSExplorer</a> for https://gdi.berlin.de/services/wms/bdom

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "b_bdom,a_bdom_schummerung",
      "style": "default",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/bdom"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## Straßenbefahrung 2014

<img src="https://mapproxy.codefor.de/tiles/1.0.0/strassenbefahrung/mercator/16/35198/21494.png" width=200 alt="Demo image for Straßenbefahrung 2014" />



> [!NOTE]
> 2024-05-03: Updated to use gdi.berlin.de.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/strassenbefahrung/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/strassenbefahrung/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/strassenbefahrung/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > Remember that this data is from 2014.
2024-05: Used in https://github.com/osmlab/editor-layer-index/blob/gh-pages/sources/europe/de/BerlinStrassenbefahrung.geojson?short_path=10b5602


- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung">WFSExplorer</a> for https://gdi.berlin.de/services/wms/strassenbefahrung

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "cm_fahrbahn,cl_gehweg,ck_parkflaeche,cj_fussgaengerzone,ci_oeffentlicher_platz,ch_radweg,cg_baustelle,cf_trennstreifen,ce_gruenflaeche,cd_rampe,cc_treppe,cb_haltestellenwartebereich,ca_haltebereich_bus,bz_gleiskoerper_strab,by_gehwegueberfahrt,bx_fahrbahnschwelle,bw_aufmerksamkeitsfeld,bv_springbrunnen_zierbrunnen,bu_recycling_container,bu1_kleinbauten_sondernutzung,bt_kabelschacht,bs_induktionsschleife,br_fahrgastunterstand,bq_fahrradstaender,bp_fahrbahnmarkierung_flaeche,bo_denkmal,bn_baumscheibe,bm_zugangsbauwerk,bl_strassenentwaesserungsrinne,bk_strassenbegrenzung,bj_sitzbank,bi_schranke,bh_mauer,bg_leitplanke,bf_gelaender,be_fahrbahnmarkierunglinie,bd_bordstein,bc_aufmerksamkeitsstreifen,bb_verkehrsschutzgitter,ba_telefonzelle_telefonstele,az_taxirufsaeule,ay_streugutbehaelter,ax_strassensinkkasten,aw_spielgeraet,av_poller,au_parkscheinautomat,at_mast_lsa,as_mast,ar_kanaldeckel,ar1_kabelkasten,aq_hydrant,ap_handsteuergeraet_lsa,ao_gebaeudeeingang,an_fahrbahnmarkierung_piktogramm,am_fahnenmast,al_durchfahrtshoehe,ak_briefkasten,aj_anlegestelle,ai_anforderungstaster_radverkehr,ah_abfallbehaelter_muellbox,ag_werbesaeule,af_wasserpumpen_brunnen,ae_viz_infotafel,ad_uhr,ac_trinkwasserbrunnen_wasserspender,ab_touchpoint,aa_verkehrszeichen",
      "style": "default",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/strassenbefahrung"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## Straßenbefahrung 2014, ALKIS Berlin s/w

<img src="https://mapproxy.codefor.de/tiles/1.0.0/strassenbefahrung_alkis/mercator/16/35198/21494.png" width=200 alt="Demo image for Straßenbefahrung 2014, ALKIS Berlin s/w" />



> [!NOTE]
> 2024-05-03: Updated to use gdi.berlin.de.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/strassenbefahrung_alkis/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/strassenbefahrung_alkis/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/strassenbefahrung_alkis/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > Remember that this data is from 2014.
2024-05: Used in https://github.com/osmlab/editor-layer-index/blob/gh-pages/sources/europe/de/BerlinStrassenbefahrungAlkis.geojson?short_path=10b5602


- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fwmsk_alkis_sw">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw
- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung">WFSExplorer</a> for https://gdi.berlin.de/services/wms/strassenbefahrung

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "30,21,0,29,4,13,9,25,8,18,20,28,12,24,22,34,26,47,46,44",
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  },
  {
    "req": {
      "format": "png",
      "layers": "cm_fahrbahn,cl_gehweg,ck_parkflaeche,cj_fussgaengerzone,ci_oeffentlicher_platz,ch_radweg,cg_baustelle,cf_trennstreifen,ce_gruenflaeche,cd_rampe,cc_treppe,cb_haltestellenwartebereich,ca_haltebereich_bus,bz_gleiskoerper_strab,by_gehwegueberfahrt,bx_fahrbahnschwelle,bw_aufmerksamkeitsfeld,bv_springbrunnen_zierbrunnen,bu_recycling_container,bu1_kleinbauten_sondernutzung,bt_kabelschacht,bs_induktionsschleife,br_fahrgastunterstand,bq_fahrradstaender,bp_fahrbahnmarkierung_flaeche,bo_denkmal,bn_baumscheibe,bm_zugangsbauwerk,bl_strassenentwaesserungsrinne,bk_strassenbegrenzung,bj_sitzbank,bi_schranke,bh_mauer,bg_leitplanke,bf_gelaender,be_fahrbahnmarkierunglinie,bd_bordstein,bc_aufmerksamkeitsstreifen,bb_verkehrsschutzgitter,ba_telefonzelle_telefonstele,az_taxirufsaeule,ay_streugutbehaelter,ax_strassensinkkasten,aw_spielgeraet,av_poller,au_parkscheinautomat,at_mast_lsa,as_mast,ar_kanaldeckel,ar1_kabelkasten,aq_hydrant,ap_handsteuergeraet_lsa,ao_gebaeudeeingang,an_fahrbahnmarkierung_piktogramm,am_fahnenmast,al_durchfahrtshoehe,ak_briefkasten,aj_anlegestelle,ai_anforderungstaster_radverkehr,ah_abfallbehaelter_muellbox,ag_werbesaeule,af_wasserpumpen_brunnen,ae_viz_infotafel,ad_uhr,ac_trinkwasserbrunnen_wasserspender,ab_touchpoint,aa_verkehrszeichen",
      "style": "default",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/strassenbefahrung"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## Baumbestand Berlin - Straßenbäume, Anlagenbäume und Grün Berlin

<img src="https://mapproxy.codefor.de/tiles/1.0.0/baumbestand_0_1_3_4_merged/mercator/16/35198/21494.png" width=200 alt="Demo image for Baumbestand Berlin - Straßenbäume, Anlagenbäume und Grün Berlin" />



> [!NOTE]
> 2025-08-02: Updated to gdi URI and new endpoint and layer setup.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/baumbestand_0_1_3_4_merged/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/baumbestand_0_1_3_4_merged/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/baumbestand_0_1_3_4_merged/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > Comprehensive layer with all tree types for mapping.

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fbaumbestand">WFSExplorer</a> for https://gdi.berlin.de/services/wms/baumbestand
- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fbaumbestand_gruen_berlin">WFSExplorer</a> for https://gdi.berlin.de/services/wms/baumbestand_gruen_berlin

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "anlagenbaeume,strassenbaeume",
      "style": "anlagenbaeume,strassenbaeume",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/baumbestand"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  },
  {
    "req": {
      "format": "png",
      "layers": "anlagenbaum_gruenberlin",
      "style": "default",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/baumbestand_gruen_berlin"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## Baumbestand Berlin - Straßenbäume, Anlagenbäume und Grün Berlin, ALKIS Berlin s/w

<img src="https://mapproxy.codefor.de/tiles/1.0.0/baumbestand_0_1_3_4_alkis/mercator/16/35198/21494.png" width=200 alt="Demo image for Baumbestand Berlin - Straßenbäume, Anlagenbäume und Grün Berlin, ALKIS Berlin s/w" />



> [!NOTE]
> 2025-08-02: Updated to gdi URI and new endpoint and layer setup.


- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/baumbestand_0_1_3_4_alkis/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/baumbestand_0_1_3_4_alkis/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/baumbestand_0_1_3_4_alkis/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > Recommended layer for tree mapping with cadastral background. Includes all tree types.


- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fwmsk_alkis_sw">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw
- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fbaumbestand">WFSExplorer</a> for https://gdi.berlin.de/services/wms/baumbestand
- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fbaumbestand_gruen_berlin">WFSExplorer</a> for https://gdi.berlin.de/services/wms/baumbestand_gruen_berlin

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "30,21,0,29,4,13,9,25,8,18,20,28,12,24,22,34,26,47,46,44",
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  },
  {
    "req": {
      "format": "png",
      "layers": "anlagenbaeume,strassenbaeume",
      "style": "anlagenbaeume,strassenbaeume",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/baumbestand"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  },
  {
    "req": {
      "format": "png",
      "layers": "anlagenbaum_gruenberlin",
      "style": "default",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/baumbestand_gruen_berlin"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## Tempolimits, ALKIS Berlin s/w

<img src="https://mapproxy.codefor.de/tiles/1.0.0/tempolimits_alkis/mercator/16/35198/21494.png" width=200 alt="Demo image for Tempolimits, ALKIS Berlin s/w" />





- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/tempolimits_alkis/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/tempolimits_alkis/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/tempolimits_alkis/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > I did not check if the OSM license waiver applies to this dataset as well.

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fwmsk_alkis_sw">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw
- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Ftempolimits">WFSExplorer</a> for https://gdi.berlin.de/services/wms/tempolimits

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "30,21,0,29,4,13,9,25,8,18,20,28,12,24,22,34,26,47,46,44",
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  },
  {
    "req": {
      "format": "png",
      "layers": "hoechstgeschwindigkeit",
      "style": "default",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/tempolimits"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>

## Fußgängernetz, ALKIS Berlin s/w

<img src="https://mapproxy.codefor.de/tiles/1.0.0/fussgaengernetz_alkis/mercator/16/35198/21494.png" width=200 alt="Demo image for Fußgängernetz, ALKIS Berlin s/w" />





- TMS URL: ```https://mapproxy.codefor.de/tiles/1.0.0/fussgaengernetz_alkis/mercator/{z}/{x}/{y}.png```

- <a href="https://strassenraumkarte.osm-berlin.org/mapproxy_demo_map?url=https://mapproxy.codefor.de/tiles/1.0.0/fussgaengernetz_alkis/mercator/{z}/{x}/{y}.png">Preview layer</a>

- <a href="https://www.openstreetmap.org/edit?editor=id#background=custom:https://mapproxy.codefor.de/tiles/1.0.0/fussgaengernetz_alkis/mercator/{z}/{x}/{y}.png&disable_features=boundaries&map=20.00/52.47241/13.44637">Use layer to edit OSM</a>
  > I did not check if the OSM license waiver applies to this dataset as well.

- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Ffbinter.stadt-berlin.de%2Ffb%2Fwms%2Fsenstadt%2Fwmsk_alkis_sw">WFSExplorer</a> for https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw
- <a href="https://wfsexplorer.netlify.app/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Ffussgaengernetz">WFSExplorer</a> for https://gdi.berlin.de/services/wms/fussgaengernetz

<details>
<summary>Show layer config options</summary>

```
[
  {
    "req": {
      "format": "png",
      "layers": "30,21,0,29,4,13,9,25,8,18,20,28,12,24,22,34,26,47,46,44",
      "style": "default",
      "transparent": false,
      "url": "https://fbinter.stadt-berlin.de/fb/wms/senstadt/wmsk_alkis_sw"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  },
  {
    "req": {
      "format": "png",
      "layers": "b_strassenelemente,a_verbindungspunkte",
      "style": "default",
      "transparent": true,
      "url": "https://gdi.berlin.de/services/wms/fussgaengernetz"
    },
    "supported_srs": [
      "EPSG:25833"
    ],
    "type": "wms",
    "wms_opts": {
      "version": "1.3.0"
    }
  }
]
```

</details>
