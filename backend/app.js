const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");

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
        "X-Secret": "43df1e52b521b8536ed3e495e9fff86b177a610e8f5373fb43a7c3395e291b29",
        "User-Agent": false,
      },
    })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
