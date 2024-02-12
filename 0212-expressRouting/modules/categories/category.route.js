const router = require("express").Router();
const {
  checkEmptyData,
  sendSuccessResponse,
} = require("../../utils/responseHandler");

// Middleware to pass through all routes
router.all((req, res, next) => next());

// Routes for /categories
router
  .route("/")
  .get((req, res) => {
    sendSuccessResponse(res, "All categories received successfully");
  })
  .post((req, res) => {
    if (checkEmptyData(req.body, res)) return;
    sendSuccessResponse(res, "Category added with data:", req.body);
  });

//Routes for /categories/:id
router
  .route("/:id")
  .put((req, res) => {
    if (checkEmptyData(req.body, res)) return;
    sendSuccessResponse(
      res,
      `Category with id: ${req.params.id} updated with data`,
      req.body
    );
  })
  .patch((req, res) => {
    if (checkEmptyData(req.body)) return;
    sendSuccessResponse(
      res,
      `Category with id ${req.params.id} patched successfully`,
      req.body
    );
  })
  .delete((req, res) => {
    res.json({
      message: `Category with id ${req.params.id} deleted successfully`,
    });
  });

module.exports = router;
