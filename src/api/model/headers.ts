export interface IHeaders {
    contentType: string;
    version: string;
    date: Date;
    os: string;
    env: string;
}

export class CHeaders implements IHeaders {
    private _contentType!: string;
    private _version!: string;
    private _date!: Date;
    private _os!: string;
    private _env!: string;

    constructor(value: any) {
        const { version = '', os = '', env = '', token = '' } = { ...value };
        this.contentType = 'application/json';
        this.date = new Date();
        this.version = version;
        this.os = os;
        this.env = env;
    }
    get item(): any {
        const { contentType, date, version, os, env } = this;
        return {
            'Content-Type': contentType,
            date,
            version,
            'x-os': os,
            'x-app-env': env,
            Authorization: null,
        };
    }
    set contentType(value: string) {
        this._contentType = value;
    }
    get contentType(): string {
        return this._contentType;
    }

    set version(value: string) {
        this._version = value;
    }
    get version(): string {
        return this._version;
    }

    set date(value: Date) {
        this._date = value;
    }
    get date(): Date {
        return this._date;
    }

    set os(value: string) {
        this._os = value;
    }
    get os(): string {
        return this._os;
    }

    set env(value: string) {
        this._env = value;
    }
    get env(): string {
        return this._env;
    }
}
