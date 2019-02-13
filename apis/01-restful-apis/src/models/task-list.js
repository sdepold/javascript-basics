const Sequelize = require("sequelize");

module.exports = global.sequelize.define("taskList", {
  title: Sequelize.STRING
});
