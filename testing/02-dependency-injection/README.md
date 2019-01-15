# Testing 02 | Dependency Injection

In this second lesson we are going to write a module that calculates a sequence of numbers.

## Focus

- Dependency Injection
- Test Driven Development

## Instructions

Please implement the following specifications in a test driven way. You can decide on a test framework.

1. Write a module that exports a function.
2. Given a limit (a number), the function should calculate and return the square of each number between 0 and (including) the provided limit.
3. Think of a way to use the same module to calculate the Fibonacci sequence. Adjust the implementation and tests accordingly. Also add new tests for the Fibonacci scenario.

## Hints

- The square of a number can be calculated via `Math.pow(someNumber, 2)` or `someNumber ** 2` or `someNumber * someNumber`.
- The function of instruction #2 should return `[0, 1, 4, 9, 16]` for the input value 4.
- It is possible to pass a reference to a function as an argument.

## Learnings

The `sequence` function is a rather generic function that can be used with every function that maps an index to value.
While the iteration part (going over the numbers from 0 through `limit`) is the same every time, the mapping function is a dependency.
In order to make the `sequence` function really generic, it is necessary to decouple it from the mapping function – or in other
words to decouple from its dependency.

This is usually done by passing the dependency into the respective scope (in our case the `sequence` function). The dependency is *injected*.

Note _Dependency injection is typically used in more complex scenarios, where the instantiation of a class is moved out of a scope. The scope itself only gets a reference to the actual instance._

You can find more information and other scenarios about dependency injection here:

- https://en.wikipedia.org/wiki/Dependency_injection
- https://medium.com/@fourlastor/functional-dependency-injection-952214af63bc
