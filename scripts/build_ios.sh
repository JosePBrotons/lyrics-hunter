#!/bin/bash
set -euo pipefail

source scripts/get_arguments.sh

# React Native 0.85 requires the New Architecture (reanimated v4 enforces it).
# Force it on so a stale RCT_NEW_ARCH_ENABLED=0 in the shell can't break pod install.
export RCT_NEW_ARCH_ENABLED=1

build_type=$( getArguments "build_type" "$@" )
env=$( getArguments "env" "$@" )
device_udid=$( getArguments "device_udid" "$@" )

# Capitalize build_type for the Xcode scheme configuration (debug -> Debug).
build_config="$(tr '[:lower:]' '[:upper:]' <<< "${build_type:0:1}")${build_type:1}"

run_on_device=()
if [ "$device_udid" != "" ]; then
	run_on_device=(--udid "$device_udid")
fi

echo "build_ios: $build_type - $env"

pnpm run build platform_os:ios build_type:"$build_type" env:"$env"
pnpm run ios:pod
ENVFILE=./.env pnpm react-native run-ios --mode "$build_config" "${run_on_device[@]}"

echo "build_ios: $build_type - $env - finished successfully"
