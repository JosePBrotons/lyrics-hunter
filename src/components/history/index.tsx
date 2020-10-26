import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from './styles';
import LyricsCard from './../common/lyricsCard';
import { ILyricsCardProps } from './../common/lyricsCard/interface';
import { SAVED_SEARCHES } from './../../constants';
import { getData, isArrayLength } from './../../utils';
import { IHistoryProps } from './interface';
import { useAppContext } from '../../hooks';

const getRecentSearches = async (
    setHistory: React.Dispatch<React.SetStateAction<never[]>>
) => {
    const recentSearches = await getData(SAVED_SEARCHES);
    if (isArrayLength(recentSearches, 'greater', 0)) {
        setHistory(recentSearches.reverse());
    }
};

const keyExtract = (item: ILyricsCardProps, index: number) => {
    const { artist = '', song = '' } = { ...item };
    return `${song}-by-${artist}-${index}`;
};

const goToScreen = (navigation: any, screenName: string, data: any) => {
    const { navigate = null } = { ...navigation };
    return () => !!navigate && navigate(screenName, data);
};

const renderHistory = (navigation: any) => {
    return ({ item }: { item: ILyricsCardProps }) => {
        const { artist = '', song = '', lyrics = '' } = { ...item };
        return (
            <LyricsCard
                artist={artist}
                song={song}
                lyrics={lyrics}
                onPress={goToScreen(navigation, 'Detail', item)}
            />
        );
    };
};

const renderEmptyState = () => {
    return (
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require('./../../assets/img/lyrics.png')}
            />
            <Text
                style={
                    styles.emptyText
                }>{`There's nothing in your search history, start your first search by tapping the search option`}</Text>
        </View>
    );
};

const History = (props: IHistoryProps) => {
    const { navigation } = { ...props };
    const [history, setHistory] = useState([]);
    const [state] = useAppContext();
    const { lyrics = '' } = { ...state };
    useEffect(() => {
        getRecentSearches(setHistory);
    }, [lyrics]);
    return (
        <>
            {isArrayLength(history, 'greater', 0) ? (
                <FlatList
                    data={history}
                    style={styles.container}
                    renderItem={renderHistory(navigation)}
                    keyExtractor={keyExtract}
                />
            ) : (
                renderEmptyState()
            )}
        </>
    );
};

export default History;
