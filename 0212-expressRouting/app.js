const express = require("express");
const indexRouter = require("./routes");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello from Index" });
});

app.use(express.json());
app.use("/", indexRouter);
app.listen(PORT, () => {
  console.log("Application is Listening on port:", PORT);
});
