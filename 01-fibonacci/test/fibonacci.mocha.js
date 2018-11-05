const expect = require("chai").expect;
const { get, getSequence } = require("../src/fibonacci");

describe("fib", () => {
  describe("boundaries", () => {
    it("should throw an exception if fib is called with less than 0", () => {
      expect(() => get(-1)).to.throw();
    });
  });

  describe("sequence", () => {
    const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21];

    expectedSequence.forEach((expectation, index) => {
      it(`should return ${expectation} for get(${index})`, () => {
        expect(get(index)).to.equal(expectation);
      });
    });

    describe("getSequence", () => {
      it("returns the expected array for n=8", () => {
        expect(getSequence(8)).to.deep.equal(expectedSequence);
      });
    });
  });

  context("fibonacci quotient", () => {
    it("should strive towards the golden ratio", () => {
      expect(get(8) / get(7)).to.be.closeTo(1.61803, 0.1);
    });
  });

  it("should be quick", () => {
    const start = +new Date();
    const result = get(100);

    expect(+new Date() - start).to.be.lessThan(2);
    expect(result).to.equal(354224848179262000000);
  });
});
