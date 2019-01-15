const { Router } = require('express');
const homeController = Router();

homeController.get("/", (req, res) => {
  res.redirect("/tasks");
})

module.exports = homeController;
