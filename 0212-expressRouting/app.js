require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

//Morgan is a Logger
const indexRouter = require("./routes");
const PORT = +process.env.PORT;

const app = express();

app.use(morgan("dev"));
app.use(express.json()); //to allow JSON as request body
app.use("/assets", express.static("public"));

app.use(
  "/",
  (req, res, next) => {
    req.body.country = "Nepal";
    next();
  },
  indexRouter
);
app.use((e, req, res, next) => {
  e = e ? e.toString() : "Something Went wrong";
  res.status(500).json({ msg: e });
});

app.listen(PORT, () => {
  console.log("Application is Listening on port:", PORT);
});
