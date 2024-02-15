const router = require("express").Router();
const validate = require("./user.validate");
const { checkRole, hasPermission } = require("../../utils/sessionManager");

router
  .route("/")
  .get(hasPermission("read"), (req, res, next) => {
    try {
      return res.status(200).json({
        success: true,
        result: "will come from DB...",
        message: "All users fetched",
      });
    } catch (error) {
      next(error);
    }
  })
  .post(
    hasPermission("delete"),
    checkRole(["admin", "user"]),
    validate,
    (req, res, next) => {
      try {
        const { validatedData } = req;
        return res.status(200).json({
          success: true,
          result: validatedData,
          message: "User Added Successfully",
        });
      } catch (error) {
        next(error);
      }
    }
  );

router
  .route("/:id")
  .get(hasPermission("read"), (req, res, next) => {
    try {
      return res
        .status(200)
        .json({ success: true, result: req.body, message: "User Fetched" });
    } catch (error) {
      next(error);
    }
  })
  .patch(hasPermission("update"), (req, res, next) => {
    try {
      return res
        .status(200)
        .json({ success: true, result: req.body, message: "User Updated" });
    } catch (error) {
      next(error);
    }
  })
  .put(hasPermission("update"), (req, res, next) => {
    try {
      return res
        .status(200)
        .json({ success: true, result: req.body, message: "User Updated" });
    } catch (error) {
      next(error);
    }
  })
  .delete(hasPermission("delete"), (req, res, next) => {
    try {
      return res.status(200).json({
        success: true,
        result: req.params.id,
        message: "User Deleted",
      });
    } catch (error) {
      next(error);
    }
  });
module.exports = router;
