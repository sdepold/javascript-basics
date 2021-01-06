const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Task {
        id: ID
        title: String
        completed: Boolean
    }

    type Query {
        hello: String
        tasks: [Task]
    }

    type Mutation {
        createTask(title: String!): Task
        completeTask(id: ID!): Task
    }
`);