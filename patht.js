const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  const input = req.query.input;

  // Path traversal boşluğu
  const file = fs.readFileSync(input);

  res.send(file);
});

app.listen(3011);
