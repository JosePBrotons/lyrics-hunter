import React, { SetStateAction, useEffect, useState } from 'react';
import { Keyboard, ScrollView, Text, View } from 'react-native';
import I18n from 'i18n-js';
import { COLORS, SAVED_SEARCHES } from './../../constants';
import { getData, isArrayLength, isBlank, storeData } from './../../utils';
import Button from './components/button';
import Input from './components/input';
import { styles } from './styles';
import LyricsCard from './../common/lyricsCard';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { FETCH_LYRICS } from './api';
import { useAppContext } from './../../hooks';
import Loading from '../common/loading';
import { CLEAN_ERROR, CLEAN_LYRICS } from './../../context/flux/types/behavior';
import Modal from '../common/modal';
import { ILatestSearch, ISearchProps } from './interface';
import { useNetInfo } from '@react-native-community/netinfo';
import ActivityBar from '../common/activityBar';

const DETAIL_SCREEN: string = 'Detail';

const onChangeValues = (
    setText: React.Dispatch<React.SetStateAction<string>>
) => {
    return (text: SetStateAction<string>) => setText(text);
};

const onTapSearch = (
    dispatch: React.Dispatch<any>,
    artist: string,
    song: string
) => {
    return async () => {
        Keyboard.dismiss();
        await dispatch({
            type: FETCHING_DATA,
            payload: { request: FETCH_LYRICS({ artist, song }), dispatch },
        });
    };
};

const getRecentSearches = async (
    setLatestSearch: React.Dispatch<React.SetStateAction<null>>
) => {
    const recentSearches = await getData(SAVED_SEARCHES);
    if (isArrayLength(recentSearches, 'greater', 0)) {
        const latestSearch = [...recentSearches].pop();
        setLatestSearch(latestSearch);
    }
};

const goToDetail = async (
    artist: string,
    song: string,
    lyrics: string,
    navigation: any,
    setLatestSearch: React.Dispatch<React.SetStateAction<null>>,
    dispatch: any
) => {
    const recentSearches = await getData(SAVED_SEARCHES);
    if (!!lyrics) {
        const latestSearch: ILatestSearch = { artist, song, lyrics };
        const savedSearch = !!recentSearches
            ? [...recentSearches, latestSearch]
            : [latestSearch];
        await storeData(SAVED_SEARCHES, savedSearch);
        setLatestSearch(latestSearch);
        goToScreen(navigation, DETAIL_SCREEN, latestSearch)();
        dispatch({ type: CLEAN_LYRICS });
    }
};

const goToScreen = (navigation: any, screenName: string, data: any) => {
    const { navigate = null } = { ...navigation };
    return () => !!navigate && navigate(screenName, data);
};

const cleanForm = (setArtist: React.Dispatch<React.SetStateAction<string>>, setSong: React.Dispatch<React.SetStateAction<string>>) => {
    setArtist('');
    setSong('');
}

const renderLatestSearch = (
    navigation: any,
    latestSearch: ILatestSearch | null
) => {
    const { artist = '', lyrics = '', song = '' } = { ...latestSearch };
    return (
        !!lyrics && (
            <View style={styles.latestSearchedContainer}>
                <Text style={styles.latestSearchedTitle}>
                    {I18n.t('lyricsSearch.latestSearch')}
                </Text>
                <LyricsCard
                    artist={artist}
                    song={song}
                    lyrics={lyrics}
                    onPress={goToScreen(
                        navigation,
                        DETAIL_SCREEN,
                        latestSearch
                    )}
                />
            </View>
        )
    );
};

const renderLoading = (loading: boolean) => {
    return loading && <Loading />;
};

const renderErrorModal = (error: any, dispatch: any) => {
    const { title = '', message = '' } = { ...error };
    return (
        !!title && (
            <Modal
                title={title}
                message={message}
                onPress={async () => await dispatch({ type: CLEAN_ERROR })}
            />
        )
    );
};

const renderSearchForm = (
    song: string,
    artist: string,
    setSong: React.Dispatch<React.SetStateAction<string>>,
    setArtist: React.Dispatch<React.SetStateAction<string>>,
    dispatch: React.Dispatch<any>,
    isConnected: boolean
) => {
    const isDisabled: boolean =
        isBlank(artist) || isBlank(song) || !isConnected;
    return (
        <View style={styles.formContainer}>
            <Input
                placeholder={I18n.t('lyricsSearch.song')}
                value={song}
                placeholderTextColor={COLORS.gray}
                onChangeText={onChangeValues(setSong)}
                iconName={'music'}
            />
            <Input
                placeholder={I18n.t('lyricsSearch.artist')}
                value={artist}
                placeholderTextColor={COLORS.gray}
                onChangeText={onChangeValues(setArtist)}
                iconName={'user'}
            />
            <Button
                text={I18n.t('lyricsSearch.search')}
                disabled={isDisabled}
                onPress={onTapSearch(dispatch, artist, song)}
            />
        </View>
    );
};

const renderActivityBar = (isConnected: boolean) => {
    return (
        !isConnected && (
            <ActivityBar
                icon={'wifi-off'}
                text={I18n.t('global.noConnection')}
            />
        )
    );
};

const Search = (props: ISearchProps) => {
    const { navigation = null } = { ...props };
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [latestSearch, setLatestSearch] = useState(null);
    const [state, dispatch] = useAppContext();
    const { loading = false, lyrics = '', error = null } = { ...state };
    const { isConnected = false } = useNetInfo();
    const searchForm = renderSearchForm(
        song,
        artist,
        setSong,
        setArtist,
        dispatch,
        isConnected
    );
    useEffect(() => {
        getRecentSearches(setLatestSearch);
    }, []);
    useEffect(() => {
        goToDetail(artist, song, lyrics, navigation, setLatestSearch, dispatch);
        cleanForm(setArtist, setSong);
    }, [lyrics]);
    return (
        <>
            {renderLoading(loading)}
            {renderErrorModal(error, dispatch)}
            {!!latestSearch ? (
                <ScrollView
                    style={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}>
                    {searchForm}
                    {renderLatestSearch(navigation, latestSearch)}
                </ScrollView>
            ) : (
                    <View style={styles.container}>{searchForm}</View>
                )}
            {renderActivityBar(isConnected)}
        </>
    );
};

export default Search;
