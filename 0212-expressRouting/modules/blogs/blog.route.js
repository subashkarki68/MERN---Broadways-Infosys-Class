const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello from blog route" });
});
router.post("/", (req, res) => {
  res.json({ msg: "Hello from blog route" });
});
router.put("/", (req, res) => {
  res.json({ msg: "Hello from blog route" });
});
router.patch("/", (req, res) => {
  res.json({ msg: "Hello from blog route" });
});
router.delete("/", (req, res) => {
  res.json({ msg: "Hello from blog route" });
});

module.exports = router;
