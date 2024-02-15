require("dotenv").config({ path: ".env.local" });

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = +process.env.PORT;
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

const app = express();
const indexRouter = require("./routes");

app.use(express.json());
app.use(morgan("dev"));
app.use("/", indexRouter);

//Error Handling
app.use((error, req, res, next) => {
  error = error ? error.toString() : "Something went wrong";
  res.status(500).json(error);
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
