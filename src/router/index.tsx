import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabs } from './routes';
import { ITab } from './interface';

const Tab = createBottomTabNavigator();

const renderTabs = tabs.map((tab: ITab, index: number) => (
    <Tab.Screen key={`tab-${index}`} {...tab} />
));

const Router = () => {
    return (<NavigationContainer>
        <Tab.Navigator>
            {renderTabs}
        </Tab.Navigator>
    </NavigationContainer>);
};

export default Router;