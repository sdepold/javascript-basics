# API Design 01 | RESTful APIs

In this first lesson about API design, we are going to focus on RESTful APIs.

## Theory

RESTful is all about interactions with collections and entities and making those interactions repeatable and consistently defined.

### Collections, entities, relationships

- Entities are single elements (e.g. a single user)
- Collections are lists of entities (e.g. a set of users)
- Entities can be related to each other and might only existing through some nesting (e.g. an Album has many Photos and Photos belong to the Album)

### URL structure

- General URL structure: <protocol>://<host>/[<namespace>/]<collection>/<identifier>

- Collections


- Basic HTTP methods
- How HTTP methods map to actions
- Collections vs single entities
- Nesting
- Maybe: Transactions
- Maybe: Cascades

## Exercise

- Build API which allows management of task lists and nested tasks
- Pattern: /taskslists/:listId/tasks/:taskId
