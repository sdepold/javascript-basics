# JavaScript Basic 01 | Fibonacci

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

## Definition for this lesson

General rule: `f(n) = f(n-1) + f(n-2)`
Seed values: `f(0) = 0, f(1) = 1`
Negative index: Either return `undefined` or throw an exception. Please note that there is a definition for negative indices: https://en.wikipedia.org/wiki/Fibonacci_number#Negafibonacci

## Instructions

1. Think about the different test cases.
2. Write the tests first following the TDD approach.
3. Follow the Red (test is broken), Green (test works), Refactor (change implementation details) framework.
4. Think about possible performance improvements. Try to calculate `fib(100)`.
