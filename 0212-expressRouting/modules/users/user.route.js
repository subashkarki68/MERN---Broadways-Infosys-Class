const router = require("express").Router();
const validate = require("./user.validate");
const checkRole = require("../../utils/sessionManager");

//GET ALL USERS
router.get("/", (req, res, next) => {
  try {
    const { limit, page, search } = req.query; //USED FOR SEARCH, SORTING AND FILTER
    //DATABASE OPERATION
    // apple;
    res.json({ msg: "Hello from user route" });
  } catch (e) {
    next(e);
  }
});

//ADD NEW USER
router.post("/", checkRole(["admin"]), validate, (req, res, next) => {
  try {
    console.log(req.body);
    //DATABASE OPERATION
    res.json({ msg: "Hello from user route" });
  } catch (e) {
    next(e);
  }
});

//UPDATE SINGLE USER FOR MORE THAN 2 FIELDS
router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    //  //DATABASE OPERATION
    res.json({ msg: "Hello from user route" });
  } catch (e) {
    next(e);
  }
});

//UPDATE SINGLE USER FOR ONE FIELD
router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log({ id, data });
    //DATABASE OPERATION
    res.json({ msg: "Hello from user route" });
  } catch (e) {
    next(e);
  }
});

//DELETE SINGLE USER
router.delete("/:id", (req, res, next) => {
  try {
    console.log(req.params.id);
    //DATABASE OPERATION
    res.json({ msg: "Hello from user route" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
