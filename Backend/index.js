const express = require("express");
const app = express();
app.use("/", (req, res) => {
  res.send("server is runing");
});
app.listen(5000, console.log("server is runing on port 5000"));
