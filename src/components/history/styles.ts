import { StyleSheet } from 'react-native';
import { theme } from './../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.lightGray,
        paddingHorizontal: 16,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.lightGray,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
        marginBottom: 15,
    },
    emptyText: {
        ...FONTS.h2,
        color: COLORS.darkGray,
        textAlign: 'center',
    },
});
