//Write a js module that converts string to properCase
//write a js module that format number in comma: 10000 => 10,000
//write a js module that checks if the email is valid or not

const { toProperCase, toComma, isEmail, isEmailReg } = require("./libraries");

console.log(toProperCase("Apple iS tasTy"));
console.log(toComma("10000000000"));
console.log(isEmail("Subashkarki68@gmail.com"));
console.log(isEmailReg("subashkarki68@gmail.com"));
