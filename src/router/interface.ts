import { RouteProp } from '@react-navigation/native';

export interface IOptions {
    title: string;
    headerTitleStyle?: IHeaderTitleStyle;
}

export interface IStack {
    name: string;
    component: (props: any) => JSX.Element;
    options?: IOptions;
}

export interface ITabIconProps {
    focused: boolean;
    color: string;
    size: number;
}

export interface IHeaderTitleStyle {
    fontFamily: string;
}

export interface IScreenOptions {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: any;
}

export interface ITab {
    name: string;
    component: any
    options?: IOptions;
}