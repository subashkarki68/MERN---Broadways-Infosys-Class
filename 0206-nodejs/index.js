// const http = require("node:http");
import http from "http";

const port = 8000;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  })
  .listen(port);

console.log(`Application is running on port: ${port}`);
