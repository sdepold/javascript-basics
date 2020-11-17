const { Router } = require("express");
const router = Router();

const imagesNewView = require("../views/images-new");
const { Image, User } = require("../models");
const path = require("path");

const UPLOAD_PATH = path.resolve(__dirname, "../public/uploads");

router.get("/new", (req, res) => {
  res.send(imagesNewView());
});

router.post("/new", async (req, res) => {
  if (!req.files.data) {
    throw new Error("No files was uploaded!");
  }

  try {
    const filename = [req.files.data.md5, req.files.data.name].join("-");

    await req.files.data.mv(path.resolve(UPLOAD_PATH, filename));

    const user = await User.findOne({ where: { id: req.session.user.id } });
    const image = await user.createImage({filename});

    return res.redirect(`/?highlight=${image.id}`);
  } catch (e) {
    console.error(e);

    // const error = e.errors
    //   ? e.errors.map((e) => e.message).join(", ")
    //   : e.message;

    // res.send(usersRegisterView({ error }));
  }
});

module.exports = router;
