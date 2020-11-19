const { Router } = require("express");
const controller = Router();

const imagesNewView = require("../views/images-new");
const imagesShowView = require("../views/images-show");
const { Image, User, Comment } = require("../models");
const path = require("path");

const UPLOAD_PATH = path.resolve(__dirname, "../public/uploads");

controller.get("/new", (req, res) => {
  res.send(imagesNewView({ user: req.session.user }));
});

controller.post("/new", async (req, res) => {
  if (!req.files.data) {
    throw new Error("No files was uploaded!");
  }

  try {
    const filename = [req.files.data.md5, req.files.data.name].join("-");

    await req.files.data.mv(path.resolve(UPLOAD_PATH, filename));

    const user = await User.findOne({ where: { id: req.session.user.id } });
    const image = await user.createImage({ filename });

    return res.redirect(`/?highlight=${image.id}`);
  } catch (e) {
    console.error(e);
  }
});

controller.get("/:id", async (req, res) => {
  const image = await Image.findOne({
    where: { id: req.params.id },
    include: { all: true, nested: true },
  });

  res.send(imagesShowView({ user: req.session.user, image }));
});

controller.post("/:id/comments", async (req, res) => {
  let image = await Image.findOne({ where: { id: req.params.id } });

  image.createComment({ text: req.body.comment, userId: req.session.user.id });

  res.redirect(302, `/images/${image.id}`);
});

module.exports = controller;
