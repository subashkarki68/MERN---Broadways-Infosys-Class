const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com"] },
  }),
  name: Joi.string().required(),
  // username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  // repeat_password: Joi.ref("password"),
  // isActive: Joi.boolean().strict(),
  // isBlocked: Joi.boolean().strict(),
  // country: Joi.string(),
  //   age: Joi.number().pattern(new RegExp("^[18-200]")),
  //Array of roles fixes [admin,user],
  //dob : age > 18
});

const validate = (req, res, next) => {
  //Joi validation
  const { error, test } = schema.validate(req.body);
  if (error) next(error.details[0].message);
  //success next
  //else data milena
  next();
};

module.exports = validate;
