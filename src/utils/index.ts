export const isSafeDataType = (data: any): boolean => {
    switch (Object.prototype.toString.call(data)) {
        case '[object Null]':
            return false
        case '[object Undefined]':
            return false
        default:
            return true
    }
}

export const isString = (value: any) => Object.prototype.toString.call(value) === '[object String]'

export const isBlank = (value: string = '') => {
    if (isString(value)) {
        const delEmptySpaces = value.replace(/\s/g, '')
        return delEmptySpaces.length === 0
    }
    return false
}