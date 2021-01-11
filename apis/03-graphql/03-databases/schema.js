const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
        id: Int
        name: String
        createdAt: String
        updatedAt: String
        tasks: [Task]
    }

    type Task {
        id: Int
        userId: Int
        title: String
        createdAt: String
        updatedAt: String
    }

    type Query {
        users(id: Int, name: String, createdAt: String, updatedAt: String): [User]
        tasks(id: Int, userId: Int, title: String, createdAt: String, updatedAt: String): [Task]
    }

    type Mutation {
        createUser(name: String!): User
        createTask(userId: Int, title: String!): Task
    }
`);
