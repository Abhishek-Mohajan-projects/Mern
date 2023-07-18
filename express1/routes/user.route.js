const express = require("express");
const router = express.Router();

router.use("/register", (req, res) => {
  res.send("<h1>I am a get request at Register Route</h1>");
});
router.use("/login", (req, res) => {
  res.send("<h1>I am a get request at Login Route</h1>");
});

module.exports = router;
