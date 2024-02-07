const fs = require("fs");

const dirPath = "./newDir";

if (!fs.existsSync(dirPath)) {
  fs.mkdir(dirPath, () => {
    console.log("Folder successfully creates at: " + dirPath);
  });
} else {
  console.log("Folder already exists, deleting...");
  setTimeout(() => {
    fs.rmdir(dirPath, () => {
      console.log(dirPath + " Deleted Successfully");
    });
  }, 2000);
}
