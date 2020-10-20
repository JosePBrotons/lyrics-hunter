
source scripts/get_arguments.sh

build_type=$( getArguments "build_type" $@ )
env=$( getArguments "env" $@ )

echo "build_android: $build_type - $env"

yarn run android:clean
yarn run build platform_os:android build_type:$build_type env:$env
ENVFILE=./.env npx react-native run-android --variant=$build_type

echo "build_android.sh - finished successfully in $build_type"
