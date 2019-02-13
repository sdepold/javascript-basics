const { Router } = require("express");
const controller = Router();

const { Task, TaskList } = require("../models");

controller.get("/task-lists/:taskListId/tasks", async (req, res) => {
  const taskList = await TaskList.findOne({
      where: { id: req.params.taskListId },
      include: [ Task ]
    });

    res.json(taskList.tasks);
});

controller.post("/task-lists/:taskListId/tasks", async (req, res) => {
    const taskList = await TaskList.findOne({
        where: { id: req.params.taskListId }
    });
    const task = await taskList.createTask(req.body, { fields: ["title", "description"] });

    res.status(201).json(task);
});

module.exports = controller;
