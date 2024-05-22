import { expect, it, describe } from "bun:test";
import { getRanking } from ".";

describe("getRanking", () => {
  it("should return the correct ranking, given a known score and difficulty.", () => {
    expect(getRanking(90000, 20)).toBe(36000);
    expect(getRanking(95400, 27)).toBe(69546);
  });

  //getRanking is merely applying a formula, negatives should be not be handled in a special way.
  it("should handle a negative score as if it was expected.", () => {
    expect(getRanking(-90000, 20)).toBe(-36000);
  });
});
