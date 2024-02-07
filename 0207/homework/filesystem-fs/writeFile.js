const fs = require("fs");

const filePath = "./files/newFile.txt";
const fileContent = "This is newly created file.";

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, fileContent, () =>
    console.log("File wriiten in path: " + filePath)
  );
} else {
  console.log("File Already exists");
}

fs.writeFile("./test.txt", "Testing me", () => console.log("Succs"));
