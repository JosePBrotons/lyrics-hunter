#!/bin/bash
set -euo pipefail

source scripts/get_arguments.sh

# React Native 0.85 ships New Architecture only; keep it on for the JS/native build.
export RCT_NEW_ARCH_ENABLED=1

build_type=$( getArguments "build_type" "$@" )
env=$( getArguments "env" "$@" )

echo "build_android: $build_type - $env"

pnpm run android:clean
pnpm run build platform_os:android build_type:"$build_type" env:"$env"
# --variant was removed from the RN CLI; the current flag is --mode.
ENVFILE=./.env pnpm react-native run-android --mode "$build_type"

echo "build_android.sh - finished successfully in $build_type"
