const fib = require("../src/fibonacci");

test("should throw an exception if fib is called with less than 0", () => {
  expect(() => fib(-1)).toThrow();
});

[0, 1, 1, 2, 3, 5, 8, 13, 21].forEach((expectation, index) => {
  test(`should return ${expectation} for fib(${index})`, () => {
    expect(fib(index)).toEqual(expectation);
  });
});

test("should strive towards the golden ration", () => {
  expect(fib(8) / fib(7)).toBeCloseTo(1.61803);
});

test("should be quick", () => {
  const start = +new Date();
  const result = fib(100);

  expect(+new Date() - start).toBeLessThan(2);
  expect(result).toEqual(354224848179262000000);
});
