ARCHS=arm64-v8a
TOOLCHAIN="$OH_NDK_TOOLCHAIN"
OUTPUT_DIR=../libs/mdbx/ohos/$ARCHS
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

# 配置，编译，安装
PREFIX="$(pwd)/$OUTPUT_DIR"
TARGET_HOST=aarch64-unknown-linux-ohos

export SO_SUFFIX=so
export prefix=$OUTPUT_DIR
export CC="$TOOLCHAIN/bin/$TARGET_HOST-clang"
export CXX="$TOOLCHAIN/bin/$TARGET_HOST-clang++"
export AR="$TOOLCHAIN/bin/llvm-ar"
export AS="$TOOLCHAIN/bin/llvm-as"
export LD="$TOOLCHAIN/bin/ld.lld"
export RANLIB="$TOOLCHAIN/bin/llvm-ranlib"
export STRIP="$TOOLCHAIN/bin/llvm-strip"


rm -rf build
mkdir build

OHOS_CMAKE=$OHOS_NDK_HOME/build-tools/cmake
"$OHOS_CMAKE"/bin/cmake -DCMAKE_TOOLCHAIN_FILE="$OHOS_NDK_HOME"/build/cmake/ohos.toolchain.cmake \
	-DMDBX_LOCKING=5 \
	-S . \
	-B build

cmake --build build
cmake --install build --prefix=$OUTPUT_DIR