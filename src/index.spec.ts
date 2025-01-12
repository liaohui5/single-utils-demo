import { describe, expect, it } from "vitest";
import { isNil, isNull, isUndefined } from "./index";

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
