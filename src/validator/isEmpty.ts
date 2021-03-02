import { isString } from './isString'
import { merge } from '../multiuse'

/**
* check if the string has a length of zero.
* @param str string
* @param {{ignore_whitespace?:boolean }} options 
*/
export function isEmpty(str: any, options: { ignore_whitespace?: boolean } = {}) {
    if (!isString(str)) {
        return false
    }
    const default_is_empty_options = {
        ignore_whitespace: false,
    }
    options = merge(options, default_is_empty_options)

    return (options.ignore_whitespace ? str.trim().length : str.length) === 0
}