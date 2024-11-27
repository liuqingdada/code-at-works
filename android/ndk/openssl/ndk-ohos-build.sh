#!/bin/bash

ARCHS=("ohos-arm64-v8a")
export OHOS_NDK_HOME=$OHOS_HOME/native

for arch in "${ARCHS[@]}"; do
  OUTPUT_DIR=../libs/$arch
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
  export ARCH="${arch}"
  # 根据不同架构设置 NDK 工具链和标志
  case $arch in
      "ohos-arm64-v8a")
          TARGET_HOST=aarch64-unknown-linux-ohos
          CLANG_SUFIX=--target=aarch64-linux-ohos
          ;;
      "ohos-armeabi-v7a")
          TARGET_HOST=armv7-unknown-linux-ohos
          CLANG_SUFIX=--target=arm-linux-ohos
          ;;
      "ohos-x86_64")
          TARGET_HOST=x86_64-unknown-linux-ohos
          ;;
      *)
          echo "Unsupported architecture: $arch"
          exit 1
          ;;
  esac


  TOOLCHAIN="$OH_NDK_TOOLCHAIN"
  #SYSROOT=$OHOS_NDK_HOME/sysroot

  export AR="$TOOLCHAIN/bin/llvm-ar"
  export AS="$TOOLCHAIN/bin/llvm-as"
  export CC="$TOOLCHAIN/bin/$TARGET_HOST-clang $CLANG_SUFIX"
  export CXX="$TOOLCHAIN/bin/$TARGET_HOST-clang++ $CLANG_SUFIX"
  export LD="$TOOLCHAIN/bin/ld.lld"
  export RANLIB="$TOOLCHAIN/bin/llvm-ranlib"
  export STRIP="$TOOLCHAIN/bin/llvm-strip"

  PREFIX="$(pwd)/$OUTPUT_DIR"

  # 配置，编译，安装
  case $arch in
      "ohos-arm64-v8a")
          # -fPIC
          ./Configure ohos-aarch64 --prefix="$PREFIX" -Wl,-s,-z,max-page-size=16384
          ;;
      "ohos-armeabi-v7a")
          ./Configure linux-armv4 --prefix="$PREFIX"
          ;;
      "ohos-x86_64")
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
