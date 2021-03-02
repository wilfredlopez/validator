export const isRegex = (value: unknown): value is RegExp => value instanceof RegExp

export function isSameRegex(reg1: RegExp, reg2: RegExp) {
    return reg1.source === reg2.source && reg1.flags === reg2.flags
}