import I18n from 'i18n-js';
const cleanLyrics = (state: any) => {
    const lyrics = '';
    return { ...state, lyrics };
};

const cleanError = (state: any) => {
    const error = null;
    return { ...state, error };
};

const emptyLyrics = (state: any) => {
    const error = {
        title: I18n.t('error.emptyLyrics.title'),
        message: I18n.t('error.emptyLyrics.message'),
    };
    return { ...state, error };
};

export { cleanLyrics, emptyLyrics, cleanError };
