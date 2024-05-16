const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "../dist")));
app.get("/", (req, res) => {
  res.send("Hellos Worsld!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
