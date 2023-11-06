const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const studentRoutes = require("./routes/studentRoutes");

app.use(studentRoutes);

app.listen(3000, () => {
  console.log("Server Started");
});
