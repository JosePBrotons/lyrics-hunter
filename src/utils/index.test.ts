import { isString, isBlank, isSafeDataType } from '.';

describe('Suite test to isString() function', () => {
    test('Check if an object is a string', () => {
        const a = { foo: 'bar' }
        const expected = false
        expect(isString(a)).toEqual(expected)
    })
    test('Check if an array is a string', () => {
        const a = [1, 2, 3]
        const expected = false
        expect(isString(a)).toEqual(expected)
    })
    test('Check if a string is a string', () => {
        const a = 'Hello world'
        const expected = true
        expect(isString(a)).toEqual(expected)
    })
    test('Check if an undefined is a number', () => {
        const a = undefined
        const expected = false
        expect(isString(a)).toEqual(expected)
    })
    test('Check if a null value is a number', () => {
        const a = null
        const expected = false
        expect(isString(a)).toEqual(expected)
    })
})

describe('Suite test utilities for isBlank() function', () => {
    test('Check if a string is empty', () => {
        const strToCheck = 'Hello world'
        const expected = false
        expect(isBlank(strToCheck)).toEqual(expected)
    })
    test('Check if a string filled with empty spaces is empty', () => {
        const strToCheck = '         '
        const expected = true
        expect(isBlank(strToCheck)).toEqual(expected)
    })
    test('Check if a empty string is empty', () => {
        const strToCheck = ''
        const expected = true
        expect(isBlank(strToCheck)).toEqual(expected)
    })
    test('Check if an undefined value is an empty string', () => {
        const strToCheck = undefined
        const expected = true
        expect(isBlank(strToCheck)).toEqual(expected)
    })
    test('Check if a null value is an empty string', () => {
        const strToCheck = null
        const expected = false
        expect(isBlank(strToCheck)).toEqual(expected)
    })
})

describe('Suite test for isSafeDataType() function', () => {
    test('Check if a number value is a safe data type', () => {
        const numToCheck = 12
        const expected = true
        expect(isSafeDataType(numToCheck)).toEqual(expected)
    })
    test('Check if an object is a safe data type', () => {
        const objToCheck = { first: 'Almundo', last: 'Almundo' }
        const expected = true
        expect(isSafeDataType(objToCheck)).toEqual(expected)
    })
    test('Check if an array is a safe data type', () => {
        const arrToCheck = [1, 'Almundo']
        const expected = true
        expect(isSafeDataType(arrToCheck)).toEqual(expected)
    })
    test('Check if a string is a safe data type', () => {
        const strToCheck = 'Almundo'
        const expected = true
        expect(isSafeDataType(strToCheck)).toEqual(expected)
    })
    test('Check if a null value is a safe data type', () => {
        const dataToCheck = null
        const expected = false
        expect(isSafeDataType(dataToCheck)).toEqual(expected)
    })
    test('Check if an undefined value is a safe data type', () => {
        const dataToCheck = undefined
        const expected = false
        expect(isSafeDataType(dataToCheck)).toEqual(expected)
    })
})