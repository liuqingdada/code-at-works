#!/bin/bash

ARCHS=("arm64-v8a" "armeabi-v7a")
export ANDROID_NDK_HOME=$ANDROID_HOME/ndk-bundle

for arch in "${ARCHS[@]}"; do
  OUTPUT_DIR=../libs/$arch
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
  export ARCH="${arch}"
  # 根据不同架构设置 NDK 工具链和标志
  case $arch in
      "arm64-v8a")
          TARGET_HOST=aarch64-linux-android
          ;;
      "armeabi-v7a")
          TARGET_HOST=armv7a-linux-androideabi
          ;;
      "x86")
          TARGET_HOST=i686-linux-android
          ;;
      "x86_64")
          TARGET_HOST=x86_64-linux-android
          ;;
      *)
          echo "Unsupported architecture: $arch"
          exit 1
          ;;
  esac

  API_LEVEL=21
  TOOLCHAIN="$ANDROID_NDK_HOME/toolchains/llvm/prebuilt/darwin-x86_64"
  #SYSROOT=$TOOLCHAIN/sysroot

  export AR="$TOOLCHAIN/bin/llvm-ar"
  export AS="$TOOLCHAIN/bin/$TARGET_HOST-as"
  export CC="$TOOLCHAIN/bin/$TARGET_HOST$API_LEVEL-clang"
  export CXX="$TOOLCHAIN/bin/$TARGET_HOST$API_LEVEL-clang++"
  export LD="$TOOLCHAIN/bin/ld.lld"
  export RANLIB="$TOOLCHAIN/bin/llvm-ranlib"
  export STRIP="$TOOLCHAIN/bin/llvm-strip"



  # 配置，编译，安装
  PREFIX="$(pwd)/$OUTPUT_DIR"
  ./configure --host=$TARGET_HOST --prefix="$PREFIX" \
    --disable-tcl \
    --enable-static=yes \
    --enable-shared=yes \
    --disable-readline \
    --disable-dynamic-extensions \
    CFLAGS="-DSQLITE_OMIT_LOAD_EXTENSION -DSQLITE_OMIT_PROGRESS_CALLBACK -Os -g0 -flto" \
    LDFLAGS="-Wl,-s"  # -s 选项告诉链接器剥离符号

  make clean
  make -j8
  make install

  "$STRIP" --strip-unneeded "$PREFIX/lib/libsqlite3.so"


done

echo "NDK compilation finished."