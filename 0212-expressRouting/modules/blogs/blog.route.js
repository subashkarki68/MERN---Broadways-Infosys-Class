const router = require("express").Router();
const controller = require("./blog.controller");
const { checkRole } = require("../../utils/sessionManager");
const {
  checkEmptyData,
  sendSuccessResponse,
} = require("../../utils/responseHandler");
const { blogValidate } = require("./blog.validate");

router
  .route("/")
  //Add checkRole to get
  .get(async (req, res, next) => {
    try {
      const result = await controller.listBlog();
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  })
  .post(blogValidate, checkRole(["admin", "user"]), (req, res, next) => {
    try {
      const result = controller.createBlog(req.currentUser, req.body);
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
