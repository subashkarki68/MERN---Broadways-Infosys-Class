const Joi = require("joi");

const adminRegistrationSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .required(),
  name: Joi.string().min(3).max(60).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  isActive: Joi.boolean().default(true),
});

const registrationSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .required(),
  name: Joi.string().min(3).max(60).required(),
  // username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  // repeat_password: Joi.ref("password"),
  // isActive: Joi.boolean().strict(),
  // isBlocked: Joi.boolean().strict(),
  // country: Joi.string(),
  //   age: Joi.number().pattern(new RegExp("^[18-200]")),
  //Array of roles fixes [admin,user],
  //dob : age > 18
  isActive: Joi.boolean().default(true),
  roles: Joi.array().items(Joi.string().valid("user", "admin").default("user")),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const adminRegistrationValidate = (req, res, next) => {
  const { error } = adminRegistrationSchema.validate(req.body);
  if (error) next(error.details[0].message);
  next();
};

const registrationValidate = (req, res, next) => {
  req.body.roles = ["user"];
  //Joi validation
  const { error } = registrationSchema.validate(req.body);
  if (error) next(error.details[0].message);
  //success next
  //else data milena
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
