require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

//Morgan is a Logger
const indexRouter = require("./routes");
const PORT = +process.env.PORT;

const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("MongoDB Database Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB COnnection Failure: ", err);
  });

app.use(morgan("dev"));
app.use(express.json()); //to allow JSON as request body
app.use("/assets", express.static("public"));

app.use("/", indexRouter);
app.use((e, req, res, next) => {
  e = e ? e.toString() : "Something Went wrong";
  res.status(500).json({ msg: e });
});

app.listen(PORT, () => {
  console.log("Application is Listening on port:", PORT);
});
