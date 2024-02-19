const User = require("./user.model");

//CRUD
const createNewUser = (payload) => {
  try {
    const result = User.create(payload);
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

const getUserByID = (userID) => {
  try {
    const result = User.findById(userID);
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};
module.exports = { createNewUser, getUserByID };
