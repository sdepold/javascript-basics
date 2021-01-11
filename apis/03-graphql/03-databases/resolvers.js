const { User, Task } = require("./models");

module.exports = {
  users: (where) =>
    User.findAll({ where, include: { all: true, nested: true } }),
  tasks: (where) => Task.findAll({ where }),
  createUser: (args) => User.create(args),
  createTask: (args) => Task.create(args),
};
