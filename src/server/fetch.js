const dotenv = require("dotenv");
dotenv.config();

let api_key = process.env.API_KEY;

async function analyzeUrl(url) {
  const reqestParams = new FormData();
  reqestParams.append("apiKey", api_key);
  reqestParams.append("url", url);
  reqestParams.append("lang", "en");

  try {
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", {
      method: "POST",
      body: reqestParams,
      redirect: "follow",
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

module.exports = analyzeUrl;
