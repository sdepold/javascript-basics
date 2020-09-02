# Architecture 04 | SOLID

## What is it?

SOLID describes 5 principles for designing and developing maintainable object-oriented software.

### S — Single Responsibility Principle(S.R.P)

> A class should have one, and only one, reason to change.

This can be applied to classes, software components or even microservices.

#### Why would you care?

- Makes implementation easier (to write and understand)
- Prevents unexpected side-effects for future changes
- Eases collaboration
- Dependency management

#### How?

Make sure your class/component/microservice only focusses on one particular responsibility!

Question: What is the responsibility of your class/component/microservice?

If your answer includes the word “and”, you’re most likely breaking the single responsibility principle.

### O — Open-Closed Principle

You should be able to extend a class’s behavior, without modifying it.

Open for extension
This ensures that the class behavior can be extended. As requirements change, we should be able to make a class behave in new and different ways, to meet the needs of the new requirements.

Closed for modification
The source code of such a class is set in stone, no one is allowed to make changes to the code.

#### L — Liskov Substitution Principle

Derived classes must be substitutable for their base classes.

#### I — Interface Segregation Principle

Make fine grained interfaces that are client specific.

#### D — Dependency Inversion Principle

Depend on abstractions, not on concretions.

A. High level modules should not depend upon low level modules. Both should depend upon abstractions.
B. Abstractions should not depend upon details. Details should depend upon abstractions.

## Additional resources

- [Series about SOLID](https://stackify.com/solid-design-principles/)