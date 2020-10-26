import React, { useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import I18n from 'i18n-js';
import { styles } from './styles';
import { IDetailProps } from './interface';

const Detail = (props: IDetailProps) => {
    const { route = {}, navigation = null } = { ...props };
    const { params = {} } = { ...route };
    const { artist = '', song = '', lyrics = '' } = { ...params };
    useEffect(() => {
        !!navigation && navigation.setOptions({ title: `${song}` });
    }, []);
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.lyricsContainer}>
                <Text style={styles.title}>{`${I18n.t(
                    'lyricsDetail.artist'
                )}: ${artist}`}</Text>
                <Text style={styles.lyrics}>{lyrics}</Text>
            </View>
        </ScrollView>
    );
};

export default Detail;
