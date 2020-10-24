const cleanLyrics = (state: any) => {
    const lyrics = '';
    return { ...state, lyrics };
};

const cleanError = (state: any) => {
    const error = null;
    return { ...state, error }
}

const emptyLyrics = (state: any) => {
    const error = {
        title: 'Something went wrong',
        message: 'No lyrics were fetched at this moment, try again later'
    };
    return { ...state, error };
}
export { cleanLyrics, emptyLyrics, cleanError };
