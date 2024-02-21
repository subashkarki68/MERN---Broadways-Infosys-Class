const User = require("./user.model");
const bcrypt = require("../../utils/bcrypt");
const mailer = require("../../services/mailer");
const { generateToken } = require("../../utils/token");

// CREATE
const create = async (payload) => {
  try {
    const { _doc } = await User.create(payload);
    const { password, ...result } = _doc; // Not to expose password to frontEnd
    return result;
  } catch (error) {
    // Handle specific errors or provide a generic error message
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

// FIND
const findBy = (query) => {
  try {
    return User.find(query).select("-password");
  } catch (error) {
    console.error("Error finding user:", error);
    throw new Error("Error finding user");
  }
};

// FIND ALL
const findAll = () => {
  try {
    return User.find().select("-password");
  } catch (error) {
    console.error("Error finding all users:", error);
    throw new Error("Error finding all users");
  }
};

// UPDATE
const updateAllInID = (userID, updatedPayload) => {
  try {
    return User.findOneAndReplace({ _id: userID }, updatedPayload, {
      new: true,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Error updating user");
  }
};

const updateOneInID = (userID, updatedPayload) => {
  try {
    return User.findOneAndUpdate({ _id: userID }, updatedPayload, {
      new: true,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Error updating user");
  }
};

// DELETE
const deleteByID = (userID) => {
  try {
    return User.findByIdAndDelete(userID);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Error deleting user");
  }
};

//OPEN Router Register
const register = async (payload) => {
  payload.password = bcrypt.hashPassword(payload.password);
  const user = await User.create(payload);
  if (!user) throw new Error("Registration Failed");
  //Send Email
  mailer(payload.email, "Register", "Thank You for Registering");
  console.log(user);
};

const login = async (payload) => {
  const { email, password } = payload;
  if (!email || !password)
    throw new Error("Email and Password must be provided");

  const user = await User.findOne({ email });
  if (!user) throw new Error("User doesn't exists");
  const isValidPw = bcrypt.checkPassword(password, user.password);
  if (!isValidPw) throw new Error("Email or Password mismatched");
  const tokenData = {
    name: user.name,
    password: user.password,
    email: user.email,
    roles: user.roles,
  };
  return generateToken(tokenData);
};

module.exports = {
  create,
  findBy,
  findAll,
  updateAllInID,
  updateOneInID,
  deleteByID,
  register,
  login,
  generateToken,
};
