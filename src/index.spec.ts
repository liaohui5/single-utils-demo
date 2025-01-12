import { describe, expect, it } from "vitest";
import {
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
