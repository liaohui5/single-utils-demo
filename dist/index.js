/**
 * check if value is null
 * @param {unknown} value
 * @returns {boolean} if value is null, otherwise false
 */
export function isNull(value) {
    return value === null;
}
/**
 * check if value is undefined
 * @param {unknown} value
 * @returns {boolean} if value is undefined, otherwise false
 */
export function isUndefined(value) {
    return value === undefined;
}
/**
 * check if value is undefined or null
 * @param {unknown} value
 * @returns {boolean} if value is null or unedefined, otherwise false
 */
export function isNil(value) {
    return value === null || value === undefined;
}
/**
 * check if value is object
 * @param {unknown} value
 * @returns {boolean} if value is object, otherwise false
 */
export function isObject(value) {
    return typeof value === "object" && null != value;
}
