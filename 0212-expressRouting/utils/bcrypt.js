const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, +process.env.SALT_ROUNDS);
};

const checkPassword = (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};

module.exports = { hashPassword, checkPassword };
