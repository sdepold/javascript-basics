const { Router } = require("express");
const controller = Router();

const User = require('../models/user');
const sessionsLoginView = require("../views/sessions-login");

controller.get("/login", (req, res) => {
  res.send(sessionsLoginView());
});

controller.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });

  if(user) {
      req.session.user = {
          id: user.id,
          username: user.username
      };
      return res.redirect("/");
  }

  console.error('User not found… Handle this gracefully!')
});

controller.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.redirect("/");
  });
});

module.exports = controller;
