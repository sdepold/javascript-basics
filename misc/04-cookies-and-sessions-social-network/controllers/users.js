const { Router } = require("express");
const controller = Router();
const usersRegisterView = require("../views/users-register");
const usersRegisterConfirmView = require("../views/users-register-confirm");
const User = require("../models/user");

controller.get("/register", (req, res) => {
  res.send(usersRegisterView());
});

controller.post("/register", async (req, res) => {
  try {
    const user = await User.create({ username: req.body.username });
    return res.send(usersRegisterConfirmView({ user }));
  } catch (e) {
    console.error(e);

    const error = e.errors
      ? e.errors.map((e) => e.message).join(", ")
      : e.message;
      
    res.send(usersRegisterView({ error }));
  }
});

module.exports = controller;
