const { Router } = require("express");
const router = Router();
const homeView = require("../views/home");
const User = require("../models/user");

router.get("/", async (req, res) => {
  res.send(homeView({ user: req.session.user }));
});

module.exports = router;
