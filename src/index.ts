/**
 * check if value is null
 * @param {unknown} value
 * @returns {boolean} if value is null, otherwise false
 */
export function isNull(value: unknown): boolean {
	return value === null;
}

/**
 * check if value is undefined
 * @param {unknown} value
 * @returns {boolean} if value is undefined, otherwise false
 */
export function isUndefined(value: unknown): boolean {
	return value === undefined;
}

/**
 * check if value is undefined or null
 * @param {unknown} value
 * @returns {boolean} if value is null or unedefined, otherwise false
 */
export function isNil(value: unknown): boolean {
	return value === null || value === undefined;
}

/**
 * check if value is object
 * @param {unknown} value
 * @returns {boolean} if value is object, otherwise false
 */
export function isObject(value: unknown): boolean {
	return typeof value === "object" && null != value;
}

/**
 * check if value is function
 * @param value
 * @returns {boolean} if value is function, otherwise false
 */
export function isFunction(value: unknown): boolean {
	return typeof value === "function";
}
export const isCallable = isFunction;

// get object prototype string tag
const toTagString = Object.prototype.toString;

/**
 * get object prototype string tag
 * @param value
 * @returns {string}
 */
export function getObjectTag(value: unknown): string {
	return toTagString.call(value);
}

/**
 * check if is node environment
 * @returns {boolean} if is node environment, otherwise false
 */
export function isNode(): boolean {
	return getObjectTag(globalThis) === "[object global]" && isUndefined(window);
}

/**
 * check if is browser environment
 * @returns {boolean} if is browser environment, otherwise false
 */
export function isBrowser(): boolean {
	return window && getObjectTag(window) === "[object Window]";
}
