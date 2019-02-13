const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Sequelize = require("sequelize");
const requireAll = require("require-dir-all");

module.exports = ({ storage = "database.sqlite" } = {}) => {
  app.use(morgan("dev"));
  app.use(bodyParser.json());

  global.sequelize = global.sequelize || new Sequelize(null, null, null, {
    dialect: "sqlite",
    storage
  });

  Object.values(requireAll("./controllers")).forEach(c => app.use(c));

  return app;
};
