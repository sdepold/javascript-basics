const { Router } = require("express");
const controller = Router();

controller.get("/", (req, res) => {
  res.send("this endpoint is called via /hello");
});

controller.get("/world", (req, res) => {
  res.send("this endpoint is called via /hello/world");
});

controller.post("/there", (req, res) => {
  res.send(`
    You have sent the following content to /hello/there:
    ${JSON.stringify(req.body)}
  `);
});

module.exports = controller;
