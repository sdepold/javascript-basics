const { get, getSequence } = require("../src/fibonacci");

test("should throw an exception if fib is called with less than 0", () => {
  expect(() => get(-1)).toThrow();
});

const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21];

[0, 1, 1, 2, 3, 5, 8].forEach((expectation, index) => {
  test(`should return ${expectation} for get(${index})`, () => {
    expect(get(index)).toEqual(expectation);
  });
});

test("returns the expected array for n=8", () => {
  expect(getSequence(8)).toEqual(expectedSequence);
});

test("should strive towards the golden ration", () => {
  expect(get(8) / get(7)).toBeCloseTo(1.61803);
});

test("should be quick", () => {
  const start = +new Date();
  const result = get(100);

  expect(+new Date() - start).toBeLessThan(2);
  expect(result).toEqual(354224848179262000000);
});
