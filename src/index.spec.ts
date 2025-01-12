import { describe, expect, it } from "vitest";
import {
	chunk,
	formatDate,
	isCallable,
	isFunction,
	isNil,
	isNull,
	isObject,
	isUndefined,
} from "./index";

describe("isNull", () => {
	it("should return true if the value is null", () => {
		expect(isNull(null)).toBe(true);
	});

	it("should return false if the value is not null", () => {
		expect(isNull(undefined)).toBe(false);
	});
});

describe("isUndefined", () => {
	it("should return true if the value is undefined", () => {
		expect(isUndefined(undefined)).toBe(true);
	});

	it("should return false if the value is not undefined", () => {
		expect(isUndefined(null)).toBe(false);
	});
});

describe("isNil", () => {
	it("should return true if the value is null or undefined", () => {
		expect(isNil(null)).toBe(true);
		expect(isNil(undefined)).toBe(true);
	});

	it("should return true if the value is not null or undefined", () => {
		expect(isNil(Number.NaN)).toBe(false);
		expect(isNil(false)).toBe(false);
		expect(isNil(0)).toBe(false);
		expect(isNil("")).toBe(false);
	});
});

describe("isObject", () => {
	it("should return true if the value is an object", () => {
		expect(isObject({})).toBe(true);
		expect(isObject([])).toBe(true);
		expect(isObject(new Date())).toBe(true);
		expect(isObject(/\d/)).toBe(true);
		expect(isObject(new Boolean(false))).toBe(true);
	});

	it("should return false if the value is not an object", () => {
		expect(isObject(null)).toBe(false);
		expect(isObject(undefined)).toBe(false);
		expect(isObject(Number.NaN)).toBe(false);
	});
});

describe("isFunction/isCallable", () => {
	it("should return true if the value is a function", () => {
		const f1 = new Function();
		const f2 = function some_func() {};
		const f3 = () => {};
		const f4 = Number;

		expect(isFunction(f1)).toBe(true);
		expect(isFunction(f2)).toBe(true);
		expect(isCallable(f3)).toBe(true);
		expect(isCallable(f4)).toBe(true);
	});

	it("should return false if the value is not a function", () => {
		expect(isFunction(null)).toBe(false);
		expect(isCallable(undefined)).toBe(false);
	});
});

describe("formatDate", () => {
	it("should format date", () => {
		const date = new Date();
		date.setFullYear(2020);
		date.setMonth(1);
		date.setDate(2);
		date.setHours(3);
		date.setMinutes(4);
		date.setSeconds(5);

		expect(formatDate(date, "{y}-{m}-{d} {h}:{i}:{s}")).toBe("20-2-2 3:4:5");
		expect(formatDate(date, "{y}年{m}月{d}日 {h}:{i}:{s}")).toBe(
			"20年2月2日 3:4:5",
		);

		expect(formatDate(date, "{Y}-{M}-{D} {H}:{I}:{S}")).toBe(
			"2020-02-02 03:04:05",
		);
		expect(formatDate(date, "{Y}年{M}月{D}日 {H}:{I}:{S}")).toBe(
			"2020年02月02日 03:04:05",
		);
	});
});

describe("chunk", () => {
	it("should chunk an array", () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		expect(chunk(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
		expect(chunk(array, 20)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]);
	});

	it("should throw an error when the size is not a positive number", () => {
		// @ts-ignore
		expect(() => chunk([], null)).toThrow();
	});

	it("should throw an error when the first argument is not an array", () => {
		// @ts-ignore
		expect(() => chunk(null)).toThrow();
	});
});
