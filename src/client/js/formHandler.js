import { checkUrl } from "./urlChecker";

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);

const result = document.getElementById("results");

function mapSentiment(sentiment) {
  if (sentiment === "P+") return "Strong Positive";
  if (sentiment === "P") return "Positive";
  if (sentiment === "N") return "Negative";
  if (sentiment === "N+") return "Strong Negative";
  if (sentiment === "NEU") return "Neutral";
  return "Without Polarity";
}

function updateUI(data) {
  // Clear the previous results
  result.innerHTML = "";

  // Create new elements for the results
  const sentimentValue = mapSentiment(data.score_tag);
  const sentiment = document.createElement("p");
  sentiment.textContent = `Sentiment: ${sentimentValue}`;
  result.appendChild(sentiment);

  const subjectivity = document.createElement("p");
  subjectivity.textContent = `Subjectivity: ${data.subjectivity}`;
  result.appendChild(subjectivity);

  const textElement = document.createElement("p");
  textElement.textContent = `Text snippet: ${data.sentence_list[0].text}`;
  result.appendChild(textElement);
}

function handleSubmit(event) {
  event.preventDefault();

  // Get the URL from the input field
  const url = document.getElementById("name").value;

  if (Client.checkUrl(url)) {
    fetch(`http://localhost:8000/api?url=${url}`)
      .then((response) => response.json())
      .then((data) => updateUI(data))
      .catch((err) => alert(err));
  } else {
    alert("Please enter a valid URL.");
    return;
  }
}

// Export the handleSubmit function
export { handleSubmit };
