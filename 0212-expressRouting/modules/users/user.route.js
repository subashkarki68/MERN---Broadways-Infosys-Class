const router = require("express").Router();

//GET ALL USERS
router.get("/", (req, res) => {
  const { limit, page, search } = req.query; //USED FOR SEARCH, SORTING AND FILTER
  //DATABASE OPERATION
  res.json({ msg: "Hello from user route" });
});

//ADD NEW USER
router.post("/", (req, res) => {
  console.log(req.body);
  //DATABASE OPERATION
  res.json({ msg: "Hello from user route" });
});

//UPDATE SINGLE USER FOR MORE THAN 2 FIELDS
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  //  //DATABASE OPERATION
  res.json({ msg: "Hello from user route" });
});

//UPDATE SINGLE USER FOR ONE FIELD
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log({ id, data });
  //DATABASE OPERATION
  res.json({ msg: "Hello from user route" });
});

//DELETE SINGLE USER
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  //DATABASE OPERATION
  res.json({ msg: "Hello from user route" });
});

module.exports = router;
