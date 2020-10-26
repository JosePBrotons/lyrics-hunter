export interface IDetailProps {
    route: IRoute;
    navigation: INavigation;
}

export interface INavigation {
    setOptions: (arg0: IOptions) => void;
}

export interface IRoute {
    params: IRouteParams;
}

export interface IRouteParams {
    artist: string;
    song: string;
    lyrics: string;
}

export interface IOptions {
    title: string;
}
