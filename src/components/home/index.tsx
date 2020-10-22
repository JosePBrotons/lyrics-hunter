import React from 'react';
import { TouchableHighlight, SafeAreaView, Text } from 'react-native';

const Home = ({ navigation }) => {
    return <SafeAreaView>
        <TouchableHighlight onPress={() => navigation.navigate('Detail')}>
            <Text>{'Buscar'}</Text>
        </TouchableHighlight>
    </SafeAreaView>
}

export default Home