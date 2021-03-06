import React, { useEffect } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from 'rnative-splash';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { tabs } from './routes';
import { IScreenOptions, ITab, ITabIconProps } from './interface';
import { COLORS } from './../constants';
import { FONTS } from './../constants/theme';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    activeTintColor: COLORS.blue,
    inactiveTintColor: COLORS.gray,
    keyboardHidesTabBar: true,
    labelStyle: { fontFamily: FONTS.h3.fontFamily },
};

const renderTabs = tabs.map((tab: ITab, index: number) => (
    <Tab.Screen key={`tab-${index}`} {...tab} />
));

const getTabIconByRouteName = (routeName: string) => {
    const tabIconByRouteName: { [key: string]: string } = {
        Search: 'search',
        History: 'history',
        DEFAULT: 'info-circle',
    };
    const route: string = routeName ?? 'DEFAULT';
    return tabIconByRouteName[route];
};

const closeSplashScreen = () => {
    Splash.close({
        animationType: Splash.animationType.scale,
        duration: 950,
        delay: 600,
    });
};

const renderTabIcon = (
    route: RouteProp<Record<string, object | undefined>, string>
) => {
    return (props: ITabIconProps) => {
        const { size = 10, color = 'tomato' } = { ...props };
        const { name = '' } = { ...route };
        const iconName = getTabIconByRouteName(name);
        return <FontAwesome name={iconName} size={size} color={color} />;
    };
};

const getScreenOptions = (screenOptions: IScreenOptions) => {
    const { route } = { ...screenOptions };
    return { tabBarIcon: renderTabIcon(route) };
};

const Router = () => {
    useEffect(() => {
        closeSplashScreen();
    }, []);
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={getScreenOptions}
                tabBarOptions={tabBarOptions}>
                {renderTabs}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Router;
