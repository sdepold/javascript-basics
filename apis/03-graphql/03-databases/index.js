var express = require("express");
var { graphqlHTTP } = require("express-graphql");

const { sequelize } = require("./models");
const schema = require("./schema");
const apiRoot = require("./resolvers");

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: apiRoot,
    graphiql: true,
  })
);
sequelize.sync().then(() => {
  app.listen(4000);
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
