const { graphql } = require("graphql");
const http = require("http");
const url = require("url");

const bodyParser = require("./body-parser");
const schema = require("./schema");
const apiRoot = require("./resolvers");

const server = http.createServer(
  bodyParser((req, res) => {
    const request = `${req.method} ${url.parse(req.url).pathname}`;

    if (request === "GET /") {
      return res.end("Only POST calls with GraphQL queries allowed!");
    }

    if (request === "POST /") {
      return graphql(schema, req.body, apiRoot).then((response) => {
        res.setHeader("Content-Type", "application/json");

        if (response.errors) {
          res.writeHead(400);
          return res.end(JSON.stringify(response.errors.map((e) => e.message)));
        }
        
        res.end(JSON.stringify(response.data));
      });
    }
  })
);

server.listen(8080, (...args) => {
  console.log(
    `API is now available via http://localhost:${server.address().port}/`
  );
});
