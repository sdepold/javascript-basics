const uuid = require("uuid/v4");

let tasks = [];

module.exports = {
  find: async id => tasks.find(task => task.id === id),
  findAll: async () => tasks,
  destroy: async ({ where }) => {
    const { id } = where;
    tasks = tasks.filter(task => task.id !== id);
  },
  create: async data => tasks.push({ ...data, id: uuid() }),
  update: async (data, { where }) => {
    const { id } = where;

    tasks = tasks.map(task => task.id === id ? {...task, ...data} : task)
  }
};
