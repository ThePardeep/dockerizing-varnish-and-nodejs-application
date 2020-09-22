const express = require("express");

const app = express();

const PORT = process.env.PORT || 2020;

let i = 0;

app.get("/", (req, res) => {
  console.log(new Date().toTimeString());
  res.send("I = " + i);
  i++;
});

app.listen(PORT, () => console.log("Server Running At PORT : " + PORT));
