const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("users");
});

router.get("/newuser", (req, res) => {
  res.render("newUser");
});
router.get("/:id", (req, res) => {
  res.render("userProfile", { name: req.params.path });
});

module.exports = router;
