const User = require("../modules/users/user.model");
const { verifyToken } = require("./token");

const errorMsg = (msg) => {
  throw new Error(msg);
};

const isSuperAdmin = (req, res, next) => {
  try {
    const superAdminPassword = req.headers["x-super-admin-password"];
    if (!superAdminPassword)
      throw new Error("Please provide your super admin password.");
    const superAdmin = process.env.SUPER_ADMIN_PASSWORD === superAdminPassword;

    console.log("🚀 ~ isSuperAdmin ~ superAdmin:", superAdmin);
    if (!superAdmin) throw new Error("Password incorrect for Super Admin");
    next();
  } catch (error) {
    next(error);
  }
};

const checkRole = (sysRole) => async (req, res, next) => {
  try {
    const access_token = req.headers["access-token"];
    if (!access_token) errorMsg("No access");
    const { data } = verifyToken(access_token);
    if (!data) errorMsg("Failed to verify token");
    //Check if user is active or not
    const user = await User.findOne({ email: data.email, isActive: true });
    if (!user) errorMsg("Can't find user");
    req.currentUser = user._id;
    const isValidRole = data.roles.some((role) => sysRole.includes(role));
    if (!isValidRole) errorMsg("Permission Denied");
    next();
  } catch (error) {
    next(error);
  }
};
//RBAC(Role Based access control)
//ABAC(Attribute)
//PBAC(Permission)

module.exports = { checkRole, isSuperAdmin };
