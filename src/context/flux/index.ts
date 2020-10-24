import { cleanError, cleanLyrics, emptyLyrics } from './actions/behavior';
import { fetchData, lyricsFailure, lyricsSuccess } from './actions/request';
import { CLEAN_ERROR, CLEAN_LYRICS, EMPTY_LYRICS_ERROR } from './types/behavior';
import { FETCHING_DATA, FETCH_LYRICS_FAILURE, FETCH_LYRICS_SUCCESS } from './types/request';

const reducers: any = {
    [FETCHING_DATA]: (state: any, payload: any) => fetchData(state, payload),
    [FETCH_LYRICS_FAILURE]: (state: any, payload: any) =>
        lyricsFailure(state, payload),
    [FETCH_LYRICS_SUCCESS]: (state: any, payload: any) =>
        lyricsSuccess(state, payload),
    [CLEAN_LYRICS]: (state: any) => cleanLyrics(state),
    [CLEAN_ERROR]: (state: any) => cleanError(state),
    [EMPTY_LYRICS_ERROR]: (state: any) => emptyLyrics(state),
    DEFAULT: (state: any) => state,
};
export default function reducer(state: any, action: any) {
    const { type = 'DEFAULT', payload = null } = { ...action };
    return type ? reducers[type](state, payload) : reducers.DEFAULT(state);
}
