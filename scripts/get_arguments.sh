#!/bin/bash
getArguments () {
    local key_value="$1"
    local found_value=""
    local default_value=""
    local ARGUMENT KEY VALUE
    for ARGUMENT in "$@"
    do
        KEY=$(cut -f1 -d: <<<"$ARGUMENT")
        VALUE=$(cut -f2 -d: <<<"$ARGUMENT")
        if [ "$KEY" = "$key_value" ] && [ "$VALUE" != "$key_value" ]
        then
            found_value="$VALUE"
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