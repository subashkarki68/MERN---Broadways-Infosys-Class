const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    console.log("🚀 ~ .createServer ~ req, res:", req.url, req.method);
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello Subash<h1>");
    res.end();
  })
  .listen(port, "localhost", () => console.log("Listening on port " + port));
