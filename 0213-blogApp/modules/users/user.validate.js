const Joi = require("joi");

const emailMessages = {
  "string.base": "Email must be a string",
  "string.empty": "Email is required",
  "string.email": "Invalid email format",
  "any.required": "Email is required",
};
const nameMessages = {
  "string.base": "Name must be a string",
  "string.empty": "Name is required",
  "string.min": "Name must be at least {#limit} characters",
  "string.max": "Name must not exceed {#limit} characters",
  "any.required": "Name is required",
};

const ageMessages = {
  "number.base": "Age must be a number",
  "number.empty": "Age is required",
  "number.integer": "Age must be an integer",
  "number.min": "Age must be at least {#limit}",
  "number.max": "Age must not exceed {#limit}",
};

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  name: Joi.string().required().messages(nameMessages),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  repeat_password: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "Password Mismatch",
  }),

  age: Joi.number().min(18).max(100).required().messages(ageMessages),

  access_token: [Joi.string(), Joi.number()],

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .messages(emailMessages),
})
  .with("username", "age")
  .xor("password", "access_token")
  .with("password", "repeat_password");

const validate = (req, res, next) => {
  try {
    const { error, value } = schema.validate(req.body);
    if (error) {
      const emsg = error.details[0].message;
      return res.status(400).json({ Validation_Error: emsg });
    }
    req.validatedData = value;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validate;
