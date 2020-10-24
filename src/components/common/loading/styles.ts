import { StyleSheet } from 'react-native';
import { theme } from './../../../constants';

const { COLORS } = theme;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lighterGray,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100
    }
});