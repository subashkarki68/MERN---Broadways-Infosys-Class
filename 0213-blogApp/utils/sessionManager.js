const roles = {
  superadmin: ["create", "read", "update", "delete", "download", "upload"],
  admin: ["create", "read", "update", "delete", "download", "upload"],
  staffAdmin: ["create", "read", "update", "delete", "download", "upload"],
  staff: ["create", "read", "update", "download", "upload"],
  createOnly: ["create", "read", "download", "upload"],
  readOnly: ["read", "download"],
};

const checkRole = (sysRoles) => (req, res, next) => {
  const userRoles = req.headers["x-roles"]?.split(",") || [];
  const isValidRole = userRoles.some((role) => sysRoles.includes(role));
  if (!isValidRole) return res.status(403).json({ error: "Unauthorized" });
  next();
};

const hasPermission =
  (permission = "none") =>
  (req, res, next) => {
    cUserRoles = req.headers["x-roles"]?.split(",") || [];
    if (
      cUserRoles && cUserRoles.some((uRole) => roles[uRole])
        ? cUserRoles.some((uRole) => roles[uRole].includes(permission))
        : false
    )
      next();
    else {
      return res
        .status(403)
        .json({ error: "Forbidden: Insufficient permissions" });
    }
  };

module.exports = { checkRole, hasPermission };
