const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Sequelize = require("sequelize");
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

const sequelizeArgs = process.env.DATABASE_URL
  ? [process.env.DATABASE_URL]
  : ["todo-app", "postgres", "postgres", { dialect: "postgres" }];

global.sequelize = new Sequelize(...sequelizeArgs);

Object.values(requireAll("./controllers")).forEach((c) => app.use(c));

global.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`MVC app listening on port ${port}!`);
  });
});
