const path = require("path");

module.exports = {
  entry: "./index.js", // Your entry JavaScript file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
