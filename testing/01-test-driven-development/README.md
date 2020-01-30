# Testing 01 | Test Driven Development

In our first lesson we are going to write a function that calculates elements of the Fibonacci sequence.

## Focus

- Test Driven Development
- Mocha / ChaiJS
- Jest

## Fibonacci numbers

In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and
characterized by the fact that every number after the first two is the sum of the two preceding ones:

`1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …`

Often, especially in modern usage, the sequence is extended by one more initial term:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …`

By definition, the first two numbers in the Fibonacci sequence are either 1 and 1, or 0 and 1, depending on the chosen
starting point of the sequence, and each subsequent number is the sum of the previous two.

### Definition for this lesson

- General rule: `f(n) = f(n-1) + f(n-2)`
- Seed values: `f(0) = 0, f(1) = 1`
- Negative index: Either return `undefined` or throw an exception. Please note that there is a definition for negative indices: https://en.wikipedia.org/wiki/Fibonacci_number#Negafibonacci

### Relation to the golden ratio

The quotient of two consecutive Fibonacci numbers is striving towards the golden ratio (~1.618…).

Examples:

- f(5) / f(4) = 5 / 3 = 1.666666667
- f(7) / f(6) = 13 / 8 = 1.625
- f(10) / f(9) = 55 / 34 = 1.617647059

## Instructions

<details>
    <summary>Which scenarios can we cover with test?</summary>
    <p>
        <ul>
            <li>Ensure that the seed values 0, 1 and 2 are resulting in the right values</li>
            <li>Ensure that a negative input value is returning undefined or throws an exception</li>
            <li>Ensure that some random input numbers are returning the right result</li>
            <li>Ensure that the quotient of two consecutive Fibonacci numbers is close to the golden ratio</li>
        </ul>
    </p>
</details>

<details>
    <summary>Write the tests first following the TDD approach!</summary>
<p>

```javascript

const expect = require("chai").expect;
const fib = require("./src/fibonacci");

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
});
```
</p>
</details>

<details>
    <summary>Follow the Red, Green, Refactor framework!</summary>
    <p>
        <ul>
            <li>When you finished writing your tests and run it for the first time, they should be broken (red).</li>
            <li>Afterwards implement some portions of the code and see how some tests are becoming green.</li>
            <li>Once everything is green, you can change (refactor) the implemention in case you see possible improvements.</li>
        </ul>
    </p>
</details>

<details>
    <summary>Think about possible performance improvements</summary>
    <p>
        <br>
Did you try to calculate <code>fib(100)</code> and realized that it's very slow?
What could you do to fix that?

<ul>
    <li>Introduce some sort of caching layer.</li>
    <li>When you successfully calculated a Fibonacci number, store that information in the cache so that you can reuse it later.</li>
    <li>Before you calculate anything, see if the result is already available in your cache.</li>
    <li>Make sure to always use the cache in every step.</li>
</ul>
    </p>
</details>
