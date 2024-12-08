const dotenv = require("dotenv");
dotenv.config();

async function analyzeUrl(url) {
  const reqestParams = new FormData();
  reqestParams.append("key", process.env.API_KEY);
  reqestParams.append("url", url);
  reqestParams.append("lang", "en");

  try {
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", {
      method: "POST",
      contentType: "application/multipart/form-data",
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
