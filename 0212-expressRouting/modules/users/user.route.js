const router = require("express").Router();
const validate = require("./user.validate");
const checkRole = require("../../utils/sessionManager");
const controller = require("./user.controller");

//GET ALL USERS
router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const { limit, page, search } = req.query; //USED FOR SEARCH, SORTING AND FILTER
      //DATABASE OPERATION
      const result = await controller.findAll();
      return res.status(200).json({
        success: true,
        result,
        message: "All Users Fetched Successfully",
      });
      // apple;
    } catch (e) {
      next(e);
    }
  })
  .post(checkRole(["admin"]), validate, async (req, res, next) => {
    try {
      //DATABASE OPERATION
      const result = await controller.create(req.body);
      return res
        .status(200)
        .json({ success: true, result, message: "User Created Successfully" });
    } catch (e) {
      next(e);
    }
  });

//ADD NEW USER

//UPDATE SINGLE USER FOR MORE THAN 2 FIELDS
router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await controller.findBy({ _id: id }).select("-password");
      return res
        .status(200)
        .json({ success: true, result, message: "User Fetched Successfully" });
    } catch (error) {
      next(error);
    }
  })
  .put(validate, async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      //  //DATABASE OPERATION
      const result = await controller
        .updateAllInID(id, data)
        .select("-password");
      return res
        .status(200)
        .json({ success: true, result, message: "User Updated Successfully" });
    } catch (e) {
      next(e);
    }
  })
  .patch(async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      //DATABASE OPERATION
      const result = await controller
        .updateOneInID(id, data)
        .select("-password");
      return res
        .status(200)
        .json({ success: true, result, message: "User Updated Successfully" });
    } catch (e) {
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { id } = req.params;
      //DATABASE OPERATION
      const result = await controller.deleteByID(id);
      return res
        .status(200)
        .json({ success: true, result, message: "User Deleted Successfully" });
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
