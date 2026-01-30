# Layer Definition: Postleitzahlen

Der Datenbestand zeigt die Postleitzahlgebiete von Berlin. Die Geometrien werden aus den PLZ der Deutschen Post für jede Berliner Adresse erstellt und gleichzeitig anhand der entsprechenden Grundstücksgrenzen aus der Karte von Berlin 1:5000 (K5) digitalisiert. Großflächige Entscheidungsfreiräume bleiben in Gebieten ohne Adressen (Wälder, Grünflächen etc.).

**Source**: https://gdi.berlin.de/services/wms/postleitzahlen

**GetCapabilities**: https://gdi.berlin.de/services/wms/postleitzahlen?service=WMS&request=GetCapabilities&version=1.3.0

**Supported SRS**: EPSG:25833, EPSG:25832, EPSG:4326, EPSG:3857, CRS:84

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
| `postleitzahlen` | `postleitzahlen` | Postleitzahlen | Der Datenbestand zeigt die Postleitzahlgebiete von Berlin. Die Geometrien werden aus den PLZ der Deutschen Post für jede Berliner Adresse erstellt und gleichzeitig anhand der entsprechenden Grundstücksgrenzen aus der Karte von Berlin 1:5000 (K5) digitalisiert. Großflächige Entscheidungsfreiräume bleiben in Gebieten ohne Adressen (Wälder, Grünflächen etc.). |

---

## Demo Links

All possible layer/style combinations. Valid combinations (✓) have previews; invalid combinations (✗) are not supported by the WMS service.

| Layer | Style | Status | Preview Image | Links |
|-------|-------|--------|---------------|-------|
| `postleitzahlen` | `postleitzahlen` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/postleitzahlen?service=WMS&request=GetMap&version=1.3.0&layers=postleitzahlen&styles=postleitzahlen&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Postleitzahlen (postleitzahlen)"> <img src="https://gdi.berlin.de/services/wms/postleitzahlen?service=WMS&request=GetMap&version=1.3.0&layers=postleitzahlen&styles=postleitzahlen&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Postleitzahlen (postleitzahlen)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Fpostleitzahlen%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dpostleitzahlen%26styles%3Dpostleitzahlen%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |

---

## URLs for iD Editor

Copy-paste these URLs into iD editor's custom background layer field:

* `https://gdi.berlin.de/services/wms/postleitzahlen?service=WMS&request=GetMap&version=1.3.0&layers=postleitzahlen&styles=postleitzahlen&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Postleitzahlen)

---

## Notes

- **Style compatibility**: Styles are layer-specific. You cannot use a style from one layer with a different layer (e.g., you cannot use `tempolimits_strab` style with the `hoechstgeschwindigkeit` layer).
- Layer order matters for rendering: layers listed first render below layers listed later
- Use `transparent: true` in MapProxy config for overlay layers
- Preview images use a sample bounding box around Berlin center
