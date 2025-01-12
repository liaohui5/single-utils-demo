/**
 * check if value is null
 * @param {unknown} value
 * @returns {boolean} if value is null, otherwise false
 */
export const isNull = (value: unknown): boolean => value === null;

/**
 * check if value is undefined or null
 * @param {unknown} value
 * @returns {boolean} if value is null or unedefined, otherwise false
 */
export const isNil = (value: unknown): boolean => {
	return value === null || value === undefined;
};
