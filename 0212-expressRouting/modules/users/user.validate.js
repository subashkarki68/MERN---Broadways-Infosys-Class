const Joi = require("joi");
const {
  emailMessages,
  nameMessages,
  passwordMessages,
} = require("../../utils/joiMessages");

const adminRegistrationSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .required()
    .messages(emailMessages),
  name: Joi.string().min(3).max(60).required().messages(nameMessages),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,60}$"))
    .required()
    .min(3)
    .max(60)
    .messages(passwordMessages),
  isActive: Joi.boolean().default(true),
});

const registrationSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .required()
    .messages(emailMessages),
  name: Joi.string().min(3).max(60).required().messages(nameMessages),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,60}$"))
    .required()
    .min(3)
    .max(60)
    .messages(passwordMessages),
  isActive: Joi.boolean().default(true),
  roles: Joi.array().items(Joi.string().valid("user", "admin").default("user")),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .required()
    .messages(emailMessages),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,60}$"))
    .required()
    .min(3)
    .max(60)
    .messages(passwordMessages),
});

const adminRegistrationValidate = (req, res, next) => {
  const { error } = adminRegistrationSchema.validate(req.body);
  if (error) next(error.details[0].message);
  next();
};

const registrationValidate = (req, res, next) => {
  req.body.roles = ["user"];
  const { error } = registrationSchema.validate(req.body);
  if (error) next(error.details[0].message);
  next();
};

const loginValidate = (req, res, next) => {
  const { error, test } = loginSchema.validate(req.body);
  if (error) next(error.details[0].message);
  next();
};

module.exports = {
  adminRegistrationValidate,
  registrationValidate,
  loginValidate,
};
