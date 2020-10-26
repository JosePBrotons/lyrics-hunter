import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import I18n from 'i18n-js';
import Detail from '../components/detail';
import History from '../components/history';
import Search from '../components/search';
import { IStack, ITab } from './interface';
import { FONTS } from '../constants/theme';
import { setI18nConfig } from '../i18n';

const headerTitleStyle = FONTS.h2;

setI18nConfig();

const renderStack = (stacks: Array<IStack>, Stack: any) =>
    stacks.map((stack: IStack, index: number) => (
        <Stack.Screen key={`stack-${index}`} {...stack} />
    ));

const createStack = (stacks: Array<IStack>) => {
    const Stack = createStackNavigator();
    return () => (
        <Stack.Navigator screenOptions={{ headerTitleStyle }}>
            {renderStack(stacks, Stack)}
        </Stack.Navigator>
    );
};

export const searchStack: Array<IStack> = [
    {
        name: 'Search',
        component: Search,
        options: { title: I18n.t('global.search') },
    },
    {
        name: 'Detail',
        component: Detail,
        options: { title: I18n.t('global.lyrics') },
    },
];

export const historyStack: Array<IStack> = [
    {
        name: 'History',
        component: History,
        options: { title: I18n.t('global.history') },
    },
    {
        name: 'Detail',
        component: Detail,
        options: { title: I18n.t('global.lyrics') },
    },
];

export const tabs: Array<ITab> = [
    {
        name: 'Search',
        component: createStack(searchStack),
        options: { title: I18n.t('global.search') },
    },
    {
        name: 'History',
        component: createStack(historyStack),
        options: { title: I18n.t('global.history') },
    },
];
