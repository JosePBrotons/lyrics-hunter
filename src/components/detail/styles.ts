import { StyleSheet } from 'react-native';
import { theme } from './../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.lightGray,
    },
    lyricsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    title: {
        ...FONTS.h2,
        textAlign: 'center',
        color: COLORS.darkGray,
        marginVertical: 20,
    },
    lyrics: {
        ...FONTS.body3,
        color: COLORS.gray,
        textAlign: 'center',
    },
});
