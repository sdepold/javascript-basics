const template = require('./template');
const taskListView = require('./task-lists');
const taskView = require('./tasks');

module.exports = (taskLists=[], tasks=[]) => template(
    taskListView(taskLists),
    taskView(tasks)
);
