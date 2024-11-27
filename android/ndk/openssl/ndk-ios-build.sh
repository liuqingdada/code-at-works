#!/bin/bash

git checkout .
git clean -fd

OUTPUT_DIR="$(pwd)/../libs/ios"

# 配置编译参数
ARCHS=("arm64" "x86_64")
PLATFORMS=("iPhoneOS" "iPhoneSimulator")
SDKVERSION=$(xcrun --sdk iphoneos --show-sdk-version)
IOS_MIN_SDK_VERSION="15.0"
DEVELOPER=$(xcode-select -print-path)
export SDKVERSION
export IOS_MIN_SDK_VERSION

# 遍历不同架构进行构建
for ((i = 0; i < ${#ARCHS[@]}; i++)); do
    ARCH=${ARCHS[i]}
    PLATFORM=${PLATFORMS[i]}
    BUILD_DIR="$OUTPUT_DIR/$ARCH"

    echo "Building OpenSSL for $ARCH using $PLATFORM SDK $SDKVERSION"

    # 清理和创建构建目录
    rm -rf "$BUILD_DIR"
    mkdir -p "$BUILD_DIR"

    # 配置构建
    if [ "$ARCH" == "arm64" ]; then
        export CROSS_COMPILE="${DEVELOPER}/Toolchains/XcodeDefault.xctoolchain/usr/bin/"
        export CROSS_TOP="${DEVELOPER}/Platforms/${PLATFORM}.platform/Developer"
        export CROSS_SDK="${PLATFORM}${SDKVERSION}.sdk"
        ./Configure ios64-cross no-async no-shared no-tests --prefix="$BUILD_DIR" || { echo "Configure failed"; exit 1; }
    else
        unset CROSS_COMPILE
        unset CROSS_TOP
        unset CROSS_SDK
        ./Configure iossimulator-x86_64-xcrun no-shared no-shared no-tests --prefix="$BUILD_DIR" || { echo "Configure failed"; exit 1; }
    fi

    make clean
    make -j8 || { echo "Make failed"; exit 1; }
    make install_sw || { echo "Install failed"; exit 1; }
done

echo "iOS OpenSSL compilation finished."
