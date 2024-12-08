function mapSentiment(sentiment) {
  if (sentiment === "P+") return "Strong Positive";
  if (sentiment === "P") return "Positive";
  if (sentiment === "N") return "Negative";
  if (sentiment === "N+") return "Strong Negative";
  if (sentiment === "NEU") return "Neutral";
  return "Without Polarity";
}

export { mapSentiment };
