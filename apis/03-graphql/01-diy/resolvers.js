const tasks = [];

const taskResolver = () => {
  return tasks;
};

const createTaskResolver = ({ title }) => {
  const task = { id: tasks.length, title, completed: false };
  console.log(task)

  tasks.push(task);

  return task;
};

const helloResolver = () => {
  return "Hello world!";
};

module.exports = {
  hello: helloResolver,
  tasks: taskResolver,
  createTask: createTaskResolver
};
