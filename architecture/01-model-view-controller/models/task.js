const uuid = require("uuid/v4");

const tasks = [];

module.exports = {
//   find: id => tasks.find(task => task.id === id),
  findAll: () => tasks,
  remove: id => tasks = tasks.filter(task => task.id !== id),
  add: task => tasks.push(Object.assign({ id: uuid() }, task))
};
