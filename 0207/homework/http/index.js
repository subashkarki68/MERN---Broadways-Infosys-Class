const { readFile } = require("fs");
const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    console.log("🚀 ~ .createServer ~ req, res:", req.url, req.method);
    res.setHeader("Content-Type", "text/html");
    readFile("./views/index.html", { encoding: "utf8" }, (err, data) => {
      if (err) res.end();
      else {
        //res.write("multiple lines")
        // res.write(data);
        res.end(data); //if there is just one line just write inside end
      }
    });
  })
  .listen(port, "localhost", () => console.log("Listening on port " + port));
