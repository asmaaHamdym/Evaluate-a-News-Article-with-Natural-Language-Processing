import { checkUrl } from "./urlChecker";

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Get the URL from the input field
  const url = document.getElementById("name").value;

  if (Client.checkUrl(url)) {
    PostUrl("add", { message: url });
  }
}

// Function to send data to the server
const PostUrl = async (url = "", data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Export the handleSubmit function
export { handleSubmit };
