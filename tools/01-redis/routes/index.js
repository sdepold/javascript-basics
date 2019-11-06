var express = require("express");
var router = express.Router();
const { getJoke } = require("../models/joke");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const joke = await getJoke();
  
  res.render("index", { title: "A joke a day keeps the doctor away", joke });
});

module.exports = router;
