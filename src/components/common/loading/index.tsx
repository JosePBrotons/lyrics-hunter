import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { styles } from './styles';

const ANIMATION_PATH: string = './../../../assets/json/loading.json';

const Loading = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require(ANIMATION_PATH)}
                autoPlay={true}
                loop={true}
            />
        </View>
    );
};

export default Loading;
