#!/bin/bash

rm -rf build

export ANDROID_NDK_HOME=$ANDROID_HOME/ndk-bundle

# 确定目标ABI和API级别
ABI=armeabi-v7a
API_LEVEL=21

cmake -DCMAKE_TOOLCHAIN_FILE=$ANDROID_NDK_HOME/build/cmake/android.toolchain.cmake \
      -DANDROID_ABI=$ABI \
      -DANDROID_PLATFORM=android-$API_LEVEL \
      -DCMAKE_BUILD_TYPE=Release \
      -DBUILD_SHARED_LIBS=ON \
      -DFIPS=1 \
      -GNinja -B build

ninja -C build

echo "buld android $ABI finish."
