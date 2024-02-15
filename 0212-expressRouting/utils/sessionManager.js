const checkRole = (sysRole) => (req, res, next) => {
  // const userRole = sysRole.role;
  // console.log(userRole); //['admin']
  // if (!userRole) throw new Error("Role missing");
  // next();
  const userRole = req.headers?.role ? req.headers.role.split(",") : [];
  console.log(sysRole);
  const isValidRole = sysRole.some((role) => userRole.includes(role));
  console.log(isValidRole);
  if (!isValidRole) throw new Error("Permission denied");
  next();
};
//RBAC(Role Based access control)
//ABAC(Attribute)
//PBAC(Permission)

module.exports = checkRole;
