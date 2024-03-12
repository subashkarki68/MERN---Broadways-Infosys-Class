require("dotenv").config();
const db = require("./config/db");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

//Morgan is a Logger
const indexRouter = require("./routes");
const PORT = +process.env.PORT;

const app = express();

db.then(() => {
  console.log("Connection to DB successful :-)");
  app.listen(PORT, () => {
    console.log("Application is Listening on port:", PORT);
  });
}).catch((e) => {
  console.log(":-( Cannot connect to DB:", e);
  process.exit(1);
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //to allow JSON as request body
app.use("/assets", express.static("public"));

app.use("/", indexRouter);
app.use((e, req, res, next) => {
  e = e ? e.toString() : "Something Went wrong";
  res.status(500).json({ msg: e });
});
