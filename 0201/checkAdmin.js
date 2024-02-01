//Write a JS funcion that checks if the iser has access or not
//Return boolean value

const userRole = ["user", "vendor"];
const sysRole = ["admin", "vendor"];

const checkRole = (ur, sr) => role.includes("admin");

const checkRoles = (ur, sr) => sr.some((role) => ur.includes(role));

console.log(checkRoles(userRole, sysRole));
