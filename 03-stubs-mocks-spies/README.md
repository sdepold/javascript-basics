# JavaScript Basic 03 | Stubs, Mocks, Spies

TBD

## Focus

- Mocking, Stubbing, Spying
- Sinon

## Notes

### Spies

A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. There are two types of spies: Some are anonymous functions, while others wrap methods that already exist in the system under test.

### Stubs

Test stubs are functions (spies) with pre-programmed behavior.
Behavior per stub call can be defined programmatically.

### Mocks

Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations.

A mock will fail your test if it is not used as expected.



