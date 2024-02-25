const jtw = require("jsonwebtoken");
const crypto = require("crypto");

const generateAccessToken = (payload) => {
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

const generateSixRandomDigits = () => crypto.randomInt(100000, 999999);

module.exports = { generateSixRandomDigits, verifyToken, generateAccessToken };
