source scripts/get_arguments.sh

build_type=$( getArguments "build_type" $@ )
env=$( getArguments "env" $@ )
device_udid=$( getArguments "device_udid" $@ )
run_on_device=""
echo "build_ios: $brand - $build_type - $env"
if [ "$device_udid" != "" ]; then
	run_on_device=" --device --udid $device_udid"
fi
echo "Running on device: $run_on_device"
build_config="$(tr '[:lower:]' '[:upper:]' <<< ${build_type:0:1})${build_type:1}"
yarn run build platform_os:ios build_type:$build_type env:$env
yarn run ios:pod
ENVFILE=./.env npx react-native run-ios

echo "build_ios: $build_type - $env"