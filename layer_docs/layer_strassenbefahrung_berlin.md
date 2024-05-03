# Layer defintion Straßenbefahrung Berlin

Source https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetCapabilities&version=1.3.0

Dokumentation https://fbinter.stadt-berlin.de/fb_daten/beschreibung/datenformatbeschreibung/Datenformatbeschreibung_Stra%C3%9Fenbefahrung_2014.pdf

> Straßenbefahrung 2014
>
> Geodaten des öffentlichen Straßenraums von Berlin. In den Jahren 2014 und 2015 wurde der gesamte öffentliche Straßenraum Berlins durch eine vermessungstechnische Straßenbefahrung erfasst und digitalisiert. Das Ergebnis ist ein digitales Abbild des öffentlichen Straßenraums, welches das Haupt- und Nebenstraßennetz und teilweise auch Wege in öffentlichen Parkanlagen umfasst. Bestandteil der digitalisierten Daten sind Straßenobjekte, Verkehrszeichen und Verkehrsflächen.

**Mind the order of layers!** The higher layers are mostly areas which will hide the lower layers which are mostly points/lines/smaller areas.

| `<name>` | `<Title>` | `<Abstract>`
| -------- | --------- | ----- |
| `aa_verkehrszeichen` | Straßenbefahrung - Verkehrszeichen | Verkehrszeichenstandorte mit Angabe aller zugehörigen Verkehrszeichen nach Straßenverkehrsordnung (StVO). Straßennamensschilder und Zusatzzeichen sind ebenfalls enthalten. |
| `ab_touchpoint` | Straßenbefahrung - Touchpoint | Touchpoints sind interaktive öffentliche Terminals (Benutzerendgeräte). Das Attribut -Anbieter- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `ac_trinkwasserbrunnen_wasserspender` | Straßenbefahrung - Trinkwasserbrunnen Wasserspender | Trinkwasserbrunnen und Wasserspender. |
| `ad_uhr` | Straßenbefahrung - Uhr | Uhren und Uhrenkandelaber. |
| `af_wasserpumpen_brunnen` | Straßenbefahrung - Wasserpumpen Brunnen | Wasserpumpen und Wasserbrunnen. |
| `ag_werbesaeule` | Straßenbefahrung - Werbesäule | Werbesäulen (Littfaßsäulen, Halbwerbesäulen, Ganzwerbesäulen und sonstige Werbesäulen). |
| `ah_abfallbehaelter_muellbox` | Straßenbefahrung - Abfallbehälter Müllbox | Öffentliche Abfallbehälter. |
| `ai_anforderungstaster_radverkehr` | Straßenbefahrung - Anforderungstaster Radverkehr | Anforderungstaster für den Radverkehr. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `aj_anlegestelle` | Straßenbefahrung - Anlegestelle | Zugang zu Anlegestellen, die vom Ufer aus durch einen öffentlich angelegten Weg erreichbar sind. Der Datensatz ist im Bezirk Mitte nicht verfügbar. |
| `ak_briefkasten` | Straßenbefahrung - Briefkasten | Briefkästen im öffentlichen Straßenland. Das Attribut -Anbieter- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `al_durchfahrtshoehe` | Straßenbefahrung - Durchfahrtshöhe | Niedrigste Durchfahrtshöhe unter Brücken, Portalen/Schilderbrücken, Fahrdrähten/Oberleitungen, Ampel-Auslegern, Tunneln und sonstige die Durchfahrtshöhe einschränkende Objekte. Durchfahrtshöhen unter Bäumen und Straßenbeleuchtung sind nicht enthalten. Die Durchfahrtshöhen wurden fahrstreifengenau erfasst. Zur Visualisierung der Fahrstreifen sind die Objektklassen "Fahrbahnen" und "Fahrbahnmarkierungen_Linien" heranzuziehen. Das Attribut "Fahrstreifennummer" ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `am_fahnenmast` | Straßenbefahrung - Fahnenmast | Fahnenmasten im öffentlichen Straßenland. |
| `an_fahrbahnmarkierung_piktogramm` | Straßenbefahrung - Fahrbahnmarkierung Piktogramm | Fahrbahnmarkierungen in Piktogrammform nach Richtlinie für die Markierung von Straßen (RMS). Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `ao_gebaeudeeingang` | Straßenbefahrung - Gebäudeeingang | Straßenseitige Gebäudeeingänge. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `ap_handsteuergeraet_lsa` | Straßenbefahrung - Handsteuergerät Lichtsignalanlage | Handsteuergeräte für Lichtsignalanlagen. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `aq_hydrant` | Straßenbefahrung - Hydrant | Hydranten. |
| `ar1_kabelkasten` | Straßenbefahrung - Kabelkasten Schaltkasten | Kabel- und Schaltkästen. Das Attribut "Anzahl" ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `ar_kanaldeckel` | Straßenbefahrung - Kanaldeckel | Kanaldeckel (Schachtdeckel). |
| `as_mast` | Straßenbefahrung - Mast | Masten. Licht- und Fahnenmasten sind nicht enthalten. |
| `at_mast_lsa` | Straßenbefahrung - Mast Lichtsignalanlage | Maststandorte der Signalgeber von Lichtsignalanlagen. Die Attribute "Barriere", "Höhe" und "Masttyp" sind im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `au_parkscheinautomat` | Straßenbefahrung - Parkscheinautomat | Parkscheinautomaten in Parkraumbewirtschaftungszonen. |
| `av_poller` | Straßenbefahrung - Poller | Poller. |
| `aw_spielgeraet` | Straßenbefahrung - Spielgerät | Tischtennisplatten im öffentlichen Straßenland und in Grünanlagen (nicht auf Spielplätzen). |
| `ax_strassensinkkasten` | Straßenbefahrung - Strassensinkkasten | Straßensinkkästen. |
| `ay_streugutbehaelter` | Straßenbefahrung - Streugutbehälter | Streugutbehälter. |
| `az_taxirufsaeule` | Straßenbefahrung - Taxirufsäule | Taxirufsäulen. |
| `ba_telefonzelle_telefonstele` | Straßenbefahrung - Telefonzelle Telefonstele | Öffentliche Telefonzellen und -stelen. |
| `bb_verkehrsschutzgitter` | Straßenbefahrung - Verkehrsschutzgitter | Verkehrsschutzgitter. |
| `bc_aufmerksamkeitsstreifen` | Straßenbefahrung - Aufmerksamkeitsstreifen | Taktile Bodenindikatoren. Enthalten sind Aufmerksamkeitsstreifen mit maximal einer Plattenreihe. Das Attribut -Farbe- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `bd_bordstein` | Straßenbefahrung - Bordstein | Bordsteine. Bordsteine zwischen Fahrbahn und Nebenanlagen sind immer den Nebenanlagen zugeordnet. |
| `be_fahrbahnmarkierunglinie` | Straßenbefahrung - Fahrbahnmarkierung_Linie | Fahrbahnmarkierungslinien nach Straßenverkehrsordnung (StVO). Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `bf_gelaender` | Straßenbefahrung - Geländer | Handläufe und Absturzsicherungen. Verkehrsschutzgitter sind in der Objektklasse "Verkehrsschutzgitter" enthalten. |
| `bg_leitplanke` | Straßenbefahrung - Leitplanke | Passive Schutzeinrichtung (Rückhaltesystem) an Straßen. |
| `bh_mauer` | Straßenbefahrung - Mauer | Mauern. Das Attribut -Werbefläche- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bi_schranke` | Straßenbefahrung - Schranke | Zufahrtsbeschränkungen. Bahnschranken können über die Objektklasse "Verkehrszeichen" (StVO-Nr.: 150, 201) lokalisiert werden. |
| `bj_sitzbank` | Straßenbefahrung - Sitzbank | Sitzbänke im öffentlichen Straßenland und in Grünanlagen. |
| `bk_strassenbegrenzung` | Straßenbefahrung - Straßenbegrenzung | Sichtbare Außengrenzen des öffentlichen Straßenlandes. Abgrenzung durch Gebäudekanten, Zäune, Hecken oder Weiteres. Bei nicht durchgängigen Einfriedungen erfolgte die Grenzziehung "fiktiv". Der Datensatz ist im Bezirk Mitte nicht verfügbar. |
| `bl_strassenentwaesserungsrinne` | Straßenbefahrung - Straßenentwässerungsrinne | Entwässerungsrinnen im Gehwegbereich und auf öffentlichen Plätzen. |
| `bm_zugangsbauwerk` | Straßenbefahrung - Zugangsbauwerk | Zugangsbauwerke zum Öffentlichen Verkehr (U-Bahn, S-Bahn, Zugverkehr). |
| `bn_baumscheibe` | Straßenbefahrung - Baumscheibe | Baumscheiben sind der begrenzte Bodenbereich rund um Straßenbäume. Begrenzungen der Baumscheiben in Form von Gittern, Steigbügeln, Kantensteinen etc. wurden als Randeinfassungen erfasst. |
| `bo_denkmal` | Straßenbefahrung - Denkmal | Denkmäler. |
| `bp_fahrbahnmarkierung_flaeche` | Straßenbefahrung - Fahrbahnmarkierung Fläche | Fahrbahnmarkierungsflächen nach Straßenverkehrsordnung (StVO). Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bq_fahrradstaender` | Straßenbefahrung - Fahrradständer | Mit dem Boden verankerte Vorrichtungen zum Abstellen und Anschließen von Fahrrädern. Im Bezirk Mitte sind die Attribute "Nutzung" und "Anzahl" nicht vorhanden, da dieser Bezirk als Pilotbezirk gedient hat. Zudem ist die geometrische Ausprägung des Objektes im Bezirk Mitte ungenau, da aus einer Linie automatisiert eine Fläche erzeugt werden musste, um die Datenhomogenität zu wahren. |
| `br_fahrgastunterstand` | Straßenbefahrung - Fahrgastunterstand | Fahrgastunterstände (Wartehäuser) an Haltestellen des ÖPNV. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bs_induktionsschleife` | Straßenbefahrung - Induktionsschleife | Induktionsschleifen. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bt_kabelschacht` | Straßenbefahrung - Kabelschacht | Kabelschächte. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bu1_kleinbauten_sondernutzung` | Straßenbefahrung - Kleinbauten Sondernutzung | Feste Kleinbauten wie Kioske, Imbisse, öffentliche Toiletten, Wachhäuschen, feste Schankgärten und Ähnliches. Die Attribute "Werbefläche" und "Art" sind im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bu_recycling_container` | Straßenbefahrung - Recycling-Container | Öffentliche Glas- und Papiercontainer sowie Altkleiderboxen. Das Attribut "Nutzung" ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `bv_springbrunnen_zierbrunnen` | Straßenbefahrung - Springbrunnen Zierbrunnen | Spring- und Zierbrunnen. |
| `bw_aufmerksamkeitsfeld` | Straßenbefahrung - Aufmerksamkeitsfeld | Taktile Bodenindikatoren. Enthalten sind flächenhafte Ausprägungen. Das Attribut -Farbe- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `bx_fahrbahnschwelle` | Straßenbefahrung - Fahrbahnschwelle | Fahrbahnschwellen im öffentlichen Straßenland. |
| `by_gehwegueberfahrt` | Straßenbefahrung - Gehwegüberfahrt | Baulich angelegte Gehwegüberfahrten (Aus- und Einfahrten zu Grundstücken). |
| `bz_gleiskoerper_strab` | Straßenbefahrung - Gleiskörper Straßenbahn | Gleiskörper für Straßenbahn. Der Bereich umfasst das komplette Gleisbett, (Schotter, Asphalt, Beton o.ä. Material). Der Gleiskörper wird bei Gleisen auf der Fahrbahn durch die äußeren Schienen begrenzt. Das Attribut -Art- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `ca_haltebereich_bus` | Straßenbefahrung - Haltebereich Bus | Haltebereiche Bus mit von der Fahrbahn abweichendem Oberflächenmaterial. Die Attribute -Material- und -Zustand- sind im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. Zudem ist die geometrische Ausprägung des Objektes im Bezirk Mitte ungenau, da aus einem Punkt automatisiert eine Fläche erzeugt werden musste, um die Datenhomogenität zu wahren. |
| `cb_haltestellenwartebereich` | Straßenbefahrung - Haltestellenwartebereich | Wartefläche für Fahrgäste an Bus- und Straßenbahnhaltestellen. Bei nicht abweichendem Oberflächenmaterial des Haltestellenwartebereichs sind die Flächen "fiktiv". Die Haltestellenwartebereiche am Straßenrand sind Teil der Gehwegfläche. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `cc_treppe` | Straßenbefahrung - Treppe | Treppen. |
| `cd_rampe` | Straßenbefahrung - Rampe | Rampen im Gehwegbereich. |
| `cf_trennstreifen` | Straßenbefahrung - Trennstreifen | Straßenbegleitflächen, die sich zwischen zwei Fahrbahnen oder zwischen Fahrbahn und sonstigen Verkehrsflächen (z.B. Gleisbett Straßenbahn) befinden. Die verschiedenen Trennstreifenstrukturen wurden erst ab >0,3 m Breite erfasst. Das Attribut -Lage- ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. |
| `cg_baustelle` | Straßenbefahrung - Baustelle | Aufgrund von Baustellen zum Zeitpunkt der Befahrung war in diesen Bereichen keine Datenerfassung möglich. Die Objektklasse ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbefahrung gedient hat. Sie stellen daher eine "Lücke" im Flächenmodell dar. |
| `ch_radweg` | Straßenbefahrung - Radweg | Ein Radweg ist der Teil der Verkehrsfläche, der für den Fahrradverkehr vorgesehen ist. Hochbordradwege sind in der Regel farblich oder durch einen Kantenstein vom Gehweg getrennt. Radfahrstreifen wurden als überlagerte Fläche aufgenommen. Benutzungspflichtige Radwege sind durch die Zeichen 237, 240 oder 241 (StVO) ausgewiesen. Fahrradstraßen sind über das Zeichen 244 (StVO) zu lokalisieren. |
| `ci_oeffentlicher_platz` | Straßenbefahrung - Öffentlicher Platz | Öffentliche Plätze. |
| `cj_fussgaengerzone` | Straßenbefahrung - Fussgängerzone | Fußgängerzonen. |
| `ck_parkflaeche` | Straßenbefahrung - Parkfläche | Durch Fahrbahnmarkierung oder bauliche Trennung ausgewiesene Parkflächen. Weitere Parkflächen, die ausschließlich durch Verkehrszeichen angeordnet sind, können über die Objektklasse "Verkehrszeichen" (StVO-Nr.: 314, 315) lokalisiert werden. Das Attribut "Art" ist im Bezirk Mitte nicht vorhanden, da der Bezirk als Pilotbezirk gedient hat. |
| `cl_gehweg` | Straßenbefahrung - Gehweg | Ein Gehweg ist der Teil der Verkehrsfläche der für den Fußverkehr vorgesehen ist. |
| `cm_fahrbahn` | Straßenbefahrung - Fahrbahn | Fahrbahnen sind die für den Fahrzeugverkehr bestimmten Verkehrsflächen. Fahrbahnen sind von Bordsteinkante bis zur gegenüberliegenden Bordsteinkante erfasst worden.
