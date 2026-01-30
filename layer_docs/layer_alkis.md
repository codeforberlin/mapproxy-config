# Layer Definition: ALKIS Berlin (Amtliches Liegenschaftskatasterinformationssystem)

In ALKIS Berlin werden die aktuellen Grundrissdaten des Liegenschaftskatasters flächendeckend geführt.

**Source**: https://gdi.berlin.de/services/wms/alkis

**GetCapabilities**: https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetCapabilities&version=1.3.0

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
| `a_alkis_raster` | `default-style-a_alkis_raster` | ALKIS Berlin (Darstellung) | In ALKIS Berlin werden die aktuellen Grundrissdaten des Liegenschaftskatasters flächendeckend geführt. |
| `a_alkis_raster_sw` | `default-style-a_alkis_raster_sw` | ALKIS Berlin s/w (Darstellung) | In ALKIS Berlin werden die aktuellen Grundrissdaten des Liegenschaftskatasters flächendeckend geführt. |
| `b_alkis_gebaeude_sd` | `alkis_gebaeude_style` | ALKIS Berlin Gebäude (Sachdaten) | Daten des amtlichen Liegenschaftskatsterinformationssystems (ALKIS) - Gebäude und Gebäudeteile |
| `c_alkis_bauwerke_sd` | `alkis_bauwerke_style` | ALKIS Berlin Bauwerke (Sachdaten) | Daten des amtlichen Liegenschaftskatsterinformationssystems (ALKIS) - Bauwerke, Anlage und Einrichtung in Siedlungsflächen und für den Verkehr |
| `d_alkis_rechtliche_festlegungen_sd` | `alkis_rechtliche_festlegungen_style` | ALKIS Berlin Rechtliche Festlegungen (Sachdaten) | Daten des amtlichen Liegenschaftskatsterinformationssystems (ALKIS) - Klassifizierung  nach Straßenrecht, Klassifizierung  nach Wasserrecht, sonstiges Recht |
| `e_alkis_flurstuecke_sd` | `alkis_flurstuecke_style` | ALKIS Berlin Flurstücke (Sachdaten) | Daten des amtlichen Liegenschaftskatsterinformationssystems (ALKIS) - Das Flurstück ist als geometrisch eindeutig begrenzter Teil der Erdoberfläche Buchungseinheit des Liegenschaftskatasters. |
| `f_alkis_tatsaechliche_nutzung_sd` | `alkis_tatsaechliche_nutzung_style` | ALKIS Berlin Tatsächliche Nutzung (Sachdaten) | Daten des amtlichen Liegenschaftskatsterinformationssystems (ALKIS) - Lückenlose, überschneidungsfreie und flächendeckende Beschreibung der Erdoberfläche |

---

## Demo Links

All possible layer/style combinations. Valid combinations (✓) have previews; invalid combinations (✗) are not supported by the WMS service.

| Layer | Style | Status | Preview Image | Links |
|-------|-------|--------|---------------|-------|
| `a_alkis_raster` | `default-style-a_alkis_raster` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=a_alkis_raster&styles=default-style-a_alkis_raster&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng" width=200 alt="Preview (zoomed in): ALKIS Berlin (Darstellung) (default-style-a_alkis_raster)"> <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=a_alkis_raster&styles=default-style-a_alkis_raster&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng" width=200 alt="Preview (zoomed out): ALKIS Berlin (Darstellung) (default-style-a_alkis_raster)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Falkis%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Da_alkis_raster%26styles%3Ddefault-style-a_alkis_raster%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `a_alkis_raster` | `default-style-a_alkis_raster_sw` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster` | `alkis_gebaeude_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster` | `alkis_bauwerke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster` | `alkis_rechtliche_festlegungen_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster` | `alkis_flurstuecke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster` | `alkis_tatsaechliche_nutzung_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster_sw` | `default-style-a_alkis_raster_sw` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=a_alkis_raster_sw&styles=default-style-a_alkis_raster_sw&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng" width=200 alt="Preview (zoomed in): ALKIS Berlin s/w (Darstellung) (default-style-a_alkis_raster_sw)"> <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=a_alkis_raster_sw&styles=default-style-a_alkis_raster_sw&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng" width=200 alt="Preview (zoomed out): ALKIS Berlin s/w (Darstellung) (default-style-a_alkis_raster_sw)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Falkis%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Da_alkis_raster_sw%26styles%3Ddefault-style-a_alkis_raster_sw%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `a_alkis_raster_sw` | `default-style-a_alkis_raster` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster_sw` | `alkis_gebaeude_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster_sw` | `alkis_bauwerke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster_sw` | `alkis_rechtliche_festlegungen_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster_sw` | `alkis_flurstuecke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `a_alkis_raster_sw` | `alkis_tatsaechliche_nutzung_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `b_alkis_gebaeude_sd` | `alkis_gebaeude_style` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=b_alkis_gebaeude_sd&styles=alkis_gebaeude_style&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): ALKIS Berlin Gebäude (Sachdaten) (alkis_gebaeude_style)"> <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=b_alkis_gebaeude_sd&styles=alkis_gebaeude_style&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): ALKIS Berlin Gebäude (Sachdaten) (alkis_gebaeude_style)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Falkis%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Db_alkis_gebaeude_sd%26styles%3Dalkis_gebaeude_style%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `b_alkis_gebaeude_sd` | `default-style-a_alkis_raster` | ✗ Invalid | ✗ Style not available for this layer | — |
| `b_alkis_gebaeude_sd` | `default-style-a_alkis_raster_sw` | ✗ Invalid | ✗ Style not available for this layer | — |
| `b_alkis_gebaeude_sd` | `alkis_bauwerke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `b_alkis_gebaeude_sd` | `alkis_rechtliche_festlegungen_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `b_alkis_gebaeude_sd` | `alkis_flurstuecke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `b_alkis_gebaeude_sd` | `alkis_tatsaechliche_nutzung_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `c_alkis_bauwerke_sd` | `alkis_bauwerke_style` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=c_alkis_bauwerke_sd&styles=alkis_bauwerke_style&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): ALKIS Berlin Bauwerke (Sachdaten) (alkis_bauwerke_style)"> <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=c_alkis_bauwerke_sd&styles=alkis_bauwerke_style&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): ALKIS Berlin Bauwerke (Sachdaten) (alkis_bauwerke_style)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Falkis%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dc_alkis_bauwerke_sd%26styles%3Dalkis_bauwerke_style%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `c_alkis_bauwerke_sd` | `default-style-a_alkis_raster` | ✗ Invalid | ✗ Style not available for this layer | — |
| `c_alkis_bauwerke_sd` | `default-style-a_alkis_raster_sw` | ✗ Invalid | ✗ Style not available for this layer | — |
| `c_alkis_bauwerke_sd` | `alkis_gebaeude_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `c_alkis_bauwerke_sd` | `alkis_rechtliche_festlegungen_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `c_alkis_bauwerke_sd` | `alkis_flurstuecke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `c_alkis_bauwerke_sd` | `alkis_tatsaechliche_nutzung_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `d_alkis_rechtliche_festlegungen_sd` | `alkis_rechtliche_festlegungen_style` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=d_alkis_rechtliche_festlegungen_sd&styles=alkis_rechtliche_festlegungen_style&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): ALKIS Berlin Rechtliche Festlegungen (Sachdaten) (alkis_rechtliche_festlegungen_style)"> <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=d_alkis_rechtliche_festlegungen_sd&styles=alkis_rechtliche_festlegungen_style&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): ALKIS Berlin Rechtliche Festlegungen (Sachdaten) (alkis_rechtliche_festlegungen_style)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Falkis%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Dd_alkis_rechtliche_festlegungen_sd%26styles%3Dalkis_rechtliche_festlegungen_style%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `d_alkis_rechtliche_festlegungen_sd` | `default-style-a_alkis_raster` | ✗ Invalid | ✗ Style not available for this layer | — |
| `d_alkis_rechtliche_festlegungen_sd` | `default-style-a_alkis_raster_sw` | ✗ Invalid | ✗ Style not available for this layer | — |
| `d_alkis_rechtliche_festlegungen_sd` | `alkis_gebaeude_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `d_alkis_rechtliche_festlegungen_sd` | `alkis_bauwerke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `d_alkis_rechtliche_festlegungen_sd` | `alkis_flurstuecke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `d_alkis_rechtliche_festlegungen_sd` | `alkis_tatsaechliche_nutzung_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `e_alkis_flurstuecke_sd` | `alkis_flurstuecke_style` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=e_alkis_flurstuecke_sd&styles=alkis_flurstuecke_style&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): ALKIS Berlin Flurstücke (Sachdaten) (alkis_flurstuecke_style)"> <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=e_alkis_flurstuecke_sd&styles=alkis_flurstuecke_style&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): ALKIS Berlin Flurstücke (Sachdaten) (alkis_flurstuecke_style)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Falkis%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3De_alkis_flurstuecke_sd%26styles%3Dalkis_flurstuecke_style%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `e_alkis_flurstuecke_sd` | `default-style-a_alkis_raster` | ✗ Invalid | ✗ Style not available for this layer | — |
| `e_alkis_flurstuecke_sd` | `default-style-a_alkis_raster_sw` | ✗ Invalid | ✗ Style not available for this layer | — |
| `e_alkis_flurstuecke_sd` | `alkis_gebaeude_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `e_alkis_flurstuecke_sd` | `alkis_bauwerke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `e_alkis_flurstuecke_sd` | `alkis_rechtliche_festlegungen_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `e_alkis_flurstuecke_sd` | `alkis_tatsaechliche_nutzung_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `f_alkis_tatsaechliche_nutzung_sd` | `alkis_tatsaechliche_nutzung_style` | ✓ Valid | <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=f_alkis_tatsaechliche_nutzung_sd&styles=alkis_tatsaechliche_nutzung_style&bbox=392000%2C5819000%2C394000%2C5821000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed in): ALKIS Berlin Tatsächliche Nutzung (Sachdaten) (alkis_tatsaechliche_nutzung_style)"> <img src="https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=f_alkis_tatsaechliche_nutzung_sd&styles=alkis_tatsaechliche_nutzung_style&bbox=385000%2C5810000%2C400000%2C5825000&crs=EPSG%3A25833&width=256&height=256&format=image%2Fpng&transparent=true" width=200 alt="Preview (zoomed out): ALKIS Berlin Tatsächliche Nutzung (Sachdaten) (alkis_tatsaechliche_nutzung_style)"> | [Preview with iD](https://ideditor-release.netlify.app/#background=custom:https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwms%2Falkis%3Fservice%3DWMS%26request%3DGetMap%26version%3D1.3.0%26layers%3Df_alkis_tatsaechliche_nutzung_sd%26styles%3Dalkis_tatsaechliche_nutzung_style%26format%3Dimage%2Fpng%26bbox%3D{bbox}%26crs%3D{proj}%26width%3D{width}%26height%3D{height}&disable_features=address_points,points,service_roads,paths,buildings,building_parts,indoor,landuse,boundaries,water,rail,pistes,aerialways,power,past_future,others&map=17.69/52.52133/13.40396&walkthrough=false) |
| `f_alkis_tatsaechliche_nutzung_sd` | `default-style-a_alkis_raster` | ✗ Invalid | ✗ Style not available for this layer | — |
| `f_alkis_tatsaechliche_nutzung_sd` | `default-style-a_alkis_raster_sw` | ✗ Invalid | ✗ Style not available for this layer | — |
| `f_alkis_tatsaechliche_nutzung_sd` | `alkis_gebaeude_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `f_alkis_tatsaechliche_nutzung_sd` | `alkis_bauwerke_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `f_alkis_tatsaechliche_nutzung_sd` | `alkis_rechtliche_festlegungen_style` | ✗ Invalid | ✗ Style not available for this layer | — |
| `f_alkis_tatsaechliche_nutzung_sd` | `alkis_flurstuecke_style` | ✗ Invalid | ✗ Style not available for this layer | — |

---

## URLs for iD Editor

Copy-paste these URLs into iD editor's custom background layer field:

* `https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=a_alkis_raster&styles=default-style-a_alkis_raster&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (ALKIS Berlin (Darstellung))
* `https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=a_alkis_raster_sw&styles=default-style-a_alkis_raster_sw&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (ALKIS Berlin s/w (Darstellung))
* `https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=b_alkis_gebaeude_sd&styles=alkis_gebaeude_style&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (ALKIS Berlin Gebäude (Sachdaten))
* `https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=c_alkis_bauwerke_sd&styles=alkis_bauwerke_style&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (ALKIS Berlin Bauwerke (Sachdaten))
* `https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=d_alkis_rechtliche_festlegungen_sd&styles=alkis_rechtliche_festlegungen_style&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (ALKIS Berlin Rechtliche Festlegungen (Sachdaten))
* `https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=e_alkis_flurstuecke_sd&styles=alkis_flurstuecke_style&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (ALKIS Berlin Flurstücke (Sachdaten))
* `https://gdi.berlin.de/services/wms/alkis?service=WMS&request=GetMap&version=1.3.0&layers=f_alkis_tatsaechliche_nutzung_sd&styles=alkis_tatsaechliche_nutzung_style&format=image/png&bbox={bbox}&crs={proj}&width={width}&height={height}` (ALKIS Berlin Tatsächliche Nutzung (Sachdaten))

---

## Notes

- **Style compatibility**: Styles are layer-specific. You cannot use a style from one layer with a different layer (e.g., you cannot use `tempolimits_strab` style with the `hoechstgeschwindigkeit` layer).
- Layer order matters for rendering: layers listed first render below layers listed later
- Use `transparent: true` in MapProxy config for overlay layers
- Preview images use a sample bounding box around Berlin center
