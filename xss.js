const express = require("express");

const app = express();

app.get("/", (req, res) => {
  let input = req.query.input;

  
  res.send(`<p>${input}</p>`);
});

app.listen(3010);
