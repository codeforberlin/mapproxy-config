# Docker Setup for MapProxy Testing

This Docker setup allows you to test the MapProxy configuration locally without installing MapProxy directly on your machine.

## Quick Start

1. **Build and start the services:**
   ```bash
   docker-compose up --build
   ```

2. **Access the services:**
   - MapProxy: http://localhost:8080
   - Demo page: http://localhost:3000
   - MapProxy demo: http://localhost:8080/demo

## Services

### MapProxy (Port 8080)
- Main MapProxy service with your configuration
- Serves TMS and WMS endpoints
- Configuration files are mounted as volumes for live editing
- Restart the container to apply configuration changes

### Demo Server (Port 3000)
- Serves the demo links from the `demo_links` folder
- Access your generated documentation at http://localhost:3000

## Testing Your Configuration

1. **Check if all layers are working:**
   ```bash
   # Visit the MapProxy demo page
   open http://localhost:8080/demo
   ```

2. **Test specific endpoints:**
   ```bash
   # Test a TMS endpoint
   curl "http://localhost:8080/tms/1.0.0/alkis_sw/mercator/0/0/0.png"
   
   # Test WMS GetCapabilities
   curl "http://localhost:8080/service?REQUEST=GetCapabilities&SERVICE=WMS"
   ```

3. **View logs:**
   ```bash
   docker-compose logs -f mapproxy
   ```

## Development Workflow

1. **Make changes** to your YAML configuration files
2. **Restart the container** to apply changes:
   ```bash
   docker-compose restart mapproxy
   ```
3. **Test in browser** at http://localhost:8080/demo
4. **View logs** if needed: `docker-compose logs mapproxy`

## Useful Commands

```bash
# Start services in background
docker-compose up -d

# Stop services
docker-compose down

# Rebuild after major changes
docker-compose up --build

# View logs
docker-compose logs -f

# Access MapProxy container shell
docker-compose exec mapproxy bash
```

## Testing Checklist

- [ ] MapProxy starts without errors: `docker-compose logs mapproxy`
- [ ] Demo page loads: http://localhost:8080/demo
- [ ] All layers are listed in the demo
- [ ] TMS tiles load correctly
- [ ] WMS GetCapabilities works
- [ ] No dependency errors in logs

## Production Deployment

Once testing is successful, you can deploy the same configuration to your production server with confidence that all dependencies are resolved correctly.
