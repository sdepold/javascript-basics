const fetch = require("node-fetch");

module.exports = {
//   find: async id => tasks.find(task => task.id === id),
  findAll: async () => fetch('http://localhost:3000/task-lists').then(res => res.json())
//   destroy: async ({ where }) => {
//     const { id } = where;
//     tasks = tasks.filter(task => task.id !== id);
//   },
//   create: async data => tasks.push({ ...data, id: uuid() }),
//   update: async (data, { where }) => {
//     const { id } = where;

//     tasks = tasks.map(task => task.id === id ? {...task, ...data} : task)
//   }
};
