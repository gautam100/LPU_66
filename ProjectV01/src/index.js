const express = require("express");
const bodyParser = require("body-parser");
// importing categoryRoute.js
const categoryRoute = require("./routes/categoryRoute"); 
const authRoute = require("./routes/authRoute");

const app = express();
app.use(bodyParser.json());

app.use("/api", categoryRoute);
app.use("/api", authRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
