# API Design 01 | RESTful APIs

In this first lesson about API design, we are going to focus on RESTful APIs.

## Theory

RESTful is all about interactions with collections and entities and making those interactions repeatable and consistently defined.

### Collections, entities, relationships

- Entities are single elements (e.g. a single user)
- Collections are lists of entities (e.g. a set of users)
- Entities can be related to each other and might only existing through some nesting (e.g. an Album has many Photos and Photos belong to the Album)

### URL structure

- General URL structure: {protocol}://{host}/[{namespace}/]{collection}/{identifier}
- Collection names should be plural, e.g. https://myhost.com/api/v1/users
- Entities are identified through the collection URL + unique identifier, e.g. https://myhost.com/api/v1/users/5
    - There are many different possibilities for identifiers:
    - Auto-generated internal database ID (which is typically a number)
    - UUID (which is a combination of numbers and characters following a specific format)
    - Special public ID which is not giving information about internal identification of resources

### HTTP methods

The HTTP standard defines a handful of methods that can be used to interact with resources.

- GET is for reading data
- POST is for creating data
- PUT is for updating data
- PATCH is for partially updating data
- DELETE is for removing data

### Interacting with resources

When the HTTP methods are combined with collections or entities, we get access to the following possibilities:

| Action | Collection                                   | Entity                                                                   |
|--------|----------------------------------------------|--------------------------------------------------------------------------|
| GET    | Reads a set of entities                      | Reads a particular entity                                                |
| POST   | Creates a new element with auto-generated ID | Creates a new element with specified ID; Error if element exists already |
| PUT    |                                              | Creates or updates an element with specified ID                          |
| PATCH  |                                              | Partially updates an element with specified ID                           |
| DELETE | Removes all elements of collection           | Removes a single element                                                 |

Note: Empty cells means undefined behavior.


### Nesting

Entities can also be nested which expresses a relationship in which one element cannot exist without another.
For example an API that is managing task lists can define that a task only ever exists inside of a specific task list.
The respective URL structure would be:

- General URL structure: {protocol}://{host}/[{namespace}/]{collection}/{parent-identifier}/{sub-collection}/{child-identifier}
- Task lists URL: https://mytodoservice.com/api/v1/task-lists
- Task list URL: https://mytodoservice.com/api/v1/task-lists/123
- Tasks URL: https://mytodoservice.com/api/v1/task-lists/123/tasks
- Task URL: https://mytodoservice.com/api/v1/task-lists/123/tasks/456

Note that the collection names are always using plural and dashes.

### Cascades

In databases and general data management realms, you will face the question about what to do with children when their parents change and/or particularly get deleted.
Imagine a task list with 10 tasks. What is happening with those 10 tasks, when the user decides to delete the task list.
Depending on the database owner and the type of data, the answers can vary. You can keep the tasks around referencing a task list that no longer exist. You might want to unset the referencing property to signal that removal of the parent properly. The children can be deleted as well.

Since tasks are not really accessible without their task list (imagine a UI which gives you access to tasks by selecting the task list first), it might make sense to simply delete all tasks of a task list. This is called `cascaded deletion`.

### Transactions

TBD

## Exercise

- Build API which allows management of task lists and nested tasks
- Pattern: /task-lists/:listId/tasks/:taskId
