const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require('../01-diy/schema');
const apiRoot = require('../01-diy/resolvers');
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: apiRoot,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
