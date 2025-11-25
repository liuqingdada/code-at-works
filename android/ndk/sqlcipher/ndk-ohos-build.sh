#!/bin/bash

ARCHS=("ohos-arm64-v8a")
export OHOS_NDK_HOME=$OHOS_HOME/native

for arch in "${ARCHS[@]}"; do
  OUTPUT_DIR=../libs/sqlclipher/$arch
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
  export ARCH="${arch}"
  if [ -f "Makefile" ]; then
      make distclean
      make clean
  fi
  # 根据不同架构设置 NDK 工具链和标志
  case $arch in
      "ohos-arm64-v8a")
          LDFLAGS="-Wl,-s,-z,max-page-size=16384"
          TARGET_HOST=aarch64-unknown-linux-ohos
          TARGET_HOST_A=aarch64-linux-android
          ;;
      "ohos-armeabi-v7a")
          TARGET_HOST=armv7-unknown-linux-ohos
          TARGET_HOST_A=armv7a-linux-androideabi
          ;;
      "ohos-x86_64")
          LDFLAGS="-Wl,-s,-z,max-page-size=16384"
          TARGET_HOST=x86_64-unknown-linux-ohos
          TARGET_HOST_A=x86_64-linux-android
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

  export OPENSSL_DIR=$HOME/lib/rust/env/$arch/openssl
  export OPENSSL_LIB_DIR=$OPENSSL_DIR/lib
  export OPENSSL_INCLUDE_DIR=$OPENSSL_DIR/include

  CFLAGS="-DSQLITE_HAS_CODEC \
      -DSQLITE_THREADSAFE=1 \
      -DSQLITE_EXTRA_INIT=sqlcipher_extra_init \
      -DSQLITE_EXTRA_SHUTDOWN=sqlcipher_extra_shutdown \
      -DSQLITE_NOHAVE_SYSTEM \
      -I$OPENSSL_INCLUDE_DIR"
  # 配置，编译，安装
  PREFIX="$(pwd)/$OUTPUT_DIR"
  LDFLAGS="$LDFLAGS -L$OPENSSL_LIB_DIR -lcrypto -lm -ldl -lpthread"
  ./configure --host=$TARGET_HOST_A --prefix="$PREFIX" \
    --with-tempstore=yes \
    CFLAGS="$CFLAGS" \
    LDFLAGS="$LDFLAGS"

  make -j8
  make install

  "$STRIP" --strip-unneeded "$PREFIX/lib/libsqlite3.so"


done

echo "NDK compilation finished."