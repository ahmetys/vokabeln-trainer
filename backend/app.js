require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");
const apiKey = process.env.API_KEY;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("/", (req, res) => {
  res.send("Hellos Worsld!");
});
app.post("/", cors(), (req, res) => {
  axios
    .get(`https://api.pons.com/v1/dictionary?q=${encodeURIComponent(req.body.searchTerm)}&l=detr`, {
      headers: {
        "X-Secret": apiKey,
        "User-Agent": false,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
