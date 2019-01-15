const express = require("express");
const app = express();
const controllers = require("require-dir-all")("./controllers");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(morgan("dev"));

Object.keys(controllers).forEach(controllerName => {
  app.use(controllers[controllerName]);
});

app.listen(port, () => {
  console.log(`MVC app listening on port ${port}!`);
});
