/**
 * check if value is null
 * @param {never} value
 * @returns {boolean} if value is null, otherwise false
 */
export const isNull = (value: never): boolean => value === null;
