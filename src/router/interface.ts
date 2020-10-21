export interface IOptions {
    title: string;
}

export interface IStack {
    name: string;
    component: (props: any) => JSX.Element;
    options?: IOptions;
}

export interface ITab {
    name: string;
    component: any
    options?: IOptions;
}