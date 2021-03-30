var Sequelize = require("sequelize");
var sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

let User = sequelize.define("user", {
  name: Sequelize.STRING,
});

let Task = sequelize.define("task", {
  title: Sequelize.STRING,
});

User.hasMany(Task, { as: "tasks" });

module.exports = {
  sequelize,
  User,
  Task,
};
