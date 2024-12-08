// import { mapSentiment } from "../mapSentiment";

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);

const result = document.getElementById("results");

function updateUI(data) {
  // Clear the previous results
  result.innerHTML = "";

  // Create new elements for the results
  const sentimentValue = Client.mapSentiment(data.score_tag);
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
  if (!url) {
    alert("Please enter a URL.");
    return;
  }

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
