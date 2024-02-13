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
  .get((req, res, next) => {
    try {
      sendSuccessResponse(res, "All categories received successfully");
    } catch (e) {
      next(e);
    }
  })
  .post((req, res, next) => {
    try {
      if (checkEmptyData(req.body, res)) return;
      sendSuccessResponse(res, "Category added with data:", req.body);
    } catch (e) {
      next(e);
    }
  });

//Routes for /categories/:id
router
  .route("/:id")
  .put((req, res, next) => {
    try {
      if (checkEmptyData(req.body, res)) return;
      sendSuccessResponse(
        res,
        `Category with id: ${req.params.id} updated with data`,
        req.body
      );
    } catch (e) {
      next(e);
    }
  })
  .patch((req, res, next) => {
    try {
      if (checkEmptyData(req.body)) return;
      sendSuccessResponse(
        res,
        `Category with id ${req.params.id} patched successfully`,
        req.body
      );
    } catch (e) {
      next(e);
    }
  })
  .delete((req, res, next) => {
    try {
      res.json({
        message: `Category with id ${req.params.id} deleted successfully`,
      });
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
