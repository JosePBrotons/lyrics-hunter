import { Platform } from 'react-native';
import { CHeaders } from './model/headers';
import Config from 'react-native-config';

export const getPromise = async ({ payload }: any) => {
    const { request = {} } = { ...payload };
    const { url: payload_url = '', method = '', body = null } = { ...request };
    const headers: any = new CHeaders({
        os: Platform.OS,
        env: Config.APP_ENV,
        version: `Android: ${Config.ANDROID_VERSION_NAME} - iOS: ${Config.IOS_VERSION_NAME}`,
    }).item;
    const basePath = Config.BASE_PATH_SERVICE;
    const url = `${basePath}${payload_url}`;
    return new Promise(async (resolve, reject) => {
        try {
            const response: any = await fetch(url, {
                method,
                body,
                headers,
            });
            const data: any = await response.json();
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
};
