const { Router } = require("express");
const router = Router();
const usersRegisterView = require("../views/users-register");
const usersRegisterConfirmView = require("../views/users-register-confirm");
const User = require("../models/user");

router.get("/register", (req, res) => {
  res.send(usersRegisterView());
});

router.post("/register", async (req, res) => {
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

module.exports = router;
