const toProperCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const toComma = (num) => Number(num).toLocaleString();

const isEmail = (email) => email.includes("@");

const isEmailReg = (email) => {
  const res = email.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  return res > -1;
};
module.exports = {
  toProperCase,
  toComma,
  isEmail,
  isEmailReg,
};
