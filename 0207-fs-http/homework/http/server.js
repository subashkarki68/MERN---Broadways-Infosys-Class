const { readFile } = require("fs");
const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    console.log("🚀 ~ .createServer ~ req, res:", req.url, req.method);
    res.setHeader("Content-Type", "text/html");
    let path = "views/";
    switch (req.url) {
      case "/":
        path += "index";
        res.statusCode = 200;
        break;
      case "/about":
        path += "about";
        res.statusCode = 200;
        break;
      case "/about-me":
        res.statusCode = 301;
        res.setHeader("Location", "/about");
        res.end();
        break;
      case "/contact":
        path += "contact";
        res.statusCode = 200;
        break;
      case "/portfolio":
        path += "portfolio";
        res.statusCode = 200;
        break;
      case "/services":
        path += "services";
        res.statusCode = 200;
        break;
      default:
        path += "404";
        res.statusCode = 404;
        break;
    }
    path += ".html";
    readFile(path, { encoding: "utf8" }, (err, data) => {
      if (err) res.end();
      else {
        //res.write("multiple lines")
        // res.write(data);
        res.end(data); //if there is just one line just write inside end
      }
    });
  })
  .listen(port, "localhost", () => console.log("Listening on port " + port));
