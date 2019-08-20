const Sequelize = require("sequelize");

module.exports = (req) => req.sequelize.define("task", {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  status: Sequelize.STRING
});
