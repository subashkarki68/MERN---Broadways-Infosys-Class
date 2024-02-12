const router = require("express").Router();
const blogRouter = require("../modules/blogs/blog.route");
const userRouter = require("../modules/users/user.route");
const categoryRouter = require("../modules/categories/category.route");

router.use("/api/v1/blogs", blogRouter);
router.use("/api/v1/users", userRouter);
router.use("/api/v1/categories", categoryRouter);

module.exports = router;
