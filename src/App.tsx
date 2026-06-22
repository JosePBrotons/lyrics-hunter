import 'react-native-gesture-handler';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Root from './Root';
const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Root />
        </GestureHandlerRootView>
    );
};

export default App;
