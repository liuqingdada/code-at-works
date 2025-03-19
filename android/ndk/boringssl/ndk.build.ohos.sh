#!/bin/bash

rm -rf build

ABI=arm64-v8a
OHOS_CMAKE=$OHOS_NDK_HOME/build-tools/cmake

"$OHOS_CMAKE"/bin/cmake -DCMAKE_TOOLCHAIN_FILE="$OHOS_NDK_HOME"/build/cmake/ohos.toolchain.cmake \
      -DOHOS_ARCH="$ABI" \
      -DCMAKE_BUILD_TYPE=Release \
      -DBUILD_SHARED_LIBS=ON \
      -DCMAKE_THREAD_LIBS_INIT="-lpthread" \
      -DTHREADS_PREFER_PTHREAD_FLAG=ON \
      -DCMAKE_C_FLAGS="-Wno-error -Qunused-arguments" \
      -DCMAKE_CXX_FLAGS="-Wno-error -Qunused-arguments" \
      -DFIPS=1 \
      -GNinja -B build

ninja -C build

echo "buld ohos $ABI finish."
