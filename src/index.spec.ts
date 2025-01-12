import { describe, expect, it } from "vitest";
import { isNull } from "./index";

describe("isNull", () => {
	it("should return true if the value is null", () => {
		expect(isNull(null)).toBe(true);
	});

	it("should return false if the value is not null", () => {
		expect(isNull(undefined)).toBe(false);
	});
});
