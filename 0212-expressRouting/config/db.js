const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

console.log("trying to connect to db...");

module.exports = mongoose.connect(DB_URI, { dbName: "mern-BlogApp" });
