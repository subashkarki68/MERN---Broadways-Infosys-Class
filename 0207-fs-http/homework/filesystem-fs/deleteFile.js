const fs = require("fs");

const path = "./files/deleteMe.txt";
const content = "I will be deteted";

if (fs.existsSync(path)) fs.unlink(path, () => console.log(path + " Deleted"));
else fs.writeFile(path, content, () => console.log("file written sicces"));
