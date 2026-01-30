# Layer Definition: Fahrradreparaturstationen

Im Rahmen des Forschungsprojekts zum erweiterten umweltsensitiven Verkehrsmanagementsystem (eUVM), Teilprojekt Maßnahmenumsetzung wurden Fahrradreparaturstationen über alle Bezirke verteilt aufgebaut. So werden die Reparaturstationen an Orten platziert, an denen starke Radverkehrsaufkommen gemessen werden oder der Radverkehr gezielt gefördert werden soll. Diese sind durch das Fahrrad Berlin Design gekennzeichnet.&#13;
Stationen, die nicht im Fahrrad Berlin Design sind, wurden zumindest insofern bekannt in diesem Datensatz mit aufgenommen. Für die Vollständigkeit dieser Auflistung besteht keine Gewähr.

**Source**: https://gdi.berlin.de/services/wms/fahrradreparatur

**GetCapabilities**: https://gdi.berlin.de/services/wms/fahrradreparatur?service=WMS&request=GetCapabilities&version=1.3.0

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
| `fahrradreparatur` | `fahrradreparatur` | Fahrradreparaturstationen | Im Rahmen des Forschungsprojekts zum erweiterten umweltsensitiven Verkehrsmanagementsystem (eUVM), Teilprojekt Maßnahmenumsetzung wurden Fahrradreparaturstationen über alle Bezirke verteilt aufgebaut. So werden die Reparaturstationen an Orten platziert, an denen starke Radverkehrsaufkommen gemessen werden oder der Radverkehr gezielt gefördert werden soll. Diese sind durch das Fahrrad Berlin Design gekennzeichnet.&#13; Stationen, die nicht im Fahrrad Berlin Design sind, wurden zumindest insofern bekannt in diesem Datensatz mit aufgenommen. Für die Vollständigkeit dieser Auflistung besteht keine Gewähr. |

---

## Demo Links

All possible layer/style combinations. Valid combinations (✓) have previews; invalid combinations (✗) are not supported by the WMS service.

| Layer | Style | Status | Preview Image | Links |
|-------|-------|--------|---------------|-------|
| `fahrradreparatur` | `fahrradreparatur` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/fahrradreparatur?service=WMS&request=GetMap&version=1.3.0&layers=fahrradreparatur&styles=fahrradreparatur&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): Fahrradreparaturstationen (fahrradreparatur)"> <img src="https://gdi.berlin.de/services/wms/fahrradreparatur?service=WMS&request=GetMap&version=1.3.0&layers=fahrradreparatur&styles=fahrradreparatur&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): Fahrradreparaturstationen (fahrradreparatur)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Ffahrradreparatur%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dfahrradreparatur%26styles%3Dfahrradreparatur%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |

---

## URLs for iD Editor

Copy-paste these URLs into iD editor's custom background layer field:

* `https://gdi.berlin.de/services/wms/fahrradreparatur?service=WMS&request=GetMap&version=1.3.0&layers=fahrradreparatur&styles=fahrradreparatur&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (Fahrradreparaturstationen)

---

## Notes

- **Style compatibility**: Styles are layer-specific. You cannot use a style from one layer with a different layer (e.g., you cannot use `tempolimits_strab` style with the `hoechstgeschwindigkeit` layer).
- Layer order matters for rendering: layers listed first render below layers listed later
- Use `transparent: true` in MapProxy config for overlay layers
- Preview images use a sample bounding box around Berlin center
