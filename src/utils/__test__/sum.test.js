import { describe, expect, it, test } from "vitest";
import { sum } from "../../sum";

describe("sum", () => {
  it("Should add two number correctly", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 3)).toBe(2);
  });
});
