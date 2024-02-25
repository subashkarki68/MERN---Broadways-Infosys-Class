const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

console.log("Connecting to DB...");

module.exports = mongoose.connect(DB_URL).then(() => {
  console.log("Connection to DB Successful");
});
