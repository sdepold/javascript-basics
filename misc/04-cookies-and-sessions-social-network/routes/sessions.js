const { Router } = require("express");
const router = Router();

const User = require('../models/user');
const sessionsLoginView = require("../views/sessions-login");

router.get("/login", (req, res) => {
  res.send(sessionsLoginView());
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });

  if(user) {
      req.session.user = {
          id: user.id,
          username: user.username
      };
      res.redirect("/");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
