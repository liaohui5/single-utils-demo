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

/**
 * 根据模板格式化字符串
 * @param time - 要格式化的日期对象
 * @param template - 格式化模板
 * @returns 返回格式化后的时间字符串
 */
export function formatDate(date: Date, template: string): string {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const dates = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const day = date.getDay() + 1;

	const fillZero = (value: number): string => {
		return value < 10 ? `0${value}` : String(value);
	};

	const templateMap = {
		"{y}": year.toString().slice(-2),
		"{Y}": year,
		"{m}": month,
		"{M}": fillZero(month),
		"{d}": dates,
		"{D}": fillZero(dates),
		"{h}": hours,
		"{H}": fillZero(hours),
		"{i}": minutes,
		"{I}": fillZero(minutes),
		"{s}": seconds,
		"{S}": fillZero(seconds),
		"{w}": day,
	};

	let formated = template;
	const keys = Object.keys(templateMap) as Array<keyof typeof templateMap>;
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = String(templateMap[key]);
		formated = formated.replace(key, value);
	}
	return formated;
}

/**
 * Paging Arrays
 * @param {T[]} array - The array to be chunked.
 * @param {number} [size=1] - The size of each chunk.
 * @return {T[][]} The chunked array.
 * @throws {TypeError}
 */
export function chunk<T>(array: T[], size: number = 1): number | T[][] {
	if (!Array.isArray(array)) {
		throw new TypeError("the paramter must be an array");
	}
	if (typeof size !== "number" || size <= 0) {
		throw new TypeError("chunk size must be a positive number");
	}

	const chunkSize = Math.max(Math.floor(size), 1);
	const len = array.length;
	if (len <= chunkSize) {
		return [array];
	}

	const pages = Math.ceil(len / chunkSize);
	const items: T[][] = new Array(pages);
	for (let i = 0; i < pages; i++) {
		items[i] = array.slice(i * chunkSize, (i + 1) * chunkSize);
	}
	return items;
}
