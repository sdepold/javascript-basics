const { Router } = require("express");
const router = Router();
const homeView = require('../views/home')

router.get("/", (req, res) => {
  res.send(homeView());
});

module.exports = router;
