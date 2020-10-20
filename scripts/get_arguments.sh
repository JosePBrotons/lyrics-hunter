#!/bin/bash
getArguments () {
    key_value=$1
    for ARGUMENT in "$@"
    do
        KEY=$(echo $ARGUMENT | cut -f1 -d:)
        VALUE=$(echo $ARGUMENT | cut -f2 -d:)
        if [ "$KEY" = "$key_value" ] && [ "$VALUE" != "$key_value" ]
        then
            found_value=$VALUE
        fi

    done
    if [ "$found_value" = "" ]
    then
        case "$key_value" in
                platform_os)              default_value="android" ;;
                env)    default_value="pr" ;;
                build_type)              default_value="release" ;;
                bundle_type)              default_value="aab";;
                *)
        esac
        echo "${default_value}"
    else
        echo "${found_value}"
    fi
}