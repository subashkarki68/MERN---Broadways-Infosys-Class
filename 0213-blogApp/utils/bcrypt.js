const bcrypt = require("bcrypt");

const hashPassword = async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword };
