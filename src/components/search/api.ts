import {
    FETCH_LYRICS_FAILURE,
    FETCH_LYRICS_SUCCESS,
} from '../../context/flux/types/request';
import Config from 'react-native-config';
const basePath = Config.BASE_PATH_SERVICE;

export const FETCH_LYRICS = (payload: any) => {
    const { artist = '', song = '' } = { ...payload };
    return {
        basePath,
        url: `v1/${artist}/${song}`,
        method: 'GET',
        success: FETCH_LYRICS_SUCCESS,
        failure: FETCH_LYRICS_FAILURE,
    };
};
