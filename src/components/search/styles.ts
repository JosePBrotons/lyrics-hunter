import { StyleSheet } from 'react-native';
import { theme } from './../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: COLORS.lightGray,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
    },
    formContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    latestSearchedContainer: {
        flex: 3,
        alignItems: 'center',
    },
    latestSearchedTitle: {
        ...FONTS.h2,
        alignSelf: 'flex-start',
        color: COLORS.darkGray,
    },
});
