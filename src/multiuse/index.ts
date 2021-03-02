export function merge<T extends {}>(obj: Partial<T> = {}, defaults: T): T {
    for (const key in defaults) {
        if (typeof obj[key] === "undefined") {
            obj[key] = defaults[key]
        }
    }
    return obj as T
}


export const includes = (arr: any[], val: any) =>
    arr.some((arrVal) => val === arrVal)


export function zip(date: string[], format: string[]) {
    const zippedArr = [],
        len = Math.min(date.length, format.length)

    for (let i = 0; i < len; i++) {
        zippedArr.push([date[i], format[i]])
    }

    return zippedArr
}

export function arraysEqual(a: any[], b: any[]): boolean {
    /******This would do it too*******/
    //   if (!Array.isArray(a) || !Array.isArray(b)) return false;
    //   if (JSON.stringify(a) === JSON.stringify(b)) return true;
    //   else return false;
    /*************/

    /*
            Array-aware equality checker:
            Returns whether arguments a and b are == to each other;
            however if they are equal-lengthed arrays, returns whether their 
            elements are pairwise == to each other recursively under this
            definition.
        */
    if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) {
            // assert same length
            return false
        }
        for (var i = 0; i < a.length; i++) {
            // assert each element equal
            if (!arraysEqual(a[i], b[i])) {
                return false
            }
        }
        return true
    } else {
        return JSON.stringify(a) === JSON.stringify(b) // if not both arrays, should be the same
    }
}