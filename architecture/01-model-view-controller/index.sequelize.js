const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const requireAll = require("require-dir-all");
const cors = require('cors');

app.use(morgan("dev"));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

global.sequelize = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: "database.sqlite"
});

Object.values(requireAll("./controllers")).forEach(c => app.use(c));

global.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`MVC app listening on port ${port}!`);
  });
});
