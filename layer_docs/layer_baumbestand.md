# Layer Definition: Baumbestand Berlin

Darstellung der Straßenbäume und eines Teils der Bäume in Grünanlagen

**Source**: https://gdi.berlin.de/services/wms/baumbestand

**GetCapabilities**: https://gdi.berlin.de/services/wms/baumbestand?service=WMS&request=GetCapabilities&version=1.3.0

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
| `anlagenbaeume` | `anlagenbaeume` | Baumbestand Berlin - Anlagenbäume | Anlagenbäumen mit Angaben zur Baumart, Adresse, Pflanzjahr, Höhe, etc. sowie Anlagenbäume ohne Sachdaten. |
| `strassenbaeume` | `strassenbaeume` | Baumbestand Berlin - Straßenbäume | Straßenbäume mit Angaben zur Baumart, Adresse, Pflanzjahr, Höhe, etc. sowie Straßenbäume ohne Sachdaten. |

---

## Demo Links

All possible layer/style combinations. Valid combinations (✓) have previews; invalid combinations (✗) are not supported by the WMS service.

| Layer | Style | Status | Preview Image | Links |
|-------|-------|--------|---------------|-------|
| `anlagenbaeume` | `anlagenbaeume` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/baumbestand?service=WMS&request=GetMap&version=1.3.0&layers=anlagenbaeume&styles=anlagenbaeume&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Baumbestand Berlin - Anlagenbäume (anlagenbaeume)"> <img src="https://gdi.berlin.de/services/wms/baumbestand?service=WMS&request=GetMap&version=1.3.0&layers=anlagenbaeume&styles=anlagenbaeume&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Baumbestand Berlin - Anlagenbäume (anlagenbaeume)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fbaumbestand%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Danlagenbaeume%26styles%3Danlagenbaeume%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `anlagenbaeume` | `strassenbaeume` | ✗ Invalid | ✗ Style not available for this layer | — |
| `strassenbaeume` | `strassenbaeume` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/baumbestand?service=WMS&request=GetMap&version=1.3.0&layers=strassenbaeume&styles=strassenbaeume&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Baumbestand Berlin - Straßenbäume (strassenbaeume)"> <img src="https://gdi.berlin.de/services/wms/baumbestand?service=WMS&request=GetMap&version=1.3.0&layers=strassenbaeume&styles=strassenbaeume&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Baumbestand Berlin - Straßenbäume (strassenbaeume)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fbaumbestand%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dstrassenbaeume%26styles%3Dstrassenbaeume%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `strassenbaeume` | `anlagenbaeume` | ✗ Invalid | ✗ Style not available for this layer | — |

---

## URLs for iD Editor

Copy-paste these URLs into iD editor's custom background layer field:

* `https://gdi.berlin.de/services/wms/baumbestand?service=WMS&request=GetMap&version=1.3.0&layers=anlagenbaeume&styles=anlagenbaeume&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Baumbestand Berlin - Anlagenbäume)
* `https://gdi.berlin.de/services/wms/baumbestand?service=WMS&request=GetMap&version=1.3.0&layers=strassenbaeume&styles=strassenbaeume&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Baumbestand Berlin - Straßenbäume)

---

## Notes

- **Style compatibility**: Styles are layer-specific. You cannot use a style from one layer with a different layer (e.g., you cannot use `tempolimits_strab` style with the `hoechstgeschwindigkeit` layer).
- Layer order matters for rendering: layers listed first render below layers listed later
- Use `transparent: true` in MapProxy config for overlay layers
- Preview images use a sample bounding box around Berlin center
