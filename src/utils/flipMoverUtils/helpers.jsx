export const find = (predicate) => (boolean, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, arr)) {
            return arr[i]
        }
    }

    return undefined
}

export const every = (predicate) => (boolean, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i], i, arr)) {
            return false
        }
    }
    return true
}

export let isArray = (arr) => {
    isArray = Array.isArray || ((arg) => Object.prototype.toString.call(arg) === '[object Array]')
    return isArray(arr)
}

export const isElementAnSFC = (element) => {
    const isNativeDOMElement = typeof element.type === 'string'

    if (isNativeDOMElement) {
        return false
    }

    return typeof element.type === 'function' && !element.type.prototype.isReactComponent
}

export function omit(obj, attrs = []) {
    const result = {}
    Object.keys(obj).forEach((key) => {
        if (attrs.indexOf(key) === -1) {
            result[key] = obj[key]
        }
    })
    return result
}

export function arraysEqual(a, b) {
    const sameObject = a === b
    if (sameObject) {
        return true
    }

    const notBothArrays = !isArray(a) || !isArray(b)
    const differentLengths = a.length !== b.length

    if (notBothArrays || differentLengths) {
        return false
    }

    return every((element, index) => element === b[index], a)
}

function memoizeString(fn) {
    const cache = {}

    return (str) => {
        if (!cache[str]) {
            cache[str] = fn(str)
        }
        return cache[str]
    }
}

export const hyphenate = memoizeString((str) => str.replace(/([A-Z])/g, '-$1').toLowerCase())
