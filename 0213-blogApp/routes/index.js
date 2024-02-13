const router = require("express").Router();
const blogRouter = require("../modules/blogs/blog.route");

router.use("/api/v1/blogs", blogRouter);

module.exports = router;
