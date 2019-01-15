const { Router } = require("express");
const tasksController = Router();

const Task = require("../models/task");
const TasksView = require("../views/tasks");

tasksController.get("/tasks", (req, res) => {
  const tasks = Task.findAll();
  const html = TasksView.index(tasks);

  res.send(html);
});

tasksController.post("/tasks", (req, res) => {
  Task.add({
    title: req.body.title,
    description: req.body.description
  });
  res.redirect("/tasks");
});

module.exports = tasksController;
