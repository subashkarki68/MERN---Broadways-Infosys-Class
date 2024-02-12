const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

router.post("/", (req, res) => {
  res.json({ msg: "Posted Successfully" });
});

module.exports = router;
