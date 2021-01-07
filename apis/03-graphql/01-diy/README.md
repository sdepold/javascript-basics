# API Design 03 | GraphQL | DIY

Handmade HTTP server which serves data upon POST requests based on GraphQL queries.

## Code

The files `index.js` and `body-parser.js` are boilerplate for the most part and only partially relevant for this exercise.

### index.js

Besides the boilerplate, there are 3 important parts:

The `schema` defines which kind of queries you can fire against the API and which data structure(s) you can retrieve.
The `resolvers` (or `apiRoot`) is resolving query keywords defined in the `schema` to actual data.
The call to the `graphql` function is basically where the wiring happens:

```js
graphql(
  schema,
  req.body, // is supposed to contain a GraphQL query
  apiRoot
);
```

### Querying data

```bash
curl http://localhost:8080 -d '{ hello }' # the last part is your GraphQL query
```

## Task

Let's implement a tiny todo API, which allows creation, completion and reading of tasks.

### Extending the schema for read requests

Define a new entity type:

```
    type Task {
        title: String
        completed: Boolean
    }
```

Extend the possible queries:

```
    type Query {
        hello: String
        tasks: [Task]
    }
```

Note the Array notation with `[Type]`.

### Add a new resolver to serve tasks

```javascript
const tasks = [];

const taskResolver = () => {
  return tasks;
};

module.exports = {
  // ...
  tasks: taskResolver,
};
```

### Query your tasks

```bash
curl http://localhost:8080 -d '{ tasks { title } }'
```

### Introspection

You can read the defined types and their fields via the following call:

```bash
# Get all defined types
curl http://localhost:8080 -d '{ __schema { types { name } } }'

# Get the fields of a particular type
curl http://localhost:8080 -d '{ __type(name:"Task") { fields{ name description } } }'
```

### Creating new tasks with mutations

Mutations are the GraphQL way to ... mutate ... your data!

Schema:

```
    type Mutation {
        createTask(title: String!): Task
    }
```

Note the exclamation mark for required properties.

Resolver:

```javascript
const createTaskResolver = ({ title }) => {
  const task = { id: tasks.length, title, completed: false };
  console.log(task);

  tasks.push(task);

  return task;
};

module.exports = {
  // ...
  createTask: createTaskResolver,
};
```

And run the query:

```bash
curl http://localhost:8080 -d 'mutation { createTask(title:"my todo item") { id title completed } }'
```

### Completing a task

See above for the pattern and try it yourself :)
