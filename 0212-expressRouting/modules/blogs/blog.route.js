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
  .get((req, res) =>
    sendSuccessResponse(res, "All Blogs received successfully")
  )
  .post((req, res) => {
    if (checkEmptyData(req.body, res)) return;
    sendSuccessResponse(res, "Blog posted successfully", req.body);
  });

// Routes for /blogs/:id
router
  .route("/:id")
  .put((req, res) => {
    if (checkEmptyData(req.body, res)) return;
    sendSuccessResponse(
      res,
      `Blog with ID: ${req.params.id} updated successfully`,
      req.body
    );
  })
  .patch((req, res) => {
    if (checkEmptyData(req.body, res)) return;
    sendSuccessResponse(
      res,
      `Blog with ID: ${req.params.id} patched successfully`,
      req.body
    );
  })
  .delete((req, res) =>
    res.json({ msg: `Blog with ID: ${req.params.id} deleted successfully` })
  );

module.exports = router;
