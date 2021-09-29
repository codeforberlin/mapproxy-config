# Alkis Berlin Technische Beschreibung

Source https://fbinter.stadt-berlin.de/fb_daten/beschreibung/datenformatbeschreibung/datenformatbeschreibung_alkis_berlin.pdf

## ALKIS Berlin Bauwerke
* `BWF`  BAUWERKSFUNKTION_SCHLUESSEL
* `BEZBWF`  BAUWERKSFUNKTION (BEZEICHNUNG)
* `NAM`  Name
* `ART`  Art (Schlüssel)
* `BEZART`  Art (Bezeichnung)
* `SPO`  Sportart (Schlüssel)
* `BEZSPO`  Sportart (Bezeichnung)
* `BKT`  Bahnkategorie (Schlüssel)
* `BEZBKT`  Bahnkategorie (Bezeichnung)
* `BFK`  Bahnhofskategorie (Schlüssel)
* `DES`  Beschreibung (Schlüssel)
* `BEZDES`  Beschreibung (Bezeichnung)
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Besondere Flurstücksgrenzen
* `ARF`  Art der Festlegung (Schlüssel)
* `BEZARF`  Art der Festlegung (Bezeichnung)
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Flur
* `FLN`  Flurnummer
* `NAMGMK`  Gemarkung (Bezeichnung)
* `NAMLAN`  Land (Bezeichnung)
* `LAN`  Land (Schlüssel)
* `NAME`  Flur (Gesamtschlüssel)

## ALKIS Berlin Flurstücke
* `BEZEICH`  AAA-Beschreibung
* `FSKO`  Flurstückskennzeichen
* `ZAE`  Flurstückskennzeichen (Zähler)
* `NEN`  Flurstückskennzeichen (Nenner)
* `GMK`  Gemarkungsschlüssel
* `NAMGMK`  Gemarkungsname
* `FLN`  Flurnummer
* `GDZ`  Gemeindekennzeichen
* `NAMGEM`  Gemeindename
* `ZDE`  Zeitpunkt der Entstehung
* `DST`  Zuständige Stelle
* `BEG`  Laufzeitintervall (Beginn)
* `STATUSDAT`  Zeitpunkt des Bearbeitungsstatus

## ALKIS Berlin Gebäude
* `BEZGFK`  Gebäudefunktion (Bezeichnung)
* `OFL`  Lage zur Erdoberfläche (Schlüssel)
* `BEZOFL`  Lage zur Erdoberfläche (Bezeichnung)
* `AOG`  Anzahl der Obergeschosse
* `AUG`  Anzahl der Untergeschosse
* `HOH`   Hochhaus
* `BAT`  Bauart (Schlüssel)
* `BEZBAT`  Bauart (Bezeichnung)
* `NAM`  Name
* `BAW`  Bauweise (Schlüssel)
* `ZUS`  Zustand (Schlüssel)
* `BEZZUS`  Zustand (Bezeichnung)
* `GKN`  Gebäudekennzeichen
* `DES`  Beschreibung (Schlüssel)
* `BEZDES`  Beschreibung (Bezeichnung)
* `LAG`  Straßenschlüssel
* `NAMLAG`  Straßenname
* `PNR`  Pseudonummer
* `LNR`  Laufende Nummer
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Gebäude (Linien)
* `BES`  Beschaffenheit (Schlüssel)
* `BEZBES`  Beschaffenheit (Bezeichnung)
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Gemarkung
* `NAMGMK`  Gemarkung (Bezeichnung)
* `GMK`  Gemarkung (Schlüssel)
* `NAMLAN`  Land (Bezeichnung)
* `LAN`  Land (Schlüssel)
* `NAME`  Gemarkung (Gesamtschlüssel)
* `NAMGEM`  Bezirk (Schlüssel)
* `NAMLAN`  Land (Name)
* `LAN`  Land (Schlüssel)
* `NAME`  Bezirk (Gesamtschlüssel)

## ALKIS Berlin Gewässer- und Vegetationsflächen
* `NAM`  Name
* `OFL`  Lage zur Erdoberfläche (Schlüssel)
* `BEZOFL`  Lage zur Erdoberfläche (Bezeichnung)
* `FKT`  Funktion (Schlüssel)
* `BEZFKT`  Funktion (Bezeichnung)
* `BWS`  Bewuchs (Schlüssel)
* `BEZBWS`  Bewuchs (Bezeichnung)
* `HYD`  Hydrologisches Merkmal (Schlüssel)
* `BEZHYD`  Hydrologisches Merkmal (Bezeichnung)
* `ZUS`  Zustand (Schlüssel)
* `BEZZUS`  Zustand (Bezeichnung)
* `DES`  Beschreibung (Schlüssel)
* `BEZDES`  Beschreibung (Bezeichnung)
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Land
* `NAMLAN`  Land (Bezeichnung)
* `LAN`  Land (Schlüssel)

## ALKIS Berlin Ortsteil
* `UUID`  Identifikator
* `SCH`  Schlüssel
* `NAM`  Name
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Rechtliche Festlegungen
* `ADF`  Art der Festlegung (Schlüssel)
* `BEZADF`  Art der Festlegung (Bezeichnung)
* `NAM`  Name
* `DST`  Zuständige Dienststelle
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Relief
* `ART`  Art (Schlüssel)
* `BEZART`  Art (Bezeichnung)
* `DES`  Erfassungsmethode (Schlüssel)
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Relief (Geländekante)
* `ART`  Art (Schlüssel)
* `BEZART`  Art (Bezeichnung)
* `DES`  Erfassungsmethode (Schlüssel)
* `BEZDES`  Erfassungsmethode (Bezeichnung)
* `IDF`  Erfassungsidentifikation (Schlüssel)
* `BEZIDF`  Erfassungsidentifikation (Bezeichnung)
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Tatsächliche Nutzung
* `NAM`  Name
* `FKT`  Funktion (Schlüssel)
* `BEZFKT`  Funktion (Bezeichnung)
* `ZUS`  Zustand (Schlüssel)
* `BEZZUS`  Zustand (Bezeichnung)
* `VEG`  Vegetationsmerkmal (Schlüssel)
* `BEZVEG`  Vegetationsmerkmal (Bezeichnung)
* `AGT`  Abbaugut (Schlüssel)
* `BEZAGT`  Abbaugut (Bezeichnung)
* `LGT`  Lagergut (Schlüssel)
* `BEZLGT`  Lagergut (Bezeichnung)
* `HYD`  Hydrologisches Merkmal (Schlüssel)
* `BEZHYD`  Hydrologisches Merkmal (Bezeichnung)
* `ART`  Art der Nutzung (Schlüssel)
* `BKT`  Bahnkategorie (Schlüssel)
* `BEZBKT`  Bahnkategorie (Bezeichnung)
* `BEZEICH`  AAA-Beschreibung

## ALKIS Berlin Vegetation (Linien)
* `ART`  Art (Schlüssel)
* `BEZART`  Art (Bezeichnung)
* `BEZBWS`  Bewuchs (Bezeichnung)
* `BEZEICH`  AAA-Beschreibung
* `BEZEICH`  AAA-Beschreibung
* `DES`  Beschreibung (Schlüssel)
* `BEZBWS`  Bewuchs (Bezeichnung)
