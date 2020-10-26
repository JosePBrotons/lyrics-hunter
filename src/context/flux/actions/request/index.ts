import I18n from 'i18n-js';
import { getPromise } from './../../../../api';
import { isBlank } from './../../../../utils';

const fetchData = (state: any, payload: any) => {
    const { request = {}, dispatch = null } = { ...payload };
    const loading = true;
    getPromise({ payload })
        .then(response =>
            dispatch({ type: request.success, payload: response })
        )
        .catch(err => dispatch({ type: request.failure, payload: err }));
    return { ...state, loading };
};

const lyricsSuccess = (state: any, payload: any) => {
    const { lyrics = null } = { ...payload };
    const loading = false;
    const error = {
        title: I18n.t('error.emptyLyrics.title'),
        message: I18n.t('error.emptyLyrics.message'),
    };
    return { ...state, lyrics, loading, error: isBlank(lyrics) ? error : null };
};

const lyricsFailure = (state: any, payload: any) => {
    const error = payload;
    const loading = false;
    return { ...state, error, loading };
};

export { fetchData, lyricsFailure, lyricsSuccess };
