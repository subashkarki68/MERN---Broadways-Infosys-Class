const jtw = require("jsonwebtoken");

const generateToken = (payload) => {
  return jtw.sign(
    {
      data: payload,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_DURATION }
  );
};

const verifyToken = (token) => {
  return jtw.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
