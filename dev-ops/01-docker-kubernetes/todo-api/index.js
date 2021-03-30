const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const requireAll = require("require-dir-all");
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

Object.values(requireAll("./controllers")).forEach((c) => app.use(c));

app.listen(port, () => {
  console.log(`MVC app listening on port ${port}!`);
});
