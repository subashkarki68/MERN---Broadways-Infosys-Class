const router = require("express").Router();

router
  .route("/")
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.json({ msg: "All Blogs received successfully" });
  })
  .post((req, res) => {
    const data = req.body;
    //To Check if the Data Object is empty or not
    isObjEmpty = Object.keys(data).length === 0;
    if (isObjEmpty)
      res.json({ error: "Please, provide some data to add Blog" });
    res.json({ msg: "Blog posted successfully", data });
    console.log(data);
  });

router
  .route("/:id")
  .put((req, res) => {
    const { id } = req.params;
    const data = req.body;
    //To Check if the Data Object is empty or not
    isObjEmpty = Object.keys(data).length === 0;
    if (isObjEmpty)
      res.json({ error: "Please, provide some data to add Blog" });

    res.json({ msg: `Blog with ID: ${id} updated successfully`, data });
    console.log({ id, data });
  })
  .patch((req, res) => {
    const { id } = req.params;
    const data = req.body;
    //To Check if the Data Object is empty or not
    isObjEmpty = Object.keys(data).length === 0;
    if (isObjEmpty)
      res.json({ error: "Please, provide some data to add Blog" });
    res.json({ msg: `Blog with ID: ${id} patched successfully`, data });
    console.log({ id, data });
  })
  .delete((req, res) => {
    const { id } = req.params;
    res.json({ msg: `Blog with ID: ${id} deleted successfully` });
  });

module.exports = router;
