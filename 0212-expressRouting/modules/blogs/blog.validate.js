// ██████╗ ██╗      ██████╗  ██████╗     ██╗   ██╗ █████╗ ██╗     ██╗██████╗  █████╗ ████████╗███████╗
// ██╔══██╗██║     ██╔═══██╗██╔════╝     ██║   ██║██╔══██╗██║     ██║██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
// ██████╔╝██║     ██║   ██║██║  ███╗    ██║   ██║███████║██║     ██║██║  ██║███████║   ██║   █████╗
// ██╔══██╗██║     ██║   ██║██║   ██║    ╚██╗ ██╔╝██╔══██║██║     ██║██║  ██║██╔══██║   ██║   ██╔══╝
// ██████╔╝███████╗╚██████╔╝╚██████╔╝     ╚████╔╝ ██║  ██║███████╗██║██████╔╝██║  ██║   ██║   ███████╗
// ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝       ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝

const Joi = require("joi");
const { titleMessages, authorMessages } = require("../../utils/joiMessages");

const blogSchema = Joi.object({
  title: Joi.string().min(3).max(60).required().messages(titleMessages),
  roles: Joi.array().items(
    Joi.string().valid("draft", "published").default("draft")
  ),
  content: Joi.string().required(true),
  pictureUrl: Joi.string().required(true),
});

const blogValidate = (req, res, next) => {
  const { error } = blogSchema.validate(req.body);
  if (error) next(error.details[0].message);
  next();
};

module.exports = { blogValidate };
