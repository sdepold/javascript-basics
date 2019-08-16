const { Router } = require('express');
const homeController = Router();

homeController.get("/", (req, res) => {
  res.redirect("/task-lists");
})

module.exports = homeController;
