import { StyleSheet } from 'react-native';
import { theme } from './../../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: COLORS.white,
        borderRadius: 5,
        padding: 16,
        width: '100%',
        marginTop: 15,
    },
    artistLabel: {
        ...FONTS.h4,
        color: COLORS.darkGray,
    },
    songLabel: {
        ...FONTS.h3,
        color: COLORS.darkGray,
    },
    lyricsText: {
        ...FONTS.body4,
        color: COLORS.gray,
    },
});
