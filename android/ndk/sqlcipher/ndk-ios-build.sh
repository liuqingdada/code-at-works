#!/bin/bash

build_arch() {
	local arch=$1
	local platform=$2
	local host_flag=$3
    echo "========================================"
    echo "Building for $arch $platform $host_flag"
    echo "========================================"

    OUTPUT_DIR=../libs/sqlclipher/ios-"$arch"
    rm -rf "$OUTPUT_DIR"
    mkdir -p "$OUTPUT_DIR"
    if [ -f "Makefile" ]; then
        make distclean
        make clean
    fi

    IOS_MIN_SDK_VERSION="12.0"
    local sdk_path=$(xcrun --sdk $platform --show-sdk-path)
    export CC=$(xcrun --find clang)
    export CXX=$(xcrun --find clang++)

    export OPENSSL_DIR=$HOME/lib/rust/env/ios-"$arch"/openssl
    export OPENSSL_LIB_DIR=$OPENSSL_DIR/lib
    export OPENSSL_INCLUDE_DIR=$OPENSSL_DIR/include

    CFLAGS="-DSQLITE_HAS_CODEC \
        -DSQLITE_THREADSAFE=1 \
        -DSQLITE_EXTRA_INIT=sqlcipher_extra_init \
        -DSQLITE_EXTRA_SHUTDOWN=sqlcipher_extra_shutdown \
        -DSQLITE_NOHAVE_SYSTEM \
        -m$platform-version-min=$IOS_MIN_SDK_VERSION \
        -I$OPENSSL_INCLUDE_DIR \
        -isysroot $sdk_path"
    LDFLAGS="-arch $arch -L$OPENSSL_LIB_DIR -lcrypto"
    PREFIX="$(pwd)/$OUTPUT_DIR"
    ./configure --host=$host_flag --prefix="$PREFIX" \
        --with-tempstore=yes \
        --disable-tcl \
        --disable-shared \
        --enable-static \
        CFLAGS="$CFLAGS" \
        LDFLAGS="$LDFLAGS"

    make -j8
    make install
}

build_arch "arm64" "iphoneos" "arm-apple-darwin"




