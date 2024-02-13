const router = require("express").Router();

router
  .route("/")
  .get((req, res, next) => {
    try {
      res.json({ msg: "success" });
    } catch (error) {
      next(error);
    }
  })
  .post((req, res, next) => {
    try {
      const data = req.body;
      res.json({ msg: "Successfully posted with data: ", data });
    } catch (error) {
      next(error);
    }
  });

router
  .route("/:id")
  .get((req, res, next) => {
    //Get single blog post
    try {
      const id = req.params;
      res.json({ msg: "Successfully query of data", id });
    } catch (error) {
      next(error);
    }
  })
  .put((req, res, next) => {
    try {
      res.json({
        msg: `Successfully updated:`,
        id: req.params.id,
        data: req.body,
      });
    } catch (error) {
      next(error);
    }
  })
  .patch((req, res, next) => {
    try {
      res.json({
        msg: `Successfully updated:`,
        id: req.params.id,
        data: req.body,
      });
    } catch (error) {
      next(error);
    }
  })
  .delete((req, res, next) => {
    try {
      res.json({ msg: "Successfully deletion of data", data: req.params.id });
    } catch (error) {}
  });

module.exports = router;
