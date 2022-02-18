# Layer defintion Straßenbefahrung Berlin

Source https://fbinter.stadt-berlin.de/fb/wms/senstadt/k_StraDa?service=WMS&request=GetCapabilities&version=1.3.0

Also https://fbinter.stadt-berlin.de/fb_daten/beschreibung/datenformatbeschreibung/Datenformatbeschreibung_Stra%C3%9Fenbefahrung_2014.pdf

> Straßenbefahrung 2014
>
> Geodaten des öffentlichen Straßenraums von Berlin. In den Jahren 2014 und 2015 wurde der gesamte öffentliche Straßenraum Berlins durch eine vermessungstechnische Straßenbefahrung erfasst und digitalisiert. Das Ergebnis ist ein digitales Abbild des öffentlichen Straßenraums, welches das Haupt- und Nebenstraßennetz und teilweise auch Wege in öffentlichen Parkanlagen umfasst. Bestandteil der digitalisierten Daten sind Straßenobjekte, Verkehrszeichen und Verkehrsflächen.

**Mind the order of layers!** The order of layers has to be 68...1. The higher layers are mostly areas which will hide the lower layers which are mostly points/lines/smaller areas.

| `<name>` | `<Title>`                            |
| -------- | ------------------------------------ |
| `68`     | Fahrbahn                             |
| `66`     | Gehweg                               |
| `67`     | Parkfläche                           |
| `65`     | Fußgängerzone                        |
| `64`     | Öffentlicher Platz                   |
| `63`     | Radweg                               |
| `62`     | Baustelle                            |
| `61`     | Trennstreifen                        |
| `60`     | Grünfläche                           |
| `59`     | Rampe                                |
| `58`     | Treppe                               |
| `57`     | Haltestellenwartebereich             |
| `56`     | Haltebereich Bus                     |
| `55`     | Gleiskörper Straßenbahn              |
| `54`     | Gehwegüberfahrt                      |
| `53`     | Fahrbahnschwelle                     |
| `52`     | Aufmerksamkeitsfeld                  |
| `51`     | Überquerungsstelle                   |
| `50`     | Springbrunnen und Zierbrunnen        |
| `49`     | Recycling-Container                  |
| `48`     | Kleinbauten Sondernutzung            |
| `47`     | Kabelschacht                         |
| `46`     | Induktionsschleife                   |
| `45`     | Fahrgastunterstand                   |
| `44`     | Fahrradständer                       |
| `43`     | Fahrbahnmarkierung Fläche            |
| `42`     | Denkmal                              |
| `41`     | Baumscheibe                          |
| `40`     | Zugangsbauwerk                       |
| `39`     | Straßenentwässerungsrinne            |
| `38`     | Straßenbegrenzung                    |
| `37`     | Sitzbank                             |
| `36`     | Schranke                             |
| `35`     | Mauer                                |
| `34`     | Leitplanke                           |
| `33`     | Geländer                             |
| `32`     | Fahrbahnmarkierung Linie             |
| `31`     | Bordstein                            |
| `30`     | Aufmerksamkeitsstreifen              |
| `29`     | Verkehrsschutzgitter                 |
| `28`     | Telefonzelle und Telefonstele        |
| `27`     | Taxirufsäule                         |
| `26`     | Streugutbehälter                     |
| `25`     | Straßensinkkasten                    |
| `24`     | Spielgerät                           |
| `23`     | Poller                               |
| `22`     | Parkscheinautomat                    |
| `21`     | Mast Lichtsignalanlage               |
| `20`     | Mast                                 |
| `19`     | Kanaldeckel                          |
| `18`     | Kabelkasten und Schaltkasten         |
| `17`     | Hydrant                              |
| `16`     | Handsteuergerät Lichtsignalanlage    |
| `15`     | Gebäudeeingang                       |
| `14`     | Fahrbahnmarkierung Piktogramm        |
| `13`     | Fahnenmast                           |
| `12`     | Durchfahrtshöhe                      |
| `11`     | Briefkasten                          |
| `10`     | Anlegestelle                         |
| `9`      | Anforderungstaster Radverkehr        |
| `8`      | Abfallbehälter Müllbox               |
| `7`      | Werbesäule                           |
| `6`      | Wasserpumpen und Brunnen             |
| `5`      | VIZ Infotafel                        |
| `4`      | Uhr                                  |
| `3`      | Trinkwasserbrunnen und Wasserspender |
| `2`      | Touchpoint                           |
| `1`      | Verkehrszeichen                      |
