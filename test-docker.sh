#!/bin/bash

echo "🐳 Starting MapProxy Docker Test Environment..."
echo

# Build and start services
echo "Building and starting services..."
docker-compose up -d --build

# Wait for services to start
echo "Waiting for services to start..."
sleep 10

# Check if MapProxy is responding
echo "Testing MapProxy endpoints..."
echo

# Test basic response
if curl -s -f "http://localhost:8080/" > /dev/null; then
    echo "✅ MapProxy is responding"
else
    echo "❌ MapProxy is not responding"
    echo "Check logs with: docker-compose logs mapproxy"
    exit 1
fi

# Test demo page
if curl -s -f "http://localhost:8080/demo" > /dev/null; then
    echo "✅ Demo page is accessible"
else
    echo "❌ Demo page is not accessible"
fi

# Test WMS GetCapabilities
if curl -s -f "http://localhost:8080/service?REQUEST=GetCapabilities&SERVICE=WMS" > /dev/null; then
    echo "✅ WMS GetCapabilities is working"
else
    echo "❌ WMS GetCapabilities failed"
fi

echo
echo "🎉 Docker setup is ready!"
echo
echo "Access your MapProxy at:"
echo "  - MapProxy Demo: http://localhost:8080/demo"
echo "  - MapProxy Root: http://localhost:8080/"
echo "  - Demo Links:    http://localhost:3001/"
echo
echo "To view logs: docker-compose logs -f mapproxy"
echo "To stop:      docker-compose down"
