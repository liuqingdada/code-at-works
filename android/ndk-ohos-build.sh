#!/bin/bash

ARCHS=("ohos-arm64-v8a" "ohos-armeabi-v7a" "ohos-x86_64")
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
          ;;
      "ohos-armeabi-v7a")
          TARGET_HOST=armv7-unknown-linux-ohos
          ;;
      "ohos-x86_64")
          TARGET_HOST=x86_64-unknown-linux-ohos
          ;;
      *)
          echo "Unsupported architecture: $arch"
          exit 1
          ;;
  esac


  TOOLCHAIN="$OHOS_NDK_HOME/llvm"
  #SYSROOT=$OHOS_NDK_HOME/sysroot

  export AR="$TOOLCHAIN/bin/llvm-ar"
  export AS="$TOOLCHAIN/bin/llvm-as"
  export CC="$TOOLCHAIN/bin/$TARGET_HOST-clang"
  export CXX="$TOOLCHAIN/bin/$TARGET_HOST-clang++"
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