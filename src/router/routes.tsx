import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../components/detail';
import History from '../components/history';
import Search from '../components/search';
import { IStack, ITab } from './interface';

const renderStack = (stacks: Array<IStack>, Stack: any) => stacks.map((stack: IStack, index: number) => (
    <Stack.Screen key={`stack-${index}`} {...stack} />
));

const createStack = (stacks: Array<IStack>) => {
    const Stack = createStackNavigator();
    return () => <Stack.Navigator>
        {renderStack(stacks, Stack)}
    </Stack.Navigator>
}

export const searchStack: Array<IStack> = [
    {
        name: 'Search',
        component: Search,
        options: { title: 'Search' }
    },
    {
        name: 'Detail',
        component: Detail,
        options: { title: 'Detail' }
    }
]

export const historyStack: Array<IStack> = [
    {
        name: 'History',
        component: History,
        options: { title: 'History' }
    },
    {
        name: 'Detail',
        component: Detail,
        options: { title: 'Detail' }
    }
]

export const tabs: Array<ITab> = [
    {
        name: 'Search',
        component: createStack(searchStack),
        options: { title: 'Search' }
    },
    {
        name: 'History',
        component: createStack(historyStack),
        options: { title: 'History' }
    }
];