const express = require("express");
const cors = require("cors");
const analyzeUrl = require("./fetch");

const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/api/", function (req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  analyzeUrl(url)
    .then((data) => res.send(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.listen(8000, function () {
  console.log(`App is running here: http://localhost:8000/`);
});
