const { Router } = require("express");
const router = Router();
const homeView = require("../views/home");
const { User, Image } = require("../models");

router.get("/", async (req, res) => {
  const images = await Image.findAll({ include: { all: true } });

  res.send(homeView({ user: req.session.user, images }));
});

module.exports = router;
