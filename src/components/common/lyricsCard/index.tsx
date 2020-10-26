import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { firstString } from './../../../utils';
import { ILyricsCardProps } from './interface';
import { styles } from './styles';

const LyricsCard = (props: ILyricsCardProps) => {
    const { artist = '', song = '', lyrics = '', onPress = () => null } = {
        ...props,
    };
    const regExp: RegExp = /\r?\n|\r/g;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.songLabel}>{song}</Text>
            <Text style={styles.artistLabel}>{artist}</Text>
            <Text
                style={styles.lyricsText}
                numberOfLines={1}
                ellipsizeMode={'tail'}>{`${firstString(
                lyrics.replace(regExp, ' '),
                40
            )}...`}</Text>
        </TouchableOpacity>
    );
};

export default LyricsCard;
