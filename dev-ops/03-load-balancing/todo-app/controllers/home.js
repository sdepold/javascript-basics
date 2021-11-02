const { Router } = require('express');
const homeController = Router();

homeController.get("/", (req, res) => {
  res.send("Hallo Pari!")
})

module.exports = homeController;
