import React, { SetStateAction, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { COLORS, SAVED_SEARCHES } from './../../constants';
import { getData, isArrayLength, isBlank, storeData } from './../../utils';
import Button from './components/button';
import Input from './components/input';
import { styles } from './styles';
import LyricsCard from './components/lyricsCard';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { FETCH_LYRICS } from './api';
import { useAppContext } from './../../hooks';
import Loading from '../common/loading';
import { CLEAN_ERROR, CLEAN_LYRICS } from '../../context/flux/types/behavior';
import Modal from '../common/modal';
import { ILatestSearch, ISearchProps } from './interface';

const DETAIL_SCREEN: string = 'Detail';

const onChangeValues = (setText: React.Dispatch<React.SetStateAction<string>>) => {
    return (text: SetStateAction<string>) => setText(text)
}

const onTapSearch = (dispatch: React.Dispatch<any>, artist: string, song: string) => {
    return async () => await dispatch({ type: FETCHING_DATA, payload: { request: FETCH_LYRICS({ artist, song }), dispatch } });
}

const getRecentSearches = async (setLatestSearch: React.Dispatch<React.SetStateAction<null>>) => {
    const recentSearches = await getData(SAVED_SEARCHES);
    if (isArrayLength(recentSearches, 'greater', 0)) {
        const latestSearch = [...recentSearches].pop()
        setLatestSearch(latestSearch);
    }
}

const goToDetail = async (artist: string, song: string, lyrics: string, navigation: any, setLatestSearch: React.Dispatch<React.SetStateAction<null>>, dispatch: any) => {
    const recentSearches = await getData(SAVED_SEARCHES);
    if (!!lyrics) {
        const latestSearch: ILatestSearch = { artist, song, lyrics };
        const savedSearch = !!recentSearches ? [...recentSearches, latestSearch] : [latestSearch];
        await storeData(SAVED_SEARCHES, savedSearch);
        setLatestSearch(latestSearch);
        goToScreen(navigation, DETAIL_SCREEN, latestSearch)();
        dispatch({ type: CLEAN_LYRICS })
    }
}

const goToScreen = (navigation: any, screenName: string, data: any) => {
    const { navigate = null } = { ...navigation }
    return () => !!navigate && navigate(screenName, data);
}

const renderLatestSearch = (navigation: any, latestSearch: ILatestSearch | null) => {
    const { artist = '', lyrics = '', song = '' } = { ...latestSearch }
    return (!!lyrics && <View style={styles.latestSearchedContainer}>
        <Text style={styles.latestSearchedTitle}>{'Latest search'}</Text>
        <LyricsCard artist={artist} song={song} lyrics={lyrics}
            onPress={goToScreen(navigation, DETAIL_SCREEN, latestSearch)} />
    </View>)
}

const renderLoading = (loading: boolean) => {
    return loading && <Loading />
}

const renderErrorModal = (error: any, dispatch: any) => {
    const { title = '', message = '' } = { ...error }
    return !!title && <Modal title={title} message={message} onPress={async () => await dispatch({ type: CLEAN_ERROR })} />
}

const renderSearchForm = (song: string, artist: string, setSong: React.Dispatch<React.SetStateAction<string>>,
    setArtist: React.Dispatch<React.SetStateAction<string>>, dispatch: React.Dispatch<any>) => {
    const isDisabled: boolean = isBlank(artist) || isBlank(song)
    return <View style={styles.formContainer}>
        <Input placeholder={'Song'} value={song} placeholderTextColor={COLORS.gray} onChangeText={onChangeValues(setSong)} iconName={'music'} />
        <Input placeholder={'Artist'} value={artist} placeholderTextColor={COLORS.gray} onChangeText={onChangeValues(setArtist)} iconName={'user'} />
        <Button text={'Search'} disabled={isDisabled} onPress={onTapSearch(dispatch, artist, song)} />
    </View>
}

const Search = (props: ISearchProps) => {
    const { navigation = null } = { ...props }
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [latestSearch, setLatestSearch] = useState(null);
    const [state, dispatch] = useAppContext()
    const { loading = false, lyrics = '', error = null } = { ...state }
    useEffect(() => {
        getRecentSearches(setLatestSearch);
    }, []);
    useEffect(() => {
        goToDetail(artist, song, lyrics, navigation, setLatestSearch, dispatch);
    }, [lyrics])
    return <View style={styles.container}>
        {renderErrorModal(error, dispatch)}
        {renderLoading(loading)}
        {renderSearchForm(song, artist, setSong, setArtist, dispatch)}
        {renderLatestSearch(navigation, latestSearch)}
    </View>
}

export default Search