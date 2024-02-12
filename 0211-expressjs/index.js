const express = require("express");
const indexRouter = require("./routes");

const app = express();
const PORT = 3000;

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("Application is running on port:", PORT);
});
