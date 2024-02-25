const { Schema, model } = require("mongoose");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    roles: {
      type: [String],
      enum: ["admin", "user"],
      default: ["user"],
      required: true,
    },
    isActive: { type: Boolean, default: true },
    fpToken: { type: String },
    fpTokenExpires: { type: Date },
  },
  { timestamps: true }
);

userSchema.pre("save", hashPassword);
userSchema.methods.comparePassword = comparePassword;

const User = new model("User", userSchema);

module.exports = User;
