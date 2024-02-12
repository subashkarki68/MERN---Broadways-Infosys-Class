const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello from category route" });
});
router.post("/", (req, res) => {
  res.json({ msg: "Hello from category route" });
});
router.put("/", (req, res) => {
  res.json({ msg: "Hello from category route" });
});
router.patch("/", (req, res) => {
  res.json({ msg: "Hello from category route" });
});
router.delete("/", (req, res) => {
  res.json({ msg: "Hello from category route" });
});

module.exports = router;
