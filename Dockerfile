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
COPY log.ini .
COPY endpoints/ ./endpoints/

# Create cache directory
RUN mkdir -p /mapproxy/cache

# Expose port
EXPOSE 8080

# Start MapProxy
CMD ["mapproxy-util", "serve-develop", "-b", "0.0.0.0:8080", "config.yml"]
