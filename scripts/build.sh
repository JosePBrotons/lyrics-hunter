source scripts/get_arguments.sh

platform_os=$( getArguments "platform_os" $@ )
build_type=$( getArguments "build_type" $@ )
bundle_type=$( getArguments "bundle_type" $@ )
env=$( getArguments "env" $@ )

echo "build.sh: $platform_os - $brand - $build_type - $bundle_type - $env"

source=env/.env_${build_type}_${env}
destination=.env
cp -f $source $destination

echo "build.sh: $platform_os - $brand - $build_type - $bundle_type - $env - finished successfully"
