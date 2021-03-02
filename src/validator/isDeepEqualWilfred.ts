import { arraysEqual } from '../multiuse'
import { isRegex, isSameRegex } from './isRegex'
import { isPrimitive } from './isPrimitive'
import { isArray } from './isArray'
import { isObject } from './isObject'


export function isDeepEqualWilfred(val1: any, val2: any): boolean {
    if (isRegex(val1) && isRegex(val2)) {
        return isSameRegex(val1, val2)
    }
    //JSON Doenst work for deep Regex
    // return JSON.stringify(val1) === JSON.stringify(val2)
    //   if regular equality.
    if (val1 === val2) {
        return true
    }

    if (isPrimitive(val1) && isPrimitive(val2)) {
        return val1 === val2
    }

    if (isArray(val1) && isArray(val2)) {
        return arraysEqual(val1, val2)
    }

    //handle object
    if (isObject(val1) && isObject(val2)) {
        const keys1 = Object.keys(val1)
        const keys2 = Object.keys(val2)
        if (keys1.length !== keys2.length) {
            return false
        }
        if (keys1.length === 0) {
            // console.log('both are empty')
            return true
        }
        //handle object equality
        let equal: boolean = true
        while (keys1.length && keys2.length && equal) {
            let k1 = keys1.pop()
            let k2 = keys2.pop()
            equal = isDeepEqualWilfred(
                val1[k1 as keyof object],
                val2[k2 as keyof object],
            )
            if (!equal) {
                return false
            }
        }
        return equal
    }

    return false
}

