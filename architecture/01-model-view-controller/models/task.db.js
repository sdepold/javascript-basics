const Sequelize = require("sequelize");

module.exports = global.sequelize.define("task", {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  status: Sequelize.STRING
});
