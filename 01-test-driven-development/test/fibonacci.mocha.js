const expect = require("chai").expect;
const fib = require("../src/fibonacci");

describe("fib", () => {
  describe("boundaries", () => {
    it("should throw an exception if fib is called with less than 0", () => {
      expect(() => fib(-1)).to.throw();
    });
  });

  [0, 1, 1, 2, 3, 5, 8, 13, 21].forEach((expectation, index) => {
    it(`should return ${expectation} for fib(${index})`, () => {
      expect(fib(index)).to.equal(expectation);
    });
  });

  context("fibonacci quotient", () => {
    it("should strive towards the golden ratio", () => {
      expect(fib(8) / fib(7)).to.be.closeTo(1.61803, 0.1);
    });
  });

  it("should be quick", () => {
    const start = +new Date();
    const result = fib(100);

    expect(+new Date() - start).to.be.lessThan(2);
    expect(result).to.equal(354224848179262000000);
  });
});
