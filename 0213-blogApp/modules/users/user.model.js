const mongoose = require("mongoose");

//Password Hashing and Salting
const bcrypt = require("bcrypt");
// const saltRounds = 1;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 30,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9]+$/.test(v);
        },
        message: "Username must be alphanumeric",
      },
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    password: {
      type: String,
      minlength: 3,
      maxlength: 30,
      match: /^[a-zA-Z0-9]{3,30}$/,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 100,
      validate: {
        validator: Number.isInteger,
        message: "Age must be an integer",
      },
    },
    access_token: {
      type: mongoose.Schema.Types.Mixed,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(v);
        },
        message: "Invalid email format",
      },
    },
  },
  { timestamps: true }
); //Automatically add time stamps such as createdBy and updatedAt

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
