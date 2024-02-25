require("dotenv").config({ path: ".env.local" });

const express = require("express");
const morgan = require("morgan");
const MongoStore = require("connect-mongo");
const { connection } = require("mongoose");
const db = require("./config/db");
const session = require("express-session");

//Environment Variables
const PORT = +process.env.PORT;

const app = express();
const indexRouter = require("./routes");

//MongoDB Store to store sessions
const store = MongoStore.create({
  clientPromise: db.then(() => connection.getClient()),
  autoRemove: "native",
});

//App uses expression-session
app.use(
  session({
    cookie: {},
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port:`, PORT);
});

//Error Handling
app.use((error, req, res, next) => {
  error = error ? error.toString() : "Something went wrong";
  res.status(500).json(error);
});
