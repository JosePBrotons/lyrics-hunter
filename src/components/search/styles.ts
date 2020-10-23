import { StyleSheet } from 'react-native';
import { theme } from './../../constants';

const { COLORS, FONTS } = theme;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.lightGray,
        paddingHorizontal: 16
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    }
});