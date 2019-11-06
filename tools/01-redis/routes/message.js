var express = require("express");
var router = express.Router();
const { getClient } = require("../models/redis-client");

/* GET home page. */
router.post("/", async function(req, res, next) {
  res.sendStatus(204);

  const client = getClient();

  if (client) {
    client.publish("notification", req.body.message);
  }
});

module.exports = router;
