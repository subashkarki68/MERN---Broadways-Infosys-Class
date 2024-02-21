const mail = require("../../services/mailer");
const { generateToken } = require("../../utils/token");
const User = require("./user.model");

//CRUD
const createNewUser = async (payload) => {
  try {
    const result = await User.create(payload);
    if (!result) throw new Error("User Creation Failed");
    return mail(
      result.email,
      "Registration Successful",
      "Thank You for registering"
    );
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};
const loginWithEmail = async (payload) => {
  try {
    const { email, password } = payload;
    if (!email || !password) throw new Error("Email and Password is a must.");
    const user = await User.findOne({ email });
    if (!user) throw new Error(`User with ${email} not found.`);
    const isValidPword = await user.comparePassword(password);
    if (!isValidPword) throw new Error("Email or Password mismatched");
    const tokenData = {
      name: user.name,
      email,
      roles: user.roles,
      username: user.username,
    };
    return generateToken(tokenData);
    return user;
  } catch (error) {
    console.error("Loging with email Failed:", error);
    throw new Error("Loging with email Failed");
  }
};
const loginWithUsername = async (payload) => {
  try {
    const { username, password } = payload;
    if (!username || !password)
      throw new Error("Email and Password is a must.");
    const user = await User.findOne({ username });
    if (!user) throw new Error(`User with ${username} not found.`);
    const isValidPword = await user.comparePassword(password);
    if (!isValidPword) throw new Error("Username or Password mismatched");
    const tokenData = {
      name: user.name,
      username,
      roles: user.roles,
      email: user.email,
    };
    return generateToken(tokenData);
    return user;
  } catch (error) {
    console.error("Loging with username Failed:", error);
    throw new Error("Loging with username Failed");
  }
};

const login = (payload) => {
  if (payload.username) return loginWithUsername(payload);
  if (patload.email) return loginWithEmail(payload);
  throw new Error("Something Unexpected happened");
};

const getUserByID = (userID) => {
  try {
    const result = User.findById(userID);
    return result;
  } catch (error) {
    console.error("Error finding user:", error);
    throw new Error("Error finding user");
  }
};
module.exports = { createNewUser, getUserByID, login };
