const router = require("express").Router();

const {
  checkEmptyData,
  sendSuccessResponse,
} = require("../../utils/responseHandler");

// Middleware to pass through all routes
router.all((req, res, next) => next());

// Routes for /blogs
router
  .route("/")
  .get((req, res, next) => {
    try {
      sendSuccessResponse(res, "All Blogs received successfully");
    } catch (e) {
      next(e);
    }
  })
  .post((req, res, next) => {
    try {
      if (checkEmptyData(req.body, res)) return;
      sendSuccessResponse(res, "Blog posted successfully", req.body);
    } catch (e) {
      next(e);
    }
  });

// Routes for /blogs/:id
router
  .route("/:id")
  .put((req, res, next) => {
    try {
      if (checkEmptyData(req.body, res)) return;
      sendSuccessResponse(
        res,
        `Blog with ID: ${req.params.id} updated successfully`,
        req.body
      );
    } catch (e) {
      next(e);
    }
  })
  .patch((req, res, next) => {
    try {
      if (checkEmptyData(req.body, res)) return;
      sendSuccessResponse(
        res,
        `Blog with ID: ${req.params.id} patched successfully`,
        req.body
      );
    } catch (e) {
      next(e);
    }
  })
  .delete((req, res, next) => {
    try {
      res.json({ msg: `Blog with ID: ${req.params.id} deleted successfully` });
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
