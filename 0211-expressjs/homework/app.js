const express = require("express");
const appRoutes = require("./routes");
const userRoutes = require("./routes/users");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
const PORT = 3000;

app.use("/", appRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("Application is running on port:", PORT);
});
