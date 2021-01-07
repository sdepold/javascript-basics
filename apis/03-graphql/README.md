# API Design 03 | GraphQL

## What is GraphQL

- Query and manipulation language for APIs 
- Runtime for fulfilling queries with your existing data
- Originally developed by Facebook
- Alternative approach to REST

## Why would you need it?

- Load only the data you need
- Load multiple nested resources in a single request
- Gives clients more control over the data needed
- Can drastically reduce the amount of requests and network traffic which is particularly interesting on mobile device 

## Terminology

### Scalar

- One of the two atomic types in GraphQL
- Represent the leaf types of a query (the eventual data type something is resolving to)
- 5 built-in Scalars: Int, Float, String, Boolean, ID

## Additional readings

- GraphQL: https://graphql.org/
- Apollo: https://www.apollographql.com/docs/tutorial/introduction/

## Homework

Build an app (or only API) that allows creation of todo lists with respective tasks.