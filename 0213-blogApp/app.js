require("dotenv").config({ path: ".env.local" });

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = +process.env.PORT;

console.log("Trying to connect to MongoDB...");
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDB database connection successful");
    app.listen(PORT, () => {
      console.log(`Listening on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB database connection unsuccessful", err);
  });

// const db = mongoose.connection;

// db.on("error", (err) => console.error("MongoDB connection error: ", err));
// db.once("open", () => {
//   console.log("Connected to MongoDB!");
// });

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
