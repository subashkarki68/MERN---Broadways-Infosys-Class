//Write a JS function that returns boolean value when we compar etwo roles

/*
EG:
const userRoles = ['user', 'vendor'];
const sysRoles = ['admin', 'vendor']
*/

const userRoles = ["user", "vendor"];
const sysRoles = ["admin", "apple"];

const checkRole = (userRoles, sysRoles) => {
  return userRoles.some((role) => sysRoles.includes(role));
};

console.log(checkRole(userRoles, sysRoles));

//write a js function that returns the number in array that are divisible by 5

const numbers = [1, 3, 4, 5, 6, 15, 7];

const divByFive = (arr) => arr.filter((n) => n % 5 === 0);
console.log(divByFive(numbers));

//Write a JS function that handles pagination

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page = 1;
const limit = 2;

const paginate = (data, page, limit) => {
  return data.slice(page, limit);
};

console.log(paginate(data, 1, 2));
