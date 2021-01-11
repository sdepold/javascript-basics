# API Design 03 | GraphQL | Using databases

Try out the following queries:

## Get all users

```
{
  users {
    id
    name
  }
}
```

## Create a user

```
mutation {
  createUser(name: "Sascha") {
    id
    name
  }
}

```

## Create a task

```
mutation {
  createTask(userId: 1, title: "do something") {
    id
  }
}
```

## Get the users with their tasks

```
{
  users {
    name
    tasks {
      id
      title
    }
  }
}
```

## Variables

There is a certain approach in GraphQL to separate the queries from the data by using variables. This can be done via:

Query:

```
mutation CreateUser($username: String!) {
  createUser(name: $username) {
    id
    name
  }
}
```

Variables:

```
{ username: "foo"}
```