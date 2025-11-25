#!/bin/bash

ARCHS=("arm64-v8a" "armeabi-v7a")
export ANDROID_NDK_HOME=$ANDROID_HOME/ndk-bundle

for arch in "${ARCHS[@]}"; do
  OUTPUT_DIR=../libs/sqlclipher/$arch
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
  export ARCH="${arch}"
  if [ -f "Makefile" ]; then
      make distclean
      make clean
  fi

  LDFLAGS=""
  # 根据不同架构设置 NDK 工具链和标志
  case $arch in
      "arm64-v8a")
          LDFLAGS="-Wl,-s,-z,max-page-size=16384"
          TARGET_HOST=aarch64-linux-android
          ;;
      "armeabi-v7a")
          TARGET_HOST=armv7a-linux-androideabi
          ;;
      "x86")
          TARGET_HOST=i686-linux-android
          ;;
      "x86_64")
          LDFLAGS="-Wl,-s,-z,max-page-size=16384"
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
  LDFLAGS="$LDFLAGS -L$OPENSSL_LIB_DIR -lcrypto -lm -llog"
  ./configure --host=$TARGET_HOST --prefix="$PREFIX" \
    --with-tempstore=yes \
    CFLAGS="$CFLAGS" \
    LDFLAGS="$LDFLAGS"

  make -j8
  make install

  "$STRIP" --strip-unneeded "$PREFIX/lib/libsqlite3.so"


done

echo "NDK compilation finished."
