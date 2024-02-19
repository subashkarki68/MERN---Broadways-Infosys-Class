const router = require("express").Router();
const validate = require("./user.validate");
const { checkRole, hasPermission } = require("../../utils/sessionManager");
const User = require("../../models/User");

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
  .post(
    hasPermission("create"),
    checkRole(["admin", "user"]),
    validate,
    async (req, res, next) => {
      try {
        const { validatedData } = req;
        const newUser = new User(validatedData);

        let savedUser;
        try {
          savedUser = await newUser.save();
        } catch (err) {
          if (err.code === 11000 && err.keyValue) {
            return res.status(409).json({
              success: false,
              result: "N/A",
              message: "username or email already exists",
            });
          }
          return next(err);
        }

        return res.status(200).json({
          success: true,
          result: savedUser,
          message: "User Added Successfully",
        });
      } catch (error) {
        next(error);
      }
    }
  );

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
