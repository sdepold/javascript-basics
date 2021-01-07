const { User, Task } = require("./models");

module.exports = {
  users: ({ include, ...where }) => User.findAll({ where, include }),
  tasks: (where) => Task.findAll({ where }),
  createUser: (args) => User.create(args),
  createTask: (args) => Task.create(args),
};
