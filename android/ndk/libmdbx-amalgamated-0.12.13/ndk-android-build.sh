ARCHS=("arm64-v8a" "armeabi-v7a")

ANDROID_NDK_HOME=$ANDROID_HOME/ndk-bundle
API_LEVEL=21
TOOLCHAIN="$ANDROID_NDK_HOME/toolchains/llvm/prebuilt/darwin-x86_64"

for arch in "${ARCHS[@]}"; do
  OUTPUT_DIR=../libs/mdbx/android/$arch
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"

  # 配置，编译，安装
  PREFIX="$(pwd)/$OUTPUT_DIR"

  case $arch in
      "arm64-v8a")
          TARGET_HOST=aarch64-linux-android
          ;;
      "armeabi-v7a")
          TARGET_HOST=armv7a-linux-androideabi
          ;;
      *)
          echo "Unsupported architecture: $arch"
          exit 1
          ;;
  esac


  export SO_SUFFIX=so
  export prefix=$OUTPUT_DIR
  export CC="$TOOLCHAIN/bin/$TARGET_HOST$API_LEVEL-clang"
  export CXX="$TOOLCHAIN/bin/$TARGET_HOST$API_LEVEL-clang++"
  export AR="$TOOLCHAIN/bin/llvm-ar"
  export AS="$TOOLCHAIN/bin/llvm-as"
  export LD="$TOOLCHAIN/bin/ld.lld"
  export RANLIB="$TOOLCHAIN/bin/llvm-ranlib"
  export STRIP="$TOOLCHAIN/bin/llvm-strip"


  # make clean
  # make -j8
  # make install
  rm -rf build
  mkdir build

  AND_CMAKE=$ANDROID_HOME/cmake/3.22.1

  $AND_CMAKE/bin/cmake \
    -DCMAKE_TOOLCHAIN_FILE="$ANDROID_NDK_HOME"/build/cmake/android.toolchain.cmake \
    -DANDROID_PLATFORM=android-21 \
    -DANDROID_ABI=$arch \
    -S . \
    -B build
  $AND_CMAKE/bin/cmake --build build
  $AND_CMAKE/bin/cmake --install build --prefix=$OUTPUT_DIR

done
