FROM ubuntu:22.04

# Prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-dev \
    gcc \
    g++ \
    libgdal-dev \
    gdal-bin \
    libproj-dev \
    proj-bin \
    proj-data \
    libgeos-dev \
    python3-pyproj \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /mapproxy

# Install MapProxy
RUN pip3 install --no-cache-dir MapProxy==1.13.2

# Copy configuration files
COPY config.yml .
COPY config_layers.yml .
COPY log.ini .
COPY run_mapproxy.py .
COPY sources/ ./sources/

# Create cache and log directories
RUN mkdir -p /mapproxy/cache /mapproxy/mapproxy_log

# Expose port
EXPOSE 8080

# Start MapProxy with log.ini so source request URLs are logged
CMD ["python3", "run_mapproxy.py", "--debug"]
