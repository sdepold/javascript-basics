const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("this endpoint is called via /hello");
});

router.get("/world", (req, res) => {
  res.send("this endpoint is called via /hello/world");
});

router.post("/there", (req, res) => {
  res.send(`
    You have sent the following content to /hello/there:
    ${JSON.stringify(req.body)}
  `);
});

module.exports = router;
