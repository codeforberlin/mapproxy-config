# WFS/WMS/WMTS Guide for Berlin Geo Portal

This guide explains the OGC web service protocols (WFS, WMS, WMTS) as they relate to configuring MapProxy with Berlin's geo portal services.

## Overview

Berlin's geo portal provides geospatial data through standard OGC web services:

- **WMS (Web Map Service)**: Raster map images - used by MapProxy
- **WFS (Web Feature Service)**: Vector feature data - used for data exploration
- **WMTS (Web Map Tile Service)**: Pre-rendered tiles

## WMS vs WMTS: When to Use Which?

**Decision Matrix:**

| Requirement               | WMS              | WMTS            |
| ------------------------- | ---------------- | --------------- |
| Dynamic layer combination | ✅ Yes           | ❌ No           |
| Flexible bbox/size        | ✅ Yes           | ❌ Fixed tiles  |
| Change styles per request | ✅ Yes           | ❌ Pre-styled   |
| Available in Berlin       | ✅ Most services | ❌ Rare         |
| MapProxy support          | ✅ Excellent     | ✅ Good         |
| Server performance        | ⚠️ On-demand     | ✅ Pre-rendered |

**Bottom Line:** For Berlin's geo portal with MapProxy, **always use WMS** unless a service specifically only offers WMTS (which is uncommon).

## WMS (Web Map Service)

WMS is the primary protocol used by MapProxy to fetch raster map tiles from Berlin's geo portal.

### Key Concepts

**Service Endpoints:**

- Old system (FIS Broker): `https://fbinter.stadt-berlin.de/fb/wms/{service_path}`
- New system: `https://gdi.berlin.de/services/wms/{service_name}`

**Coordinate System:**

- Berlin uses **EPSG:25833** (ETRS89 / UTM zone 33N)
- MapProxy converts to Web Mercator (EPSG:3857) for web display

### WMS Operations

#### GetCapabilities

Discovers available layers, styles, formats, and supported coordinate systems.

**Request Format:**

```
{base_url}?service=WMS&request=GetCapabilities&version=1.3.0
```

**Automated Discovery:**

Use helper scripts (see [README.md](../README.md#helper-scripts)):

- `bun run discover-layers <service_url>` - Discover layers for a service
- `bun run generate-layer-docs` - Generate documentation for all services

#### GetMap

Requests a map image for specified layers, area, and style.

**Request Format:**

```
{base_url}?service=WMS&request=GetMap&version=1.3.0
&layers={layer_names}
&styles={style_names}
&bbox={minx},{miny},{maxx},{maxy}
&crs=EPSG:25833
&width={width}
&height={height}
&format={format}
```

**Key Parameters:**

- `layers`: Comma-separated layer names (order matters for rendering)
- `styles`: Comma-separated style names (usually "default")
- `bbox`: Bounding box in CRS coordinates (minx,miny,maxx,maxy)
- `crs` or `srs`: Coordinate Reference System (EPSG:25833 for Berlin)
- `width`, `height`: Output image dimensions in pixels
- `format`: Image format (image/png, image/jpeg)

**Example:**

```
https://gdi.berlin.de/services/wms/strassenbefahrung?service=WMS&request=GetMap&version=1.3.0
&layers=cm_fahrbahn,cl_gehweg
&styles=default,default
&bbox=388800,5818137,393794,5821374
&crs=EPSG:25833
&width=512
&height=512
&format=image/png
```

### Finding Berlin Geo Portal Services

**Service URL Pattern:**

- Old system (FIS Broker): `https://fbinter.stadt-berlin.de/fb/wms/{service_path}` (deprecated)
- New system: `https://gdi.berlin.de/services/wms/{service_name}`

**Automated URL Checking:**

Run `bun run check-urls` to validate all service URLs, verify layers exist, and update `*_comments.yml` files. See [README.md](../README.md#helper-scripts) for details.

**Manual Discovery (if needed):**

- **Berlin Viewer**: `https://gdi.berlin.de/viewer/main/` - Inspect network requests to find WMS endpoints
- **Metadata Catalog**: `https://gdi.berlin.de/geonetwork/` - Search for datasets and associated WMS endpoints

## WFS (Web Feature Service)

WFS provides vector feature data (points, lines, polygons) rather than rendered images.

### Key Concepts

**Use Cases:**

- Data exploration and inspection
- Downloading feature geometries
- Attribute queries
- Used by tools like WFSExplorer

**Service Endpoints:**

- Often same base URL as WMS: `https://gdi.berlin.de/services/wms/{service_name}`
- Can also be: `https://gdi.berlin.de/services/wfs/{service_name}`

### WFS Operations

WFS operations are similar to WMS (see [WMS Operations](#wms-operations)), but return feature type information instead of rendered images.

**Tools:**

- **WFSExplorer**: `https://wfsexplorer.netlify.app/` - Visual exploration of WFS services
- Enter WMS/WFS URL to browse available feature types

### Relationship to WMS Layers

- WMS layers often correspond to WFS feature types
- Layer names in WMS may match feature type names in WFS
- Use WFS to inspect data structure and attributes
- Use WMS for map rendering in MapProxy (see [WMS Operations](#wms-operations))

## WMTS (Web Map Tile Service)

WMTS provides pre-rendered map tiles in a tile matrix structure. Less commonly used in Berlin's setup compared to WMS. See [WMS vs WMTS: When to Use Which?](#wms-vs-wmts-when-to-use-which) for comparison.

**Key Characteristics:**

- Tiles are pre-rendered and cached
- Requires specific tile matrix set definitions
- Less flexible than WMS (can't combine layers dynamically)

**Note:** Berlin services primarily use WMS. WMTS operations follow similar patterns to WMS GetCapabilities/GetMap but with tile-specific parameters.

## Finding Layers for MapProxy Configs

### Automated Discovery (Recommended)

Use helper scripts (see [README.md](../README.md#helper-scripts)):

- `bun run discover-layers <service_url>` - Discover layers for a service
- `bun run generate-layer-docs` - Generate documentation for all services in `layer_docs/`
- `bun run check-urls` - Validate URLs and verify layers exist

For detailed layer information, see `layer_docs/` (auto-generated).

### Manual Process (if needed)

If you need to manually discover layers:

1. **Identify the service URL** - See [Finding Berlin Geo Portal Services](#finding-berlin-geo-portal-services)
2. **Get Capabilities** - Request: `{service_url}?service=WMS&request=GetCapabilities&version=1.3.0`
3. **Extract layer information** - Parse XML to find `<Layer>` elements with `<Name>`, `<Title>`, `<Style>`, etc.
4. **Verify layer order** - Layer order matters! First layers render below later layers
5. **Update MapProxy config** - See [MapProxy Configuration](#mapproxy-configuration) below

### MapProxy Configuration

**Key Properties:**

- `url`: Base WMS service URL (see [Service Endpoints](#key-concepts))
- `layers`: Layer names (comma-separated, order matters - first renders below)
- `styles`: Style names (usually "default")
- `format`: Image format (typically "png")
- `supported_srs`: List of supported SRS (e.g., `['EPSG:25833']` - see [Coordinate System](#key-concepts))
- `transparent`: Whether to request transparent background (true/false)

**Example MapProxy Source Config:**

```yaml
sources:
  my_source:
    type: wms
    req:
      url: https://gdi.berlin.de/services/wms/strassenbefahrung
      layers: cm_fahrbahn,cl_gehweg
      style: default
      format: png
      transparent: true
    supported_srs: ['EPSG:25833']
    wms_opts: { version: 1.3.0 }
```

**Finding layer names:** Use `bun run discover-layers <service_url>` or check `layer_docs/*.md` files.

For complete layer information, see `layer_docs/` directory (auto-generated).

## Useful Tools

- **Berlin Viewer**: `https://gdi.berlin.de/viewer/main/` - Find services and inspect network requests
- **WFSExplorer**: `https://wfsexplorer.netlify.app/` - Explore WFS/WMS capabilities
- **MapProxy Demo**: `https://mapproxy.codefor.de/demo/` - Test MapProxy configuration
- **Demo Links**: [demo_links/README.md](../demo_links/README.md) - All available layers with previews

## References

- [OGC WMS 1.3.0 Specification](https://www.ogc.org/standards/wms)
- [OGC WFS 2.0 Specification](https://www.ogc.org/standards/wfs)
- [MapProxy Documentation](https://mapproxy.github.io/mapproxy/latest/index.html)
- [Berlin Geo Portal](https://gdi.berlin.de/)
