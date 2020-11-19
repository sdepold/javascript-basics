const { Router } = require("express");
const controller = Router();
const homeView = require("../views/home");
const { Image } = require("../models");

controller.get("/", async (req, res) => {
  const images = await Image.findAll({ include: { all: true } });

  res.send(homeView({ user: req.session.user, images }));
});

module.exports = controller;
