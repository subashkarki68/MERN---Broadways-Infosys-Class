const fs = require("fs");
const filePath = "./files/helloWorld.txt";
if (fs.existsSync(filePath)) {
  fs.readFile(filePath, (error, data) => {
    if (error) console.log(error);
    else console.log(data.toString());
  });
}
