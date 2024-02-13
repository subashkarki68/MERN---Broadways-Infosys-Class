require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const PORT = +process.env.PORT;

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
