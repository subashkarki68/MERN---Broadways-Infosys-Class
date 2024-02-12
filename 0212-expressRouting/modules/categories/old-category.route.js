const router = require("express").Router();

router
  .route("/")
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.json({ msg: "All categories received successfully." });
  })
  .post((req, res) => {
    const data = req.body;
    isDataEmpty = Object.keys(data).length === 0;
    if (isDataEmpty) res.json({ error: "Category Data is empty" });
    res.json({ msg: "Category added: ", data });
  });

router
  .route("/:id")
  .put((req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.json({ msg: `Category with ID: ${id} updated with data:`, data });
  })
  .patch((req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.json({ msg: `Category with ID: ${id} updated with data:`, data });
  })
  .delete((req, res) => {
    const { id } = req.params;
    res.json({ msg: `Category with ID: ${id} deleted successfully.` });
  });
module.exports = router;
