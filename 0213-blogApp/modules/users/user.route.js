const router = require("express").Router();
const validate = require("./user.validate");
const { checkRole, hasPermission } = require("../../utils/sessionManager");
const User = require("./user.model");
const userController = require("./user.controller");

router
  .route("/")
  .get(hasPermission("read"), async (req, res, next) => {
    try {
      const allUsers = await User.find();
      return res.status(200).json({
        success: true,
        result: allUsers,
        message: "All users fetched",
      });
    } catch (error) {
      next(error);
    }
  })
  .post(hasPermission("create"), validate, async (req, res, next) => {
    try {
      const { validatedData } = req;
      const { _doc } = await userController.createNewUser(validatedData);
      const { password, ...result } = _doc;
      if (!result)
        return res
          .status(500)
          .json({ success: false, result, message: "User Creation Failed" });
      return res.status(200).json({
        success: true,
        result: result ?? "N/A",
        message: "User Creation Successfull",
      });
    } catch (error) {
      console.log("🚀 ~ .post ~ error:", error);
      return res.status(409).json({
        success: false,
        error: error.keyValue,
        message: error.keyValue?.username
          ? "Username already exists"
          : error.keyValue?.email
          ? "The Email already exists"
          : "The provided data conflicts with existing records.",
      });
    }
  });

router.route("/:id").get(hasPermission("read"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userController.getUserByID(id).select("-password");
    if (!result)
      return res.status(404).json({
        success: false,
        result: result ?? "N/A",
        message: "Username not found",
      });

    return res.status(200).json({
      success: true,
      result: result ?? "N/A",
      message: "User fetched successfully",
    });
  } catch (error) {
    next(error);
  }
});

//USERNAME
router
  .route("/:username")
  .get(hasPermission("read"), async (req, res, next) => {
    try {
      const query = User.where({ username: req.params.username });
      let user;
      try {
        user = await query.findOne();
      } catch (error) {
        next(error);
      }
      if (user)
        return res.status(200).json({
          success: true,
          result: user ?? "N/A",
          message: "User Fetched",
        });
      else {
        return res.status(404).json({
          success: false,
          result: "N/A",
          message: "No user found with that username",
        });
      }
    } catch (error) {
      next(error);
    }
  })
  .patch(hasPermission("update"), async (req, res, next) => {
    try {
      const { username } = req.params;
      const user = await User.findOneAndUpdate({ username }, req.body, {
        new: true,
      });
      if (!user)
        return res.status(404).json({
          success: false,
          result: "N/A",
          message: `User with username ${username} not found`,
        });

      console.log(user);
      return res
        .status(200)
        .json({ success: true, result: user, message: "User Updated" });
    } catch (error) {
      next(error);
    }
  })
  .put(hasPermission("update"), async (req, res, next) => {
    try {
      const { username } = req.params;
      const user = await User.findOneAndReplace({ username }, req.body, {
        new: true,
      });
      User.replaceOne;
      if (!user)
        return res.status(404).json({
          success: false,
          result: "N/A",
          message: `User with username ${username} not found`,
        });

      console.log(user);
      return res
        .status(200)
        .json({ success: true, result: user, message: "User Updated" });
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
