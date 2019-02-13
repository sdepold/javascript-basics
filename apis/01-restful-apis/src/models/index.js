const Task = require('./task')
const TaskList = require('./task-list')

Task.belongsTo(TaskList);
TaskList.hasMany(Task);

module.exports = {
    Task, TaskList
};
