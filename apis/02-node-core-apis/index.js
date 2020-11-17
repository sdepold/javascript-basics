const http = require("http");
const url = require("url");
const bodyParser = require("./body-parser");

const server = http.createServer(
  bodyParser((req, res) => {
    const request = `${req.method} ${url.parse(req.url).pathname}`;

    console.log(`${request}`);

    if (request === "GET /") {
      res.end("Welcome home!");
      return;
    }

    if (request === "POST /") {
      const body = req.body;

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: 1 }));
      return;
    }

    if (request === "GET /other") {
      http.get(
        {
          hostname: "localhost",
          port: 8000,
          path: "/",
          headers: {
            Accept: "application/json",
          },
        },
        (remoteRes) => {
          let body = "";
          remoteRes.on("data", (chunk) => (body += chunk.toString()));
          remoteRes.on("end", () => {
            res.setHeader("Content-Type", "application/json");
            res.end(body);
          });
        }
      );
      return;
    }

    res.writeHead(404);
    res.end();
  })
);

server.listen(8000, (...args) => {
  console.log(
    `App is now available via http://localhost:${server.address().port}/`
  );
});
