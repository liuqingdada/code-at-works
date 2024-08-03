#!/bin/bash

ARCHS=("arm64-v8a")
export ANDROID_NDK_HOME=$ANDROID_HOME/ndk-bundle
export ANDROID_NDK_ROOT=$ANDROID_NDK_HOME

for arch in "${ARCHS[@]}"; do
  OUTPUT_DIR=../libs/$arch
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"

  API_LEVEL=21
  TOOLCHAIN="$ANDROID_NDK_HOME/toolchains/llvm/prebuilt/darwin-x86_64"
  export PATH=$TOOLCHAIN/bin:$PATH

  # 配置，编译，安装
  PREFIX="$(pwd)/$OUTPUT_DIR"

  case $arch in
      "arm64-v8a")
          ./Configure android-arm64 \
            -D__ANDROID_API__=$API_LEVEL \
            --prefix="$PREFIX" \
            -Wl,-s,-z,max-page-size=16384
          ;;
      "armeabi-v7a")
          ./Configure android-arm -march=armv7-a \
            -D__ANDROID_API__=$API_LEVEL \
            --prefix="$PREFIX"
          ;;
      *)
          echo "Unsupported architecture: $arch"
          exit 1
          ;;
  esac

  make clean
  make -j8
  make install

  "$STRIP" --strip-unneeded "$PREFIX/lib/libcrypto.so"
  "$STRIP" --strip-unneeded "$PREFIX/lib/libssl.so"


done

echo "NDK compilation finished."