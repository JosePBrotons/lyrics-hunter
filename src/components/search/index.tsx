import React, { SetStateAction, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { COLORS } from './../../constants';
import { isBlank } from './../../utils';
import Button from './components/button';
import Input from './components/input';
import { styles } from './styles';

const onChangeValues = (setText: React.Dispatch<React.SetStateAction<string>>) => {
    return (text: SetStateAction<string>) => setText(text)
}

const Search = ({ navigation }) => {
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const isDisabled: boolean = isBlank(artist) || isBlank(song)
    return <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
            <Input placeholder={'Artist'} value={artist} placeholderTextColor={COLORS.gray} onChangeText={onChangeValues(setArtist)} iconName={'user'} />
            <Input placeholder={'Song'} value={song} placeholderTextColor={COLORS.gray} onChangeText={onChangeValues(setSong)} iconName={'music'} />
            <Button text={'Search'} disabled={isDisabled} />
        </View>
    </SafeAreaView>
}

export default Search