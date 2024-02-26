const User = require("./user.model");
const mailer = require("../../services/mailer");
const {
  generateSixRandomDigits,
  verifyToken,
  generateAccessToken,
} = require("../../utils/token");

//throw error message
const errorMsg = (msg) => {
  throw new Error(msg);
};

// CREATE
const createUser = async (payload) => {
  try {
    const { _doc } = await User.create(payload);
    const { password, ...result } = _doc; // Not to expose password to frontEnd
    return result;
  } catch (error) {
    // Handle specific errors or provide a generic error message
    console.error("Error creating user:", error);
    if (error.code === 11000) errorMsg("Email already exists");
    errorMsg("Error creating user");
  }
};

// FIND
const findBy = (query) => {
  try {
    return User.find(query).select("-password");
  } catch (error) {
    console.error("Error finding user:", error);
    errorMsg("Error finding user");
  }
};

// FIND ALL
const findAll = () => {
  try {
    return User.find().select("-password");
  } catch (error) {
    console.error("Error finding all users:", error);
    errorMsg("Error finding all users");
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
    errorMsg("Error updating user");
  }
};

const updateOneInID = (userID, updatedPayload) => {
  try {
    return User.findOneAndUpdate({ _id: userID }, updatedPayload, {
      new: true,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    errorMsg("Error updating user");
  }
};

// DELETE
const deleteByID = (userID) => {
  try {
    return User.findByIdAndDelete(userID);
  } catch (error) {
    console.error("Error deleting user:", error);
    errorMsg("Error deleting user");
  }
};

//OPEN Router Register
const register = async (payload) => {
  // delete payload.roles;
  const user = await createUser(payload);
  if (!user) errorMsg("Registration Failed");
  //Send Email
  mailer(payload.email, "Register", "Thank You for Registering");
  console.log(user);
  const { name, email, roles } = user;
  const tokenData = { name, email, roles };
  const token = generateAccessToken(tokenData);
  console.log(token);
};

//Register by Admin
const registerByAdmin = async (payload) => {
  const user = await createUser(payload);
  return user;
};

const login = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) errorMsg("Email and Password must be provided");

  const user = await User.findOne({ email, isActive: true });
  if (!user) errorMsg("User doesn't exists");
  // const isValidPw = bcrypt.checkPassword(password, user.password);
  const isValidPw = user.comparePassword(password);
  if (!isValidPw) errorMsg("Email or Password mismatched");
  const tokenData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles,
  };
  return generateAccessToken(tokenData);
};

const generateFPtoken = async (payload) => {
  const { email } = payload;
  if (!email) errorMsg("Email can't be empty");
  const user = await User.findOne({ email, isActive: true });
  if (!user) errorMsg("User doesn't exist");
  const fpToken = generateSixRandomDigits();
  const updateUser = await User.findOneAndUpdate(
    { email },
    {
      fpToken,
      fpTokenExpires: new Date(Date.now() + 5 * 60 * 1000),
    }
  );
  if (!updateUser) errorMsg("Something went wrong, try again in a moment.");
  // send that token to user email
  await mailer(
    email,
    "Forget Password Token",
    `Your forget password token is ${fpToken}, please don't share it with anyone.`
  );
  return { success: "Forgot password token generated successfully" };
};

const verifyFPtoken = async (payload) => {
  //user exist
  const { email, newPassword } = payload;
  const fpToken = payload.fpToken.toString();
  if (!email) {
    errorMsg("Must provide email as email");
  } else if (!fpToken) {
    errorMsg("Must provide forgot password token");
  } else if (!newPassword) {
    errorMsg("Must provide new password");
  }
  const user = await User.findOne({ email, isActive: true });
  if (!user) errorMsg("User doesn't exist");
  //Check if Token is expired or not
  const currentTime = new Date();
  if (user.fpTokenExpires && currentTime > user.fpTokenExpires) {
    throw new Error("Token has expired");
  }
  const isValidToken = fpToken === user.fpToken;
  if (!isValidToken) errorMsg("Token mismatch");
  const isSameAsOld = await user.comparePassword(newPassword);
  if (isSameAsOld) errorMsg("New password can't be same as your old one.");
  user.password = newPassword;
  const updatedUser = await user.save();
  if (!updatedUser) errorMsg("Process failed. please try again");
  user.fpToken = "";
  user.fpTokenExpires = "";
  await user.save();
  return { success: "Password reset successfully" };
};

const changePassword = async (_id, payload) => {
  if (!_id) errorMsg("Can't find your account");
  else if (!payload) errorMsg("Update details not provided");

  const { password, newPassword } = payload;
  if (!password) {
    errorMsg("Password is missing");
  } else if (!newPassword) {
    errorMsg("New Password is missing");
  }
  const user = await User.findOne({ _id, isActive: true });
  if (!user) errorMsg("User not found");
  const isValidPw = user.comparePassword(password);
  if (!isValidPw) errorMsg("Your password is incorrect");
  user.password = newPassword;
  const updatedUser = await user.save();
  if (!updatedUser) errorMsg("Process failed, please try again");
  return { success: "Password changed successfully" };
};

const resetPasswordByAdmin = async (payload) => {
  //Password can be reset by Admin only
  const { email, newPassword } = payload;
  if (!email) {
    errorMsg("Email is missing");
  } else if (!newPassword) {
    errorMsg("Password is missing");
  }
  const user = await User.findOne({ email, isActive: true });
  if (!user) errorMsg("User not found");
  user.password = newPassword;
  const updatedUser = await user.save();
  if (!updatedUser) errorMsg("Process failed, please try again");
  return { success: "Password reset successfully" };
};

const blockUserByAdmin = async (payload) => {
  const { email } = payload;
  if (!email) errorMsg("Email is missing");
  const user = await User.findOne({ email });
  if (!user) errorMsg("User not found");
  const status = { isActive: !user.isActive };
  const updatedUser = await User.updateOne({ email }, status);
  if (!updatedUser) errorMsg("Process failed, plase try again");
  return `User ${status?.isActive ? "unblocked" : "blocked"} Successfully`;
};

const getProfile = async (_id) => {
  if (!_id) errorMsg("Can't find your account");
  return await User.findOne({ _id, isActive: true }).select("-password");
};

const updateProfile = async (_id, payload) => {
  if (!_id) errorMsg("Can't find your account");
  else if (!payload) errorMsg("Update details not provided");

  const allowedFields = ["name"];
  const updatedPayload = {};

  allowedFields.forEach((field) => {
    if (payload[field] !== undefined) updatedPayload[field] = payload[field];
  });
  const updatedUser = await User.findOneAndUpdate({ _id }, updatedPayload, {
    new: true,
  }).select("-password");
  if (!updatedUser) errorMsg("User not found or blocked");
  return updatedUser;
};

module.exports = {
  createUser,
  findBy,
  findAll,
  updateAllInID,
  updateOneInID,
  deleteByID,
  register,
  registerByAdmin,
  login,
  generateAccessToken,
  generateFPtoken,
  verifyFPtoken,
  changePassword,
  resetPasswordByAdmin,
  blockUserByAdmin,
  getProfile,
  updateProfile,
};
