const fs = require("fs");

const result = fs.readFileSync("./hello.txt").toString();

console.log(result);
