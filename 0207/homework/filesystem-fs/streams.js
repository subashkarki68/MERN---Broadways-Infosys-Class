const fs = require("fs");

const readStream = fs.createReadStream("./streamData/bigData1.txt", {
  encoding: "utf8",
  highWaterMark: 10,
});

const writeStream = fs.createWriteStream("./streamData/writtenData.txt");

// readStream.on("data", (chunk) => {
//   console.log("--- NEW CHUNK ---");
//   console.log(chunk);
//   //   writeStream.write("\nNew Chunk\n");
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream).on("error", console.error);

process.stdin.pipe(fs.createWriteStream("./myText.txt"));
