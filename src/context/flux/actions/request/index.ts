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
        title: 'Something went wrong',
        message: 'No lyrics were fetched at this moment, try again later'
    };
    return { ...state, lyrics, loading, error: isBlank(lyrics) ? error : null };
};

const lyricsFailure = (state: any, payload: any) => {
    const error = payload;
    const loading = false;
    return { ...state, error, loading };
};

export { fetchData, lyricsFailure, lyricsSuccess };
