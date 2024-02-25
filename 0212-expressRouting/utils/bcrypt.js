const bcrypt = require("bcrypt");

function hashPassword(next) {
  if (!this.isModified("password")) {
    console.log(
      "Password not modified. Going Next() from hashPassword in bcrypt."
    );
    next();
  }
  console.log("Hassing password for: ", this.name);
  this.password = bcrypt.hashSync(this.password, +process.env.SALT_ROUNDS);
  next();
}

function comparePassword(candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
}

module.exports = { hashPassword, comparePassword };
