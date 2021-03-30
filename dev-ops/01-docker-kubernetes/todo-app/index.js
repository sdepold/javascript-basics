const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const requireAll = require("require-dir-all");

app.use(morgan("dev"));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

Object.values(requireAll("./controllers")).forEach(c => app.use(c));

app.listen(port, () => {
  console.log(`MVC app listening on port ${port}!`);
});
