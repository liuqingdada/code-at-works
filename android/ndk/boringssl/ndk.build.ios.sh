#!/bin/bash

BUILD_DIR="build"
rm -rf $BUILD_DIR
mkdir -p $BUILD_DIR

# Set the desired architecture, e.g., arm64 for modern devices
ARCH="arm64"

# Run CMake to configure the iOS build
cmake -B $BUILD_DIR \
      -DCMAKE_OSX_SYSROOT=iphoneos \
      -DCMAKE_OSX_ARCHITECTURES=$ARCH \
      -GNinja

# Build the project using Ninja
ninja -C $BUILD_DIR

echo "buld ios $ARCH finish."
