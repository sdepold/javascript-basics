const { Router } = require("express");
const controller = Router();

const { TaskList } = require("../models");

controller.get("/task-lists", async (req, res) => {
  res.json(await TaskList.findAll());
});

controller.post("/task-lists", async (req, res) => {
  const taskList = await TaskList.create(req.body, { fields: ["title"] });

  res.status(201).json(taskList);
});

module.exports = controller;
