const expect = require("chai").expect;
const sequence = require("./index");
const fibonacci = require("../01-fibonacci/src/fibonacci");

describe("sequence", () => {
  describe("square", () => {
    const square = x => Math.pow(x, 2);

    it("returns just 0 for limit 0", () => {
      expect(sequence(square, 0)).to.deep.equal([0]);
    });

    it("returns the square of all numbers till the limit", () => {
      expect(sequence(square, 5)).to.deep.equal([0, 1, 4, 9, 16, 25]);
    });
  });

  describe("fibonacci", () => {
    it("returns all numbers of the Fibonacci sequence till the provided limit", () => {
      expect(sequence(fibonacci, 5)).to.deep.equal([0, 1, 1, 2, 3, 5]);
    });
  });
});
