const { Router } = require("express");
const controller = Router();

const TasksView = require("../views/tasks/index");

controller.get("/tasks", async (req, res) => {
  const html = TasksView([]);

  res.send(html);
});

// controller.post("/tasks", async (req, res) => {
//   await Task.create(req.body, { fields: ["title", "description"] });

//   res.redirect("/tasks");
// });

// controller.delete("/tasks/:id", async (req, res) => {
//   await Task.destroy({ where: { id: req.params.id } });

//   res.sendStatus(204);
// });

// controller.patch("/tasks/:id", async (req, res) => {
//   await Task.update(req.body, {
//     where: { id: req.params.id },
//     fields: ["status"]
//   });
//   res.sendStatus(204);
// });

module.exports = controller;
