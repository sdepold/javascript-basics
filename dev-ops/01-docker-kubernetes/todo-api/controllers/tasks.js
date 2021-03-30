const { Router } = require("express");
const controller = Router();

const Task = require(`../models/${global.sequelize ? "task.db" : "task"}`);

controller.get("/tasks", async (req, res) => {
  res.json(await Task.findAll());
});

controller.post("/tasks", async (req, res) => {
  console.log(req.body)
  res
    .status(201)
    .json(await Task.create(req.body, { fields: ["title", "description"] }));
});

controller.delete("/tasks/:id", async (req, res) => {
  res.status(204).json(await Task.destroy({ where: { id: req.params.id } }));
});

controller.patch("/tasks/:id", async (req, res) => {
  res.json(
    await Task.update(req.body, {
      where: { id: req.params.id },
      fields: ["status"],
    })
  );
});

module.exports = controller;
