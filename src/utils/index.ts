import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        throw e;
    }
};

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return JSON.parse(value) ?? null;
    } catch (e) {
        throw e;
    }
};

export const isSafeDataType = (data: any): boolean => {
    switch (Object.prototype.toString.call(data)) {
        case '[object Null]':
            return false;
        case '[object Undefined]':
            return false;
        default:
            return true;
    }
};

export const isString = (value: any) =>
    Object.prototype.toString.call(value) === '[object String]';

export const isBlank = (value: string = '') => {
    if (isString(value)) {
        const delEmptySpaces = value.replace(/\s/g, '');
        return delEmptySpaces.length === 0;
    }
    return false;
};
export const firstString = (value: string = '', quantity: number) => {
    return isString(value) ? value.substring(0, quantity) : '';
};
export const lastString = (value: string, quantity: number) => {
    return isString(value)
        ? value.substring(value.length, value.length - quantity)
        : '';
};

export const isArrayLength = (
    arr: Array<any> = [],
    condition: string = 'equal',
    value: number = 0
): boolean => {
    if (Array.isArray(arr)) {
        const arrCond = {
            greater: (arrToCheck: Array<any>, arrValue: number) =>
                arrToCheck.length > arrValue,
            lower: (arrToCheck: Array<any>, arrValue: number) =>
                arrToCheck.length < arrValue,
            equal: (arrToCheck: Array<any>, arrValue: number) =>
                arrToCheck.length === arrValue,
            lowOrEq: (arrToCheck: Array<any>, arrValue: number) =>
                arrToCheck.length <= arrValue,
            greatOrEq: (arrToCheck: Array<any>, arrValue: number) =>
                arrToCheck.length >= arrValue,
        };
        return !!arrCond[condition as keyof typeof arrCond]
            ? arrCond[condition as keyof typeof arrCond](arr, value)
            : false;
    }
    return false;
};
