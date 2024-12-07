var path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const cors = require("cors");
const { log } = require("console");

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

console.log(__dirname);

// Variables for url and api key
let url;
let api_key = process.env.API_KEY;

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

async function analyzeUrl(url) {
  const endpoint = "https://api.textrazor.com/";

  const formData = new URLSearchParams();
  formData.append("apiKey", api_key);
  formData.append("url", url);
  formData.append("extractors", "entities,topics");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error analyzing URL:", error);
    throw error;
  }
}

// POST Route
const receiveUrl = async (req, res) => {
  url = req.body.message;
  analyzeUrl(url)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};
app.post("/add", receiveUrl);

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log(`App is running here: http://localhost:8000/`);
});
