# Layer Definition: Straßenbefahrung 2014

Geodaten des öffentlichen Straßenraums von Berlin. In den Jahren 2014 und 2015 wurde der gesamte öffentliche Straßenraum Berlins durch eine vermessungstechnische Straßenbefahrung erfasst und digitalisiert. Das Ergebnis ist ein digitales Abbild des öffentlichen Straßenraums, welches das Haupt- und Nebenstraßennetz und teilweise auch Wege in öffentlichen Parkanlagen umfasst. Bestandteil der digitalisierten Daten sind Straßenobjekte, Verkehrszeichen und Verkehrsflächen.

**Source**: https://gdi.berlin.de/services/wms/strassenbefahrung

**GetCapabilities**: https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetCapabilities&version=1.3.0

**Supported SRS**: EPSG:25833, EPSG:25832, EPSG:4326, EPSG:4258, EPSG:3857, CRS:84

**Supported Formats**: image/png, image/geotiff, image/gif, image/jpeg, image/tiff, text/html; subtype=openlayers, text/html; subtype=openlayers2, text/html; subtype=openlayers3

---

## Understanding Layers and Styles

- **Layers**: Each layer represents a distinct dataset (e.g., speed limits, street segments). Layers contain the actual geographic data.
- **Styles**: Styles define how a layer is visualized (colors, symbols, line widths, etc.). Each layer has one or more available styles.
- **Layer/Style Combinations**: Each layer can only be used with its own styles (as defined in the WMS GetCapabilities). Styles cannot be mixed across different layers.

---

## Available Layers

Each layer lists its available styles. Use only the styles shown for each specific layer:

| `<name>` (Layer) | Available Styles | `<Title>` | Explanation |
|------------------|------------------|-----------|-------------|
| `aa_verkehrszeichen` | `Straßenbefahrung - Verkehrszeichen` | Straßenbefahrung - Verkehrszeichen | Verkehrszeichenstandorte mit Angabe aller zugehörigen Verkehrszeichen nach Straßenverkehrsordnung (StVO). Straßennamensschilder und Zusatzzeichen sind ebenfalls enthalten. |
| `ab_touchpoint` | `Straßenbefahrung - Touchpoint` | Straßenbefahrung - Touchpoint | Touchpoints sind interaktive öffentliche Terminals (Benutzerendgeräte).&#13; Das Attribut -Anbieter- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | Straßenbefahrung - Trinkwasserbrunnen Wasserspender | Trinkwasserbrunnen und Wasserspender. |
| `ad_uhr` | `Straßenbefahrung - Uhr` | Straßenbefahrung - Uhr | Uhren und Uhrenkandelaber. |
| `ae_viz_infotafel` | `Straßenbefahrung - VIZ-Infotafel` | Straßenbefahrung - VIZ-Infotafel | Anzeigetafeln der Verkehrsinformationszentrale Berlin (VIZ). |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Wasserpumpen Brunnen` | Straßenbefahrung - Wasserpumpen Brunnen | Wasserpumpen und Wasserbrunnen. |
| `ag_werbesaeule` | `Straßenbefahrung - Werbesäule` | Straßenbefahrung - Werbesäule | Werbesäulen (Littfaßsäulen, Halbwerbesäulen, Ganzwerbesäulen und sonstige Werbesäulen). |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Abfallbehälter Müllbox` | Straßenbefahrung - Abfallbehälter Müllbox | Öffentliche Abfallbehälter. |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Anforderungstaster Radverkehr` | Straßenbefahrung - Anforderungstaster Radverkehr | Anforderungstaster für den Radverkehr.&#13; Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `aj_anlegestelle` | `Straßenbefahrung - Anlegestelle` | Straßenbefahrung - Anlegestelle | Zugang zu Anlegestellen, die vom Ufer aus durch einen öffentlich angelegten Weg erreichbar sind. Der Datensatz ist im Bezirk Mitte nicht verfügbar. |
| `ak_briefkasten` | `Straßenbefahrung - Briefkasten` | Straßenbefahrung - Briefkasten | Briefkästen im öffentlichen Straßenland. Das Attribut -Anbieter- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Durchfahrtshöhe` | Straßenbefahrung - Durchfahrtshöhe | Niedrigste Durchfahrtshöhe unter Brücken, Portalen/Schilderbrücken, Fahrdrähten/Oberleitungen, Ampel-Auslegern, Tunneln und sonstige die Durchfahrtshöhe einschränkende Objekte. Durchfahrtshöhen unter Bäumen und Straßenbeleuchtung sind nicht enthalten. Die Durchfahrtshöhen wurden fahrstreifengenau erfasst. Zur Visualisierung der Fahrstreifen sind die Objektklassen "Fahrbahnen" und "Fahrbahnmarkierungen_Linien" heranzuziehen. Das Attribut "Fahrstreifennummer"  ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `am_fahnenmast` | `Straßenbefahrung - Fahnenmast` | Straßenbefahrung - Fahnenmast | Fahnenmasten im öffentlichen  Straßenland. |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | Straßenbefahrung - Fahrbahnmarkierung Piktogramm | Fahrbahnmarkierungen in Piktogrammform nach Richtlinie für die Markierung von Straßen (RMS). Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Gebäudeeingang` | Straßenbefahrung - Gebäudeeingang | Straßenseitige Gebäudeeingänge. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | Straßenbefahrung - Handsteuergerät Lichtsignalanlage | Handsteuergeräte für Lichtsignalanlagen. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `aq_hydrant` | `Straßenbefahrung - Hydrant` | Straßenbefahrung - Hydrant | Hydranten. |
| `ar1_kabelkasten` | `Straßenbefahrung - Kabelkasten Schaltkasten` | Straßenbefahrung - Kabelkasten Schaltkasten | Kabel- und Schaltkästen. Das Attribut "Anzahl" ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `ar_kanaldeckel` | `Straßenbefahrung - Kanaldeckel` | Straßenbefahrung - Kanaldeckel | Kanaldeckel (Schachtdeckel). |
| `as_mast` | `Straßenbefahrung - Mast` | Straßenbefahrung - Mast | Masten. Licht- und Fahnenmasten sind nicht enthalten. |
| `at_mast_lsa` | `Straßenbefahrung - Mast Lichtsignalanlage` | Straßenbefahrung - Mast Lichtsignalanlage | Maststandorte der Signalgeber von Lichtsignalanlagen. Die Attribute "Barriere", "Höhe" und "Masttyp" sind im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `au_parkscheinautomat` | `Straßenbefahrung - Parkscheinautomat` | Straßenbefahrung - Parkscheinautomat | Parkscheinautomaten in Parkraumbewirtschaftungszonen. |
| `av_poller` | `Straßenbefahrung - Poller` | Straßenbefahrung - Poller | Poller. |
| `aw_spielgeraet` | `Straßenbefahrung - Spielgerät` | Straßenbefahrung - Spielgerät | Tischtennisplatten im öffentlichen Straßenland und in Grünanlagen (nicht auf Spielplätzen). |
| `ax_strassensinkkasten` | `Straßenbefahrung - Straßensinkkasten` | Straßenbefahrung - Strassensinkkasten | Straßensinkkästen. |
| `ay_streugutbehaelter` | `Straßenbefahrung - Streugutbehälter` | Straßenbefahrung - Streugutbehälter | Streugutbehälter. |
| `az_taxirufsaeule` | `Straßenbefahrung - Taxirufsäule` | Straßenbefahrung - Taxirufsäule | Taxirufsäulen. |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Telefonzelle Telefonstele` | Straßenbefahrung - Telefonzelle Telefonstele | Öffentliche Telefonzellen und -stelen. |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Verkehrsschutzgitter` | Straßenbefahrung - Verkehrsschutzgitter | Verkehrsschutzgitter. |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | Straßenbefahrung - Aufmerksamkeitsstreifen | Taktile Bodenindikatoren. Enthalten sind Aufmerksamkeitsstreifen mit maximal einer Plattenreihe. Das Attribut -Farbe- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `bd_bordstein` | `Straßenbefahrung - Bordstein` | Straßenbefahrung - Bordstein | Bordsteine. Bordsteine zwischen Fahrbahn und Nebenanlagen sind immer den Nebenanlagen zugeordnet. |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | Straßenbefahrung - Fahrbahnmarkierung_Linie | Fahrbahnmarkierungslinien nach Straßenverkehrsordnung (StVO). Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `bf_gelaender` | `Straßenbefahrung - Geländer` | Straßenbefahrung - Geländer | Handläufe und Absturzsicherungen. Verkehrsschutzgitter sind in der Objektklasse "Verkehrsschutzgitter" enthalten. |
| `bg_leitplanke` | `Straßenbefahrung - Leitplanke` | Straßenbefahrung - Leitplanke | Passive Schutzeinrichtung (Rückhaltesystem) an Straßen. |
| `bh_mauer` | `Straßenbefahrung - Mauer` | Straßenbefahrung - Mauer | Mauern. Das Attribut -Werbefläche- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bi_schranke` | `Straßenbefahrung - Schranke` | Straßenbefahrung - Schranke | Zufahrtsbeschränkungen. Bahnschranken können über die Objektklasse "Verkehrszeichen" (StVO-Nr.: 150, 201) lokalisiert werden. |
| `bj_sitzbank` | `Straßenbefahrung - Sitzbank` | Straßenbefahrung - Sitzbank | Sitzbänke im öffentlichen Straßenland und in Grünanlagen. |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Straßenbegrenzung` | Straßenbefahrung - Straßenbegrenzung | Sichtbare Außengrenzen des öffentlichen Straßenlandes. Abgrenzung durch Gebäudekanten, Zäune, Hecken oder Weiteres. Bei nicht durchgängigen Einfriedungen erfolgte die Grenzziehung "fiktiv". Der Datensatz ist im Bezirk Mitte nicht verfügbar. |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Straßenentwässerungsrinne` | Straßenbefahrung - Straßenentwässerungsrinne | Entwässerungsrinnen im Gehwegbereich und auf öffentlichen Plätzen. |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Zugangsbauwerk` | Straßenbefahrung - Zugangsbauwerk | Zugangsbauwerke zum Öffentlichen Verkehr (U-Bahn, S-Bahn, Zugverkehr). |
| `bn_baumscheibe` | `Straßenbefahrung - Baumscheibe` | Straßenbefahrung - Baumscheibe | Baumscheiben sind der begrenzte Bodenbereich rund um Straßenbäume. Begrenzungen der Baumscheiben in Form von Gittern, Steigbügeln, Kantensteinen etc. wurden als Randeinfassungen erfasst. |
| `bo_denkmal` | `Straßenbefahrung - Denkmal` | Straßenbefahrung - Denkmal | Denkmäler. |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | Straßenbefahrung - Fahrbahnmarkierung Fläche | Fahrbahnmarkierungsflächen nach Straßenverkehrsordnung (StVO). Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahrradständer` | Straßenbefahrung - Fahrradständer | Mit dem Boden verankerte Vorrichtungen zum Abstellen und Anschließen von Fahrrädern.&#13; Im Bezirk Mitte sind die Attribute "Nutzung"  und "Anzahl"  nicht vorhanden, da dieser Bezirk als Pilotbezirk gedient hat. Zudem ist die geometrische Ausprägung des Objektes im Bezirk Mitte ungenau, da aus einer Linie automatisiert eine Fläche erzeugt werden musste, um die Datenhomogenität zu wahren. |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahrgastunterstand` | Straßenbefahrung - Fahrgastunterstand | Fahrgastunterstände (Wartehäuser) an Haltestellen des ÖPNV. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bs_induktionsschleife` | `Straßenbefahrung - Induktionsschleife` | Straßenbefahrung - Induktionsschleife | Induktionsschleifen. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bt_kabelschacht` | `Straßenbefahrung - Kabelschacht` | Straßenbefahrung - Kabelschacht | Kabelschächte. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Kleinbauten Sondernutzung` | Straßenbefahrung - Kleinbauten Sondernutzung | Feste Kleinbauten wie Kioske, Imbisse, öffentliche Toiletten, Wachhäuschen, feste Schankgärten und Ähnliches. Die Attribute "Werbefläche" und "Art" sind im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bu_recycling_container` | `polygon` | Straßenbefahrung - Recycling-Container | Öffentliche Glas- und Papiercontainer sowie Altkleiderboxen. Das Attribut "Nutzung"  ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | Straßenbefahrung - Springbrunnen Zierbrunnen | Spring- und Zierbrunnen. |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Aufmerksamkeitsfeld` | Straßenbefahrung - Aufmerksamkeitsfeld | Taktile Bodenindikatoren. Enthalten sind flächenhafte Ausprägungen. Das Attribut -Farbe- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahrbahnschwelle` | Straßenbefahrung - Fahrbahnschwelle | Fahrbahnschwellen im öffentlichen Straßenland. |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Gehwegüberfahrt` | Straßenbefahrung - Gehwegüberfahrt | Baulich angelegte Gehwegüberfahrten (Aus- und Einfahrten zu Grundstücken). |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Gleiskörper Straßenbahn` | Straßenbefahrung - Gleiskörper Straßenbahn | Gleiskörper für Straßenbahn. Der Bereich umfasst das komplette Gleisbett, (Schotter, Asphalt, Beton o.ä. Material). Der Gleiskörper wird bei Gleisen auf der Fahrbahn durch die äußeren Schienen begrenzt. Das Attribut -Art- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `ca_haltebereich_bus` | `Straßenbefahrung - Haltebereich Bus` | Straßenbefahrung - Haltebereich Bus | Haltebereiche Bus mit von der Fahrbahn abweichendem Oberflächenmaterial. Die Attribute -Material- und -Zustand- sind im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. Zudem ist die geometrische Ausprägung des Objektes im Bezirk Mitte ungenau, da aus einem Punkt automatisiert eine Fläche erzeugt werden musste, um die Datenhomogenität zu wahren. |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Haltestellenwartebereich` | Straßenbefahrung - Haltestellenwartebereich | Wartefläche für Fahrgäste an Bus- und Straßenbahnhaltestellen. Bei nicht abweichendem Oberflächenmaterial des Haltestellenwartebereichs sind die Flächen "fiktiv". Die Haltestellenwartebereiche am Straßenrand sind Teil der Gehwegfläche. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `cc_treppe` | `Straßenbefahrung - Treppe` | Straßenbefahrung - Treppe | Treppen. |
| `cd_rampe` | `Straßenbefahrung - Rampe` | Straßenbefahrung - Rampe | Rampen im Gehwegbereich. |
| `ce_gruenflaeche` | `Straßenbefahrung - Grünfläche` | Straßenbefahrung - Grünfläche |  |
| `cf_trennstreifen` | `Straßenbefahrung - Trennstreifen` | Straßenbefahrung - Trennstreifen | Straßenbegleitflächen, die sich zwischen zwei Fahrbahnen oder zwischen Fahrbahn und sonstigen Verkehrsflächen (z.B. Gleisbett Straßenbahn) befinden. Die verschiedenen Trennstreifenstrukturen wurden erst ab >0,3 m Breite erfasst. Das Attribut -Lage- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `cg_baustelle` | `Straßenbefahrung - Baustelle` | Straßenbefahrung - Baustelle | Aufgrund von Baustellen zum Zeitpunkt der Befahrung war in diesen Bereichen keine Datenerfassung möglich. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. Sie stellen daher eine "Lücke" im Flächenmodell dar. |
| `ch_radweg` | `Straßenbefahrung - Radweg` | Straßenbefahrung - Radweg | Ein Radweg ist der Teil der Verkehrsfläche, der für den Fahrradverkehr vorgesehen ist. Hochbordradwege sind in der Regel farblich oder durch einen Kantenstein vom Gehweg getrennt. Radfahrstreifen wurden als überlagerte Fläche aufgenommen. Benutzungspflichtige Radwege sind durch die Zeichen 237, 240 oder 241 (StVO) ausgewiesen. Fahrradstraßen sind über das Zeichen 244 (StVO) zu lokalisieren. |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Öffentlicher Platz` | Straßenbefahrung - Öffentlicher Platz | Öffentliche Plätze. |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fußgängerzone` | Straßenbefahrung - Fussgängerzone | Fußgängerzonen. |
| `ck_parkflaeche` | `Straßenbefahrung - Parkfläche` | Straßenbefahrung - Parkfläche | Durch Fahrbahnmarkierung oder bauliche Trennung ausgewiesene Parkflächen. Weitere Parkflächen, die ausschließlich durch Verkehrszeichen angeordnet sind, können über die Objektklasse "Verkehrszeichen" (StVO-Nr.: 314, 315) lokalisiert werden. Das Attribut "Art" ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `cl_gehweg` | `Straßenbefahrung - Gehweg` | Straßenbefahrung - Gehweg | Ein Gehweg ist der Teil der Verkehrsfläche der für den Fußverkehr vorgesehen ist. |
| `cm_fahrbahn` | `Straßenbefahrung - Fahrbahn` | Straßenbefahrung - Fahrbahn | Fahrbahnen sind die für den Fahrzeugverkehr bestimmten Verkehrsflächen. Fahrbahnen sind von Bordsteinkante bis zur gegenüberliegenden Bordsteinkante erfasst worden. |

---

## Demo Links

All possible layer/style combinations. Valid combinations (✓) have previews; invalid combinations (✗) are not supported by the WMS service.

| Layer | Style | Status | Preview Image | Links |
|-------|-------|--------|---------------|-------|
| `aa_verkehrszeichen` | `Straßenbefahrung - Verkehrszeichen` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aa_verkehrszeichen&styles=Stra%C3%9Fenbefahrung+-+Verkehrszeichen&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Verkehrszeichen (Straßenbefahrung - Verkehrszeichen)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aa_verkehrszeichen&styles=Stra%C3%9Fenbefahrung+-+Verkehrszeichen&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Verkehrszeichen (Straßenbefahrung - Verkehrszeichen)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Daa_verkehrszeichen%26styles%3DStra%C3%9Fenbefahrung%20-%20Verkehrszeichen%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `aa_verkehrszeichen` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aa_verkehrszeichen` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Touchpoint` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ab_touchpoint&styles=Stra%C3%9Fenbefahrung+-+Touchpoint&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Touchpoint (Straßenbefahrung - Touchpoint)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ab_touchpoint&styles=Stra%C3%9Fenbefahrung+-+Touchpoint&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Touchpoint (Straßenbefahrung - Touchpoint)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dab_touchpoint%26styles%3DStra%C3%9Fenbefahrung%20-%20Touchpoint%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ab_touchpoint` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ab_touchpoint` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ac_trinkwasserbrunnen_wasserspender&styles=Stra%C3%9Fenbefahrung+-+Trinkwasserbrunnen+Wasserspender&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Trinkwasserbrunnen Wasserspender (Straßenbefahrung - Trinkwasserbrunnen Wasserspender)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ac_trinkwasserbrunnen_wasserspender&styles=Stra%C3%9Fenbefahrung+-+Trinkwasserbrunnen+Wasserspender&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Trinkwasserbrunnen Wasserspender (Straßenbefahrung - Trinkwasserbrunnen Wasserspender)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dac_trinkwasserbrunnen_wasserspender%26styles%3DStra%C3%9Fenbefahrung%20-%20Trinkwasserbrunnen%20Wasserspender%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ac_trinkwasserbrunnen_wasserspender` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Uhr` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ad_uhr&styles=Stra%C3%9Fenbefahrung+-+Uhr&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Uhr (Straßenbefahrung - Uhr)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ad_uhr&styles=Stra%C3%9Fenbefahrung+-+Uhr&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Uhr (Straßenbefahrung - Uhr)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dad_uhr%26styles%3DStra%C3%9Fenbefahrung%20-%20Uhr%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ad_uhr` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ad_uhr` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - VIZ-Infotafel` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ae_viz_infotafel&styles=Stra%C3%9Fenbefahrung+-+VIZ-Infotafel&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - VIZ-Infotafel (Straßenbefahrung - VIZ-Infotafel)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ae_viz_infotafel&styles=Stra%C3%9Fenbefahrung+-+VIZ-Infotafel&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - VIZ-Infotafel (Straßenbefahrung - VIZ-Infotafel)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dae_viz_infotafel%26styles%3DStra%C3%9Fenbefahrung%20-%20VIZ-Infotafel%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ae_viz_infotafel` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ae_viz_infotafel` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=af_wasserpumpen_brunnen&styles=Stra%C3%9Fenbefahrung+-+Wasserpumpen+Brunnen&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Wasserpumpen Brunnen (Straßenbefahrung - Wasserpumpen Brunnen)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=af_wasserpumpen_brunnen&styles=Stra%C3%9Fenbefahrung+-+Wasserpumpen+Brunnen&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Wasserpumpen Brunnen (Straßenbefahrung - Wasserpumpen Brunnen)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Daf_wasserpumpen_brunnen%26styles%3DStra%C3%9Fenbefahrung%20-%20Wasserpumpen%20Brunnen%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `af_wasserpumpen_brunnen` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Werbesäule` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ag_werbesaeule&styles=Stra%C3%9Fenbefahrung+-+Werbes%C3%A4ule&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Werbesäule (Straßenbefahrung - Werbesäule)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ag_werbesaeule&styles=Stra%C3%9Fenbefahrung+-+Werbes%C3%A4ule&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Werbesäule (Straßenbefahrung - Werbesäule)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dag_werbesaeule%26styles%3DStra%C3%9Fenbefahrung%20-%20Werbes%C3%A4ule%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ag_werbesaeule` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ag_werbesaeule` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ah_abfallbehaelter_muellbox&styles=Stra%C3%9Fenbefahrung+-+Abfallbeh%C3%A4lter+M%C3%BCllbox&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Abfallbehälter Müllbox (Straßenbefahrung - Abfallbehälter Müllbox)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ah_abfallbehaelter_muellbox&styles=Stra%C3%9Fenbefahrung+-+Abfallbeh%C3%A4lter+M%C3%BCllbox&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Abfallbehälter Müllbox (Straßenbefahrung - Abfallbehälter Müllbox)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dah_abfallbehaelter_muellbox%26styles%3DStra%C3%9Fenbefahrung%20-%20Abfallbeh%C3%A4lter%20M%C3%BCllbox%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ah_abfallbehaelter_muellbox` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ai_anforderungstaster_radverkehr&styles=Stra%C3%9Fenbefahrung+-+Anforderungstaster+Radverkehr&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Anforderungstaster Radverkehr (Straßenbefahrung - Anforderungstaster Radverkehr)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ai_anforderungstaster_radverkehr&styles=Stra%C3%9Fenbefahrung+-+Anforderungstaster+Radverkehr&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Anforderungstaster Radverkehr (Straßenbefahrung - Anforderungstaster Radverkehr)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dai_anforderungstaster_radverkehr%26styles%3DStra%C3%9Fenbefahrung%20-%20Anforderungstaster%20Radverkehr%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ai_anforderungstaster_radverkehr` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Anlegestelle` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aj_anlegestelle&styles=Stra%C3%9Fenbefahrung+-+Anlegestelle&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Anlegestelle (Straßenbefahrung - Anlegestelle)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aj_anlegestelle&styles=Stra%C3%9Fenbefahrung+-+Anlegestelle&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Anlegestelle (Straßenbefahrung - Anlegestelle)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Daj_anlegestelle%26styles%3DStra%C3%9Fenbefahrung%20-%20Anlegestelle%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `aj_anlegestelle` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aj_anlegestelle` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Briefkasten` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ak_briefkasten&styles=Stra%C3%9Fenbefahrung+-+Briefkasten&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Briefkasten (Straßenbefahrung - Briefkasten)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ak_briefkasten&styles=Stra%C3%9Fenbefahrung+-+Briefkasten&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Briefkasten (Straßenbefahrung - Briefkasten)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dak_briefkasten%26styles%3DStra%C3%9Fenbefahrung%20-%20Briefkasten%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ak_briefkasten` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ak_briefkasten` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Durchfahrtshöhe` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=al_durchfahrtshoehe&styles=Stra%C3%9Fenbefahrung+-+Durchfahrtsh%C3%B6he&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Durchfahrtshöhe (Straßenbefahrung - Durchfahrtshöhe)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=al_durchfahrtshoehe&styles=Stra%C3%9Fenbefahrung+-+Durchfahrtsh%C3%B6he&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Durchfahrtshöhe (Straßenbefahrung - Durchfahrtshöhe)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dal_durchfahrtshoehe%26styles%3DStra%C3%9Fenbefahrung%20-%20Durchfahrtsh%C3%B6he%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `al_durchfahrtshoehe` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fahnenmast` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=am_fahnenmast&styles=Stra%C3%9Fenbefahrung+-+Fahnenmast&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fahnenmast (Straßenbefahrung - Fahnenmast)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=am_fahnenmast&styles=Stra%C3%9Fenbefahrung+-+Fahnenmast&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fahnenmast (Straßenbefahrung - Fahnenmast)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dam_fahnenmast%26styles%3DStra%C3%9Fenbefahrung%20-%20Fahnenmast%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `am_fahnenmast` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `am_fahnenmast` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=an_fahrbahnmarkierung_piktogramm&styles=Stra%C3%9Fenbefahrung+-+Fahrbahnmarkierung+Piktogramm&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fahrbahnmarkierung Piktogramm (Straßenbefahrung - Fahrbahnmarkierung Piktogramm)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=an_fahrbahnmarkierung_piktogramm&styles=Stra%C3%9Fenbefahrung+-+Fahrbahnmarkierung+Piktogramm&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fahrbahnmarkierung Piktogramm (Straßenbefahrung - Fahrbahnmarkierung Piktogramm)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dan_fahrbahnmarkierung_piktogramm%26styles%3DStra%C3%9Fenbefahrung%20-%20Fahrbahnmarkierung%20Piktogramm%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `an_fahrbahnmarkierung_piktogramm` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Gebäudeeingang` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ao_gebaeudeeingang&styles=Stra%C3%9Fenbefahrung+-+Geb%C3%A4udeeingang&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Gebäudeeingang (Straßenbefahrung - Gebäudeeingang)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ao_gebaeudeeingang&styles=Stra%C3%9Fenbefahrung+-+Geb%C3%A4udeeingang&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Gebäudeeingang (Straßenbefahrung - Gebäudeeingang)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dao_gebaeudeeingang%26styles%3DStra%C3%9Fenbefahrung%20-%20Geb%C3%A4udeeingang%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ao_gebaeudeeingang` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ap_handsteuergeraet_lsa&styles=Stra%C3%9Fenbefahrung+-+Handsteuerger%C3%A4t+Lichtsignalanlage&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Handsteuergerät Lichtsignalanlage (Straßenbefahrung - Handsteuergerät Lichtsignalanlage)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ap_handsteuergeraet_lsa&styles=Stra%C3%9Fenbefahrung+-+Handsteuerger%C3%A4t+Lichtsignalanlage&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Handsteuergerät Lichtsignalanlage (Straßenbefahrung - Handsteuergerät Lichtsignalanlage)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dap_handsteuergeraet_lsa%26styles%3DStra%C3%9Fenbefahrung%20-%20Handsteuerger%C3%A4t%20Lichtsignalanlage%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ap_handsteuergeraet_lsa` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Hydrant` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aq_hydrant&styles=Stra%C3%9Fenbefahrung+-+Hydrant&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Hydrant (Straßenbefahrung - Hydrant)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aq_hydrant&styles=Stra%C3%9Fenbefahrung+-+Hydrant&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Hydrant (Straßenbefahrung - Hydrant)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Daq_hydrant%26styles%3DStra%C3%9Fenbefahrung%20-%20Hydrant%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `aq_hydrant` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aq_hydrant` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ar1_kabelkasten&styles=Stra%C3%9Fenbefahrung+-+Kabelkasten+Schaltkasten&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Kabelkasten Schaltkasten (Straßenbefahrung - Kabelkasten Schaltkasten)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ar1_kabelkasten&styles=Stra%C3%9Fenbefahrung+-+Kabelkasten+Schaltkasten&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Kabelkasten Schaltkasten (Straßenbefahrung - Kabelkasten Schaltkasten)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dar1_kabelkasten%26styles%3DStra%C3%9Fenbefahrung%20-%20Kabelkasten%20Schaltkasten%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ar1_kabelkasten` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar1_kabelkasten` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Kanaldeckel` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ar_kanaldeckel&styles=Stra%C3%9Fenbefahrung+-+Kanaldeckel&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Kanaldeckel (Straßenbefahrung - Kanaldeckel)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ar_kanaldeckel&styles=Stra%C3%9Fenbefahrung+-+Kanaldeckel&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Kanaldeckel (Straßenbefahrung - Kanaldeckel)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dar_kanaldeckel%26styles%3DStra%C3%9Fenbefahrung%20-%20Kanaldeckel%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ar_kanaldeckel` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ar_kanaldeckel` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Mast` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=as_mast&styles=Stra%C3%9Fenbefahrung+-+Mast&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Mast (Straßenbefahrung - Mast)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=as_mast&styles=Stra%C3%9Fenbefahrung+-+Mast&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Mast (Straßenbefahrung - Mast)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Das_mast%26styles%3DStra%C3%9Fenbefahrung%20-%20Mast%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `as_mast` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `as_mast` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=at_mast_lsa&styles=Stra%C3%9Fenbefahrung+-+Mast+Lichtsignalanlage&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Mast Lichtsignalanlage (Straßenbefahrung - Mast Lichtsignalanlage)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=at_mast_lsa&styles=Stra%C3%9Fenbefahrung+-+Mast+Lichtsignalanlage&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Mast Lichtsignalanlage (Straßenbefahrung - Mast Lichtsignalanlage)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dat_mast_lsa%26styles%3DStra%C3%9Fenbefahrung%20-%20Mast%20Lichtsignalanlage%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `at_mast_lsa` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `at_mast_lsa` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Parkscheinautomat` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=au_parkscheinautomat&styles=Stra%C3%9Fenbefahrung+-+Parkscheinautomat&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Parkscheinautomat (Straßenbefahrung - Parkscheinautomat)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=au_parkscheinautomat&styles=Stra%C3%9Fenbefahrung+-+Parkscheinautomat&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Parkscheinautomat (Straßenbefahrung - Parkscheinautomat)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dau_parkscheinautomat%26styles%3DStra%C3%9Fenbefahrung%20-%20Parkscheinautomat%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `au_parkscheinautomat` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `au_parkscheinautomat` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Poller` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=av_poller&styles=Stra%C3%9Fenbefahrung+-+Poller&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Poller (Straßenbefahrung - Poller)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=av_poller&styles=Stra%C3%9Fenbefahrung+-+Poller&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Poller (Straßenbefahrung - Poller)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dav_poller%26styles%3DStra%C3%9Fenbefahrung%20-%20Poller%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `av_poller` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `av_poller` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Spielgerät` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aw_spielgeraet&styles=Stra%C3%9Fenbefahrung+-+Spielger%C3%A4t&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Spielgerät (Straßenbefahrung - Spielgerät)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aw_spielgeraet&styles=Stra%C3%9Fenbefahrung+-+Spielger%C3%A4t&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Spielgerät (Straßenbefahrung - Spielgerät)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Daw_spielgeraet%26styles%3DStra%C3%9Fenbefahrung%20-%20Spielger%C3%A4t%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `aw_spielgeraet` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `aw_spielgeraet` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Straßensinkkasten` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ax_strassensinkkasten&styles=Stra%C3%9Fenbefahrung+-+Stra%C3%9Fensinkkasten&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Strassensinkkasten (Straßenbefahrung - Straßensinkkasten)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ax_strassensinkkasten&styles=Stra%C3%9Fenbefahrung+-+Stra%C3%9Fensinkkasten&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Strassensinkkasten (Straßenbefahrung - Straßensinkkasten)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dax_strassensinkkasten%26styles%3DStra%C3%9Fenbefahrung%20-%20Stra%C3%9Fensinkkasten%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ax_strassensinkkasten` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ax_strassensinkkasten` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Streugutbehälter` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ay_streugutbehaelter&styles=Stra%C3%9Fenbefahrung+-+Streugutbeh%C3%A4lter&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Streugutbehälter (Straßenbefahrung - Streugutbehälter)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ay_streugutbehaelter&styles=Stra%C3%9Fenbefahrung+-+Streugutbeh%C3%A4lter&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Streugutbehälter (Straßenbefahrung - Streugutbehälter)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Day_streugutbehaelter%26styles%3DStra%C3%9Fenbefahrung%20-%20Streugutbeh%C3%A4lter%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ay_streugutbehaelter` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ay_streugutbehaelter` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Taxirufsäule` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=az_taxirufsaeule&styles=Stra%C3%9Fenbefahrung+-+Taxirufs%C3%A4ule&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Taxirufsäule (Straßenbefahrung - Taxirufsäule)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=az_taxirufsaeule&styles=Stra%C3%9Fenbefahrung+-+Taxirufs%C3%A4ule&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Taxirufsäule (Straßenbefahrung - Taxirufsäule)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Daz_taxirufsaeule%26styles%3DStra%C3%9Fenbefahrung%20-%20Taxirufs%C3%A4ule%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `az_taxirufsaeule` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `az_taxirufsaeule` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ba_telefonzelle_telefonstele&styles=Stra%C3%9Fenbefahrung+-+Telefonzelle+Telefonstele&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Telefonzelle Telefonstele (Straßenbefahrung - Telefonzelle Telefonstele)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ba_telefonzelle_telefonstele&styles=Stra%C3%9Fenbefahrung+-+Telefonzelle+Telefonstele&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Telefonzelle Telefonstele (Straßenbefahrung - Telefonzelle Telefonstele)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dba_telefonzelle_telefonstele%26styles%3DStra%C3%9Fenbefahrung%20-%20Telefonzelle%20Telefonstele%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ba_telefonzelle_telefonstele` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Verkehrsschutzgitter` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bb_verkehrsschutzgitter&styles=Stra%C3%9Fenbefahrung+-+Verkehrsschutzgitter&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Verkehrsschutzgitter (Straßenbefahrung - Verkehrsschutzgitter)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bb_verkehrsschutzgitter&styles=Stra%C3%9Fenbefahrung+-+Verkehrsschutzgitter&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Verkehrsschutzgitter (Straßenbefahrung - Verkehrsschutzgitter)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbb_verkehrsschutzgitter%26styles%3DStra%C3%9Fenbefahrung%20-%20Verkehrsschutzgitter%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bb_verkehrsschutzgitter` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bc_aufmerksamkeitsstreifen&styles=Stra%C3%9Fenbefahrung+-+Aufmerksamkeitsstreifen&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Aufmerksamkeitsstreifen (Straßenbefahrung - Aufmerksamkeitsstreifen)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bc_aufmerksamkeitsstreifen&styles=Stra%C3%9Fenbefahrung+-+Aufmerksamkeitsstreifen&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Aufmerksamkeitsstreifen (Straßenbefahrung - Aufmerksamkeitsstreifen)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbc_aufmerksamkeitsstreifen%26styles%3DStra%C3%9Fenbefahrung%20-%20Aufmerksamkeitsstreifen%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bc_aufmerksamkeitsstreifen` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Bordstein` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bd_bordstein&styles=Stra%C3%9Fenbefahrung+-+Bordstein&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Bordstein (Straßenbefahrung - Bordstein)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bd_bordstein&styles=Stra%C3%9Fenbefahrung+-+Bordstein&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Bordstein (Straßenbefahrung - Bordstein)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbd_bordstein%26styles%3DStra%C3%9Fenbefahrung%20-%20Bordstein%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bd_bordstein` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bd_bordstein` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=be_fahrbahnmarkierunglinie&styles=Stra%C3%9Fenbefahrung+-+Fahrbahnmarkierung+Linie&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fahrbahnmarkierung_Linie (Straßenbefahrung - Fahrbahnmarkierung Linie)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=be_fahrbahnmarkierunglinie&styles=Stra%C3%9Fenbefahrung+-+Fahrbahnmarkierung+Linie&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fahrbahnmarkierung_Linie (Straßenbefahrung - Fahrbahnmarkierung Linie)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbe_fahrbahnmarkierunglinie%26styles%3DStra%C3%9Fenbefahrung%20-%20Fahrbahnmarkierung%20Linie%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `be_fahrbahnmarkierunglinie` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Geländer` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bf_gelaender&styles=Stra%C3%9Fenbefahrung+-+Gel%C3%A4nder&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Geländer (Straßenbefahrung - Geländer)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bf_gelaender&styles=Stra%C3%9Fenbefahrung+-+Gel%C3%A4nder&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Geländer (Straßenbefahrung - Geländer)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbf_gelaender%26styles%3DStra%C3%9Fenbefahrung%20-%20Gel%C3%A4nder%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bf_gelaender` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bf_gelaender` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Leitplanke` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bg_leitplanke&styles=Stra%C3%9Fenbefahrung+-+Leitplanke&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Leitplanke (Straßenbefahrung - Leitplanke)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bg_leitplanke&styles=Stra%C3%9Fenbefahrung+-+Leitplanke&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Leitplanke (Straßenbefahrung - Leitplanke)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbg_leitplanke%26styles%3DStra%C3%9Fenbefahrung%20-%20Leitplanke%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bg_leitplanke` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bg_leitplanke` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Mauer` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bh_mauer&styles=Stra%C3%9Fenbefahrung+-+Mauer&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Mauer (Straßenbefahrung - Mauer)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bh_mauer&styles=Stra%C3%9Fenbefahrung+-+Mauer&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Mauer (Straßenbefahrung - Mauer)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbh_mauer%26styles%3DStra%C3%9Fenbefahrung%20-%20Mauer%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bh_mauer` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bh_mauer` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Schranke` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bi_schranke&styles=Stra%C3%9Fenbefahrung+-+Schranke&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Schranke (Straßenbefahrung - Schranke)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bi_schranke&styles=Stra%C3%9Fenbefahrung+-+Schranke&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Schranke (Straßenbefahrung - Schranke)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbi_schranke%26styles%3DStra%C3%9Fenbefahrung%20-%20Schranke%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bi_schranke` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bi_schranke` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Sitzbank` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bj_sitzbank&styles=Stra%C3%9Fenbefahrung+-+Sitzbank&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Sitzbank (Straßenbefahrung - Sitzbank)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bj_sitzbank&styles=Stra%C3%9Fenbefahrung+-+Sitzbank&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Sitzbank (Straßenbefahrung - Sitzbank)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbj_sitzbank%26styles%3DStra%C3%9Fenbefahrung%20-%20Sitzbank%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bj_sitzbank` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bj_sitzbank` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Straßenbegrenzung` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bk_strassenbegrenzung&styles=Stra%C3%9Fenbefahrung+-+Stra%C3%9Fenbegrenzung&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Straßenbegrenzung (Straßenbefahrung - Straßenbegrenzung)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bk_strassenbegrenzung&styles=Stra%C3%9Fenbefahrung+-+Stra%C3%9Fenbegrenzung&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Straßenbegrenzung (Straßenbefahrung - Straßenbegrenzung)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbk_strassenbegrenzung%26styles%3DStra%C3%9Fenbefahrung%20-%20Stra%C3%9Fenbegrenzung%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bk_strassenbegrenzung` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bl_strassenentwaesserungsrinne&styles=Stra%C3%9Fenbefahrung+-+Stra%C3%9Fenentw%C3%A4sserungsrinne&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Straßenentwässerungsrinne (Straßenbefahrung - Straßenentwässerungsrinne)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bl_strassenentwaesserungsrinne&styles=Stra%C3%9Fenbefahrung+-+Stra%C3%9Fenentw%C3%A4sserungsrinne&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Straßenentwässerungsrinne (Straßenbefahrung - Straßenentwässerungsrinne)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbl_strassenentwaesserungsrinne%26styles%3DStra%C3%9Fenbefahrung%20-%20Stra%C3%9Fenentw%C3%A4sserungsrinne%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bl_strassenentwaesserungsrinne` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Zugangsbauwerk` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bm_zugangsbauwerk&styles=Stra%C3%9Fenbefahrung+-+Zugangsbauwerk&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Zugangsbauwerk (Straßenbefahrung - Zugangsbauwerk)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bm_zugangsbauwerk&styles=Stra%C3%9Fenbefahrung+-+Zugangsbauwerk&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Zugangsbauwerk (Straßenbefahrung - Zugangsbauwerk)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbm_zugangsbauwerk%26styles%3DStra%C3%9Fenbefahrung%20-%20Zugangsbauwerk%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bm_zugangsbauwerk` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Baumscheibe` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bn_baumscheibe&styles=Stra%C3%9Fenbefahrung+-+Baumscheibe&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Baumscheibe (Straßenbefahrung - Baumscheibe)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bn_baumscheibe&styles=Stra%C3%9Fenbefahrung+-+Baumscheibe&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Baumscheibe (Straßenbefahrung - Baumscheibe)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbn_baumscheibe%26styles%3DStra%C3%9Fenbefahrung%20-%20Baumscheibe%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bn_baumscheibe` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bn_baumscheibe` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Denkmal` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bo_denkmal&styles=Stra%C3%9Fenbefahrung+-+Denkmal&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Denkmal (Straßenbefahrung - Denkmal)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bo_denkmal&styles=Stra%C3%9Fenbefahrung+-+Denkmal&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Denkmal (Straßenbefahrung - Denkmal)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbo_denkmal%26styles%3DStra%C3%9Fenbefahrung%20-%20Denkmal%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bo_denkmal` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bo_denkmal` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bp_fahrbahnmarkierung_flaeche&styles=Stra%C3%9Fenbefahrung+-+Fahrbahnmarkierung+Fl%C3%A4che&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fahrbahnmarkierung Fläche (Straßenbefahrung - Fahrbahnmarkierung Fläche)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bp_fahrbahnmarkierung_flaeche&styles=Stra%C3%9Fenbefahrung+-+Fahrbahnmarkierung+Fl%C3%A4che&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fahrbahnmarkierung Fläche (Straßenbefahrung - Fahrbahnmarkierung Fläche)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbp_fahrbahnmarkierung_flaeche%26styles%3DStra%C3%9Fenbefahrung%20-%20Fahrbahnmarkierung%20Fl%C3%A4che%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bp_fahrbahnmarkierung_flaeche` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahrradständer` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bq_fahrradstaender&styles=Stra%C3%9Fenbefahrung+-+Fahrradst%C3%A4nder&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fahrradständer (Straßenbefahrung - Fahrradständer)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bq_fahrradstaender&styles=Stra%C3%9Fenbefahrung+-+Fahrradst%C3%A4nder&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fahrradständer (Straßenbefahrung - Fahrradständer)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbq_fahrradstaender%26styles%3DStra%C3%9Fenbefahrung%20-%20Fahrradst%C3%A4nder%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bq_fahrradstaender` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bq_fahrradstaender` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahrgastunterstand` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=br_fahrgastunterstand&styles=Stra%C3%9Fenbefahrung+-+Fahrgastunterstand&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fahrgastunterstand (Straßenbefahrung - Fahrgastunterstand)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=br_fahrgastunterstand&styles=Stra%C3%9Fenbefahrung+-+Fahrgastunterstand&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fahrgastunterstand (Straßenbefahrung - Fahrgastunterstand)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbr_fahrgastunterstand%26styles%3DStra%C3%9Fenbefahrung%20-%20Fahrgastunterstand%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `br_fahrgastunterstand` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `br_fahrgastunterstand` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Induktionsschleife` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bs_induktionsschleife&styles=Stra%C3%9Fenbefahrung+-+Induktionsschleife&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Induktionsschleife (Straßenbefahrung - Induktionsschleife)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bs_induktionsschleife&styles=Stra%C3%9Fenbefahrung+-+Induktionsschleife&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Induktionsschleife (Straßenbefahrung - Induktionsschleife)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbs_induktionsschleife%26styles%3DStra%C3%9Fenbefahrung%20-%20Induktionsschleife%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bs_induktionsschleife` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bs_induktionsschleife` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Kabelschacht` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bt_kabelschacht&styles=Stra%C3%9Fenbefahrung+-+Kabelschacht&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Kabelschacht (Straßenbefahrung - Kabelschacht)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bt_kabelschacht&styles=Stra%C3%9Fenbefahrung+-+Kabelschacht&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Kabelschacht (Straßenbefahrung - Kabelschacht)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbt_kabelschacht%26styles%3DStra%C3%9Fenbefahrung%20-%20Kabelschacht%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bt_kabelschacht` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bt_kabelschacht` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bu1_kleinbauten_sondernutzung&styles=Stra%C3%9Fenbefahrung+-+Kleinbauten+Sondernutzung&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Kleinbauten Sondernutzung (Straßenbefahrung - Kleinbauten Sondernutzung)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bu1_kleinbauten_sondernutzung&styles=Stra%C3%9Fenbefahrung+-+Kleinbauten+Sondernutzung&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Kleinbauten Sondernutzung (Straßenbefahrung - Kleinbauten Sondernutzung)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbu1_kleinbauten_sondernutzung%26styles%3DStra%C3%9Fenbefahrung%20-%20Kleinbauten%20Sondernutzung%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu1_kleinbauten_sondernutzung` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `polygon` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bu_recycling_container&styles=polygon&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Recycling-Container (polygon)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bu_recycling_container&styles=polygon&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Recycling-Container (polygon)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbu_recycling_container%26styles%3Dpolygon%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bu_recycling_container` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bu_recycling_container` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bv_springbrunnen_zierbrunnen&styles=Stra%C3%9Fenbefahrung+-+Springbrunnen+Zierbrunnnen&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Springbrunnen Zierbrunnen (Straßenbefahrung - Springbrunnen Zierbrunnnen)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bv_springbrunnen_zierbrunnen&styles=Stra%C3%9Fenbefahrung+-+Springbrunnen+Zierbrunnnen&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Springbrunnen Zierbrunnen (Straßenbefahrung - Springbrunnen Zierbrunnnen)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbv_springbrunnen_zierbrunnen%26styles%3DStra%C3%9Fenbefahrung%20-%20Springbrunnen%20Zierbrunnnen%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bv_springbrunnen_zierbrunnen` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bw_aufmerksamkeitsfeld&styles=Stra%C3%9Fenbefahrung+-+Aufmerksamkeitsfeld&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Aufmerksamkeitsfeld (Straßenbefahrung - Aufmerksamkeitsfeld)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bw_aufmerksamkeitsfeld&styles=Stra%C3%9Fenbefahrung+-+Aufmerksamkeitsfeld&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Aufmerksamkeitsfeld (Straßenbefahrung - Aufmerksamkeitsfeld)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbw_aufmerksamkeitsfeld%26styles%3DStra%C3%9Fenbefahrung%20-%20Aufmerksamkeitsfeld%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bw_aufmerksamkeitsfeld` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahrbahnschwelle` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bx_fahrbahnschwelle&styles=Stra%C3%9Fenbefahrung+-+Fahrbahnschwelle&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fahrbahnschwelle (Straßenbefahrung - Fahrbahnschwelle)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bx_fahrbahnschwelle&styles=Stra%C3%9Fenbefahrung+-+Fahrbahnschwelle&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fahrbahnschwelle (Straßenbefahrung - Fahrbahnschwelle)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbx_fahrbahnschwelle%26styles%3DStra%C3%9Fenbefahrung%20-%20Fahrbahnschwelle%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bx_fahrbahnschwelle` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Gehwegüberfahrt` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=by_gehwegueberfahrt&styles=Stra%C3%9Fenbefahrung+-+Gehweg%C3%BCberfahrt&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Gehwegüberfahrt (Straßenbefahrung - Gehwegüberfahrt)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=by_gehwegueberfahrt&styles=Stra%C3%9Fenbefahrung+-+Gehweg%C3%BCberfahrt&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Gehwegüberfahrt (Straßenbefahrung - Gehwegüberfahrt)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dby_gehwegueberfahrt%26styles%3DStra%C3%9Fenbefahrung%20-%20Gehweg%C3%BCberfahrt%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `by_gehwegueberfahrt` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bz_gleiskoerper_strab&styles=Stra%C3%9Fenbefahrung+-+Gleisk%C3%B6rper+Stra%C3%9Fenbahn&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Gleiskörper Straßenbahn (Straßenbefahrung - Gleiskörper Straßenbahn)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bz_gleiskoerper_strab&styles=Stra%C3%9Fenbefahrung+-+Gleisk%C3%B6rper+Stra%C3%9Fenbahn&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Gleiskörper Straßenbahn (Straßenbefahrung - Gleiskörper Straßenbahn)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dbz_gleiskoerper_strab%26styles%3DStra%C3%9Fenbefahrung%20-%20Gleisk%C3%B6rper%20Stra%C3%9Fenbahn%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `bz_gleiskoerper_strab` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Haltebereich Bus` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ca_haltebereich_bus&styles=Stra%C3%9Fenbefahrung+-+Haltebereich+Bus&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Haltebereich Bus (Straßenbefahrung - Haltebereich Bus)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ca_haltebereich_bus&styles=Stra%C3%9Fenbefahrung+-+Haltebereich+Bus&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Haltebereich Bus (Straßenbefahrung - Haltebereich Bus)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dca_haltebereich_bus%26styles%3DStra%C3%9Fenbefahrung%20-%20Haltebereich%20Bus%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ca_haltebereich_bus` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ca_haltebereich_bus` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Haltestellenwartebereich` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cb_haltestellenwartebereich&styles=Stra%C3%9Fenbefahrung+-+Haltestellenwartebereich&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Haltestellenwartebereich (Straßenbefahrung - Haltestellenwartebereich)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cb_haltestellenwartebereich&styles=Stra%C3%9Fenbefahrung+-+Haltestellenwartebereich&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Haltestellenwartebereich (Straßenbefahrung - Haltestellenwartebereich)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dcb_haltestellenwartebereich%26styles%3DStra%C3%9Fenbefahrung%20-%20Haltestellenwartebereich%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cb_haltestellenwartebereich` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Treppe` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cc_treppe&styles=Stra%C3%9Fenbefahrung+-+Treppe&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Treppe (Straßenbefahrung - Treppe)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cc_treppe&styles=Stra%C3%9Fenbefahrung+-+Treppe&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Treppe (Straßenbefahrung - Treppe)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dcc_treppe%26styles%3DStra%C3%9Fenbefahrung%20-%20Treppe%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `cc_treppe` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cc_treppe` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Rampe` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cd_rampe&styles=Stra%C3%9Fenbefahrung+-+Rampe&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Rampe (Straßenbefahrung - Rampe)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cd_rampe&styles=Stra%C3%9Fenbefahrung+-+Rampe&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Rampe (Straßenbefahrung - Rampe)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dcd_rampe%26styles%3DStra%C3%9Fenbefahrung%20-%20Rampe%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `cd_rampe` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cd_rampe` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Grünfläche` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ce_gruenflaeche&styles=Stra%C3%9Fenbefahrung+-+Gr%C3%BCnfl%C3%A4che&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Grünfläche (Straßenbefahrung - Grünfläche)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ce_gruenflaeche&styles=Stra%C3%9Fenbefahrung+-+Gr%C3%BCnfl%C3%A4che&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Grünfläche (Straßenbefahrung - Grünfläche)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dce_gruenflaeche%26styles%3DStra%C3%9Fenbefahrung%20-%20Gr%C3%BCnfl%C3%A4che%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ce_gruenflaeche` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ce_gruenflaeche` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Trennstreifen` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cf_trennstreifen&styles=Stra%C3%9Fenbefahrung+-+Trennstreifen&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Trennstreifen (Straßenbefahrung - Trennstreifen)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cf_trennstreifen&styles=Stra%C3%9Fenbefahrung+-+Trennstreifen&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Trennstreifen (Straßenbefahrung - Trennstreifen)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dcf_trennstreifen%26styles%3DStra%C3%9Fenbefahrung%20-%20Trennstreifen%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `cf_trennstreifen` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cf_trennstreifen` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Baustelle` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cg_baustelle&styles=Stra%C3%9Fenbefahrung+-+Baustelle&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Baustelle (Straßenbefahrung - Baustelle)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cg_baustelle&styles=Stra%C3%9Fenbefahrung+-+Baustelle&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Baustelle (Straßenbefahrung - Baustelle)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dcg_baustelle%26styles%3DStra%C3%9Fenbefahrung%20-%20Baustelle%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `cg_baustelle` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cg_baustelle` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Radweg` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ch_radweg&styles=Stra%C3%9Fenbefahrung+-+Radweg&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Radweg (Straßenbefahrung - Radweg)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ch_radweg&styles=Stra%C3%9Fenbefahrung+-+Radweg&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Radweg (Straßenbefahrung - Radweg)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dch_radweg%26styles%3DStra%C3%9Fenbefahrung%20-%20Radweg%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ch_radweg` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ch_radweg` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Öffentlicher Platz` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ci_oeffentlicher_platz&styles=Stra%C3%9Fenbefahrung+-+%C3%96ffentlicher+Platz&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Öffentlicher Platz (Straßenbefahrung - Öffentlicher Platz)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ci_oeffentlicher_platz&styles=Stra%C3%9Fenbefahrung+-+%C3%96ffentlicher+Platz&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Öffentlicher Platz (Straßenbefahrung - Öffentlicher Platz)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dci_oeffentlicher_platz%26styles%3DStra%C3%9Fenbefahrung%20-%20%C3%96ffentlicher%20Platz%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ci_oeffentlicher_platz` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fußgängerzone` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cj_fussgaengerzone&styles=Stra%C3%9Fenbefahrung+-+Fu%C3%9Fg%C3%A4ngerzone&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fussgängerzone (Straßenbefahrung - Fußgängerzone)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cj_fussgaengerzone&styles=Stra%C3%9Fenbefahrung+-+Fu%C3%9Fg%C3%A4ngerzone&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fussgängerzone (Straßenbefahrung - Fußgängerzone)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dcj_fussgaengerzone%26styles%3DStra%C3%9Fenbefahrung%20-%20Fu%C3%9Fg%C3%A4ngerzone%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `cj_fussgaengerzone` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cj_fussgaengerzone` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Parkfläche` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ck_parkflaeche&styles=Stra%C3%9Fenbefahrung+-+Parkfl%C3%A4che&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Parkfläche (Straßenbefahrung - Parkfläche)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ck_parkflaeche&styles=Stra%C3%9Fenbefahrung+-+Parkfl%C3%A4che&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Parkfläche (Straßenbefahrung - Parkfläche)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dck_parkflaeche%26styles%3DStra%C3%9Fenbefahrung%20-%20Parkfl%C3%A4che%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `ck_parkflaeche` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `ck_parkflaeche` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Gehweg` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cl_gehweg&styles=Stra%C3%9Fenbefahrung+-+Gehweg&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Gehweg (Straßenbefahrung - Gehweg)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cl_gehweg&styles=Stra%C3%9Fenbefahrung+-+Gehweg&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Gehweg (Straßenbefahrung - Gehweg)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dcl_gehweg%26styles%3DStra%C3%9Fenbefahrung%20-%20Gehweg%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `cl_gehweg` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cl_gehweg` | `Straßenbefahrung - Fahrbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fahrbahn` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cm_fahrbahn&styles=Stra%C3%9Fenbefahrung+-+Fahrbahn&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Straßenbefahrung - Fahrbahn (Straßenbefahrung - Fahrbahn)"> <img src="https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cm_fahrbahn&styles=Stra%C3%9Fenbefahrung+-+Fahrbahn&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Straßenbefahrung - Fahrbahn (Straßenbefahrung - Fahrbahn)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fstrassenbefahrung%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dcm_fahrbahn%26styles%3DStra%C3%9Fenbefahrung%20-%20Fahrbahn%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `cm_fahrbahn` | `Straßenbefahrung - Verkehrszeichen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Touchpoint` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Trinkwasserbrunnen Wasserspender` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Uhr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - VIZ-Infotafel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Wasserpumpen Brunnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Werbesäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Abfallbehälter Müllbox` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Anforderungstaster Radverkehr` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Anlegestelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Briefkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Durchfahrtshöhe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fahnenmast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fahrbahnmarkierung Piktogramm` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Gebäudeeingang` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Handsteuergerät Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Hydrant` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Kabelkasten Schaltkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Kanaldeckel` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Mast` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Mast Lichtsignalanlage` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Parkscheinautomat` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Poller` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Spielgerät` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Straßensinkkasten` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Streugutbehälter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Taxirufsäule` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Telefonzelle Telefonstele` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Verkehrsschutzgitter` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Aufmerksamkeitsstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Bordstein` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fahrbahnmarkierung Linie` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Geländer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Leitplanke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Mauer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Schranke` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Sitzbank` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Straßenbegrenzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Straßenentwässerungsrinne` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Zugangsbauwerk` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Baumscheibe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Denkmal` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fahrbahnmarkierung Fläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fahrradständer` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fahrgastunterstand` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Induktionsschleife` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Kabelschacht` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Kleinbauten Sondernutzung` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `polygon` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Springbrunnen Zierbrunnnen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Aufmerksamkeitsfeld` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fahrbahnschwelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Gehwegüberfahrt` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Gleiskörper Straßenbahn` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Haltebereich Bus` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Haltestellenwartebereich` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Treppe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Rampe` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Grünfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Trennstreifen` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Baustelle` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Radweg` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Öffentlicher Platz` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Fußgängerzone` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Parkfläche` | ✗ Invalid | ✗ Style not available for this layer | — |
| `cm_fahrbahn` | `Straßenbefahrung - Gehweg` | ✗ Invalid | ✗ Style not available for this layer | — |

---

## URLs for iD Editor

Copy-paste these URLs into iD editor's custom background layer field:

* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aa_verkehrszeichen&styles=Straßenbefahrung - Verkehrszeichen&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Verkehrszeichen)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ab_touchpoint&styles=Straßenbefahrung - Touchpoint&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Touchpoint)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ac_trinkwasserbrunnen_wasserspender&styles=Straßenbefahrung - Trinkwasserbrunnen Wasserspender&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Trinkwasserbrunnen Wasserspender)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ad_uhr&styles=Straßenbefahrung - Uhr&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Uhr)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ae_viz_infotafel&styles=Straßenbefahrung - VIZ-Infotafel&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - VIZ-Infotafel)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=af_wasserpumpen_brunnen&styles=Straßenbefahrung - Wasserpumpen Brunnen&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Wasserpumpen Brunnen)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ag_werbesaeule&styles=Straßenbefahrung - Werbesäule&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Werbesäule)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ah_abfallbehaelter_muellbox&styles=Straßenbefahrung - Abfallbehälter Müllbox&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Abfallbehälter Müllbox)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ai_anforderungstaster_radverkehr&styles=Straßenbefahrung - Anforderungstaster Radverkehr&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Anforderungstaster Radverkehr)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aj_anlegestelle&styles=Straßenbefahrung - Anlegestelle&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Anlegestelle)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ak_briefkasten&styles=Straßenbefahrung - Briefkasten&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Briefkasten)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=al_durchfahrtshoehe&styles=Straßenbefahrung - Durchfahrtshöhe&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Durchfahrtshöhe)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=am_fahnenmast&styles=Straßenbefahrung - Fahnenmast&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fahnenmast)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=an_fahrbahnmarkierung_piktogramm&styles=Straßenbefahrung - Fahrbahnmarkierung Piktogramm&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fahrbahnmarkierung Piktogramm)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ao_gebaeudeeingang&styles=Straßenbefahrung - Gebäudeeingang&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Gebäudeeingang)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ap_handsteuergeraet_lsa&styles=Straßenbefahrung - Handsteuergerät Lichtsignalanlage&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Handsteuergerät Lichtsignalanlage)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aq_hydrant&styles=Straßenbefahrung - Hydrant&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Hydrant)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ar1_kabelkasten&styles=Straßenbefahrung - Kabelkasten Schaltkasten&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Kabelkasten Schaltkasten)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ar_kanaldeckel&styles=Straßenbefahrung - Kanaldeckel&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Kanaldeckel)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=as_mast&styles=Straßenbefahrung - Mast&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Mast)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=at_mast_lsa&styles=Straßenbefahrung - Mast Lichtsignalanlage&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Mast Lichtsignalanlage)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=au_parkscheinautomat&styles=Straßenbefahrung - Parkscheinautomat&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Parkscheinautomat)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=av_poller&styles=Straßenbefahrung - Poller&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Poller)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=aw_spielgeraet&styles=Straßenbefahrung - Spielgerät&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Spielgerät)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ax_strassensinkkasten&styles=Straßenbefahrung - Straßensinkkasten&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Strassensinkkasten)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ay_streugutbehaelter&styles=Straßenbefahrung - Streugutbehälter&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Streugutbehälter)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=az_taxirufsaeule&styles=Straßenbefahrung - Taxirufsäule&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Taxirufsäule)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ba_telefonzelle_telefonstele&styles=Straßenbefahrung - Telefonzelle Telefonstele&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Telefonzelle Telefonstele)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bb_verkehrsschutzgitter&styles=Straßenbefahrung - Verkehrsschutzgitter&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Verkehrsschutzgitter)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bc_aufmerksamkeitsstreifen&styles=Straßenbefahrung - Aufmerksamkeitsstreifen&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Aufmerksamkeitsstreifen)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bd_bordstein&styles=Straßenbefahrung - Bordstein&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Bordstein)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=be_fahrbahnmarkierunglinie&styles=Straßenbefahrung - Fahrbahnmarkierung Linie&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fahrbahnmarkierung_Linie)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bf_gelaender&styles=Straßenbefahrung - Geländer&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Geländer)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bg_leitplanke&styles=Straßenbefahrung - Leitplanke&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Leitplanke)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bh_mauer&styles=Straßenbefahrung - Mauer&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Mauer)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bi_schranke&styles=Straßenbefahrung - Schranke&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Schranke)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bj_sitzbank&styles=Straßenbefahrung - Sitzbank&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Sitzbank)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bk_strassenbegrenzung&styles=Straßenbefahrung - Straßenbegrenzung&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Straßenbegrenzung)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bl_strassenentwaesserungsrinne&styles=Straßenbefahrung - Straßenentwässerungsrinne&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Straßenentwässerungsrinne)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bm_zugangsbauwerk&styles=Straßenbefahrung - Zugangsbauwerk&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Zugangsbauwerk)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bn_baumscheibe&styles=Straßenbefahrung - Baumscheibe&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Baumscheibe)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bo_denkmal&styles=Straßenbefahrung - Denkmal&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Denkmal)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bp_fahrbahnmarkierung_flaeche&styles=Straßenbefahrung - Fahrbahnmarkierung Fläche&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fahrbahnmarkierung Fläche)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bq_fahrradstaender&styles=Straßenbefahrung - Fahrradständer&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fahrradständer)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=br_fahrgastunterstand&styles=Straßenbefahrung - Fahrgastunterstand&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fahrgastunterstand)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bs_induktionsschleife&styles=Straßenbefahrung - Induktionsschleife&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Induktionsschleife)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bt_kabelschacht&styles=Straßenbefahrung - Kabelschacht&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Kabelschacht)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bu1_kleinbauten_sondernutzung&styles=Straßenbefahrung - Kleinbauten Sondernutzung&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Kleinbauten Sondernutzung)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bu_recycling_container&styles=polygon&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Recycling-Container)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bv_springbrunnen_zierbrunnen&styles=Straßenbefahrung - Springbrunnen Zierbrunnnen&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Springbrunnen Zierbrunnen)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bw_aufmerksamkeitsfeld&styles=Straßenbefahrung - Aufmerksamkeitsfeld&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Aufmerksamkeitsfeld)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bx_fahrbahnschwelle&styles=Straßenbefahrung - Fahrbahnschwelle&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fahrbahnschwelle)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=by_gehwegueberfahrt&styles=Straßenbefahrung - Gehwegüberfahrt&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Gehwegüberfahrt)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=bz_gleiskoerper_strab&styles=Straßenbefahrung - Gleiskörper Straßenbahn&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Gleiskörper Straßenbahn)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ca_haltebereich_bus&styles=Straßenbefahrung - Haltebereich Bus&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Haltebereich Bus)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cb_haltestellenwartebereich&styles=Straßenbefahrung - Haltestellenwartebereich&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Haltestellenwartebereich)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cc_treppe&styles=Straßenbefahrung - Treppe&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Treppe)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cd_rampe&styles=Straßenbefahrung - Rampe&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Rampe)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ce_gruenflaeche&styles=Straßenbefahrung - Grünfläche&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Grünfläche)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cf_trennstreifen&styles=Straßenbefahrung - Trennstreifen&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Trennstreifen)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cg_baustelle&styles=Straßenbefahrung - Baustelle&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Baustelle)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ch_radweg&styles=Straßenbefahrung - Radweg&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Radweg)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ci_oeffentlicher_platz&styles=Straßenbefahrung - Öffentlicher Platz&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Öffentlicher Platz)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cj_fussgaengerzone&styles=Straßenbefahrung - Fußgängerzone&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fussgängerzone)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=ck_parkflaeche&styles=Straßenbefahrung - Parkfläche&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Parkfläche)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cl_gehweg&styles=Straßenbefahrung - Gehweg&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Gehweg)
* `https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0&layers=cm_fahrbahn&styles=Straßenbefahrung - Fahrbahn&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Straßenbefahrung - Fahrbahn)

---

## Notes

- **Style compatibility**: Styles are layer-specific. You cannot use a style from one layer with a different layer (e.g., you cannot use `tempolimits_strab` style with the `hoechstgeschwindigkeit` layer).
- Layer order matters for rendering: layers listed first render below layers listed later
- Use `transparent: true` in MapProxy config for overlay layers
- Preview images use a sample bounding box around Berlin center
