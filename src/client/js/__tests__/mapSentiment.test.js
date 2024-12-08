import { mapSentiment } from "../mapSentiment";

describe("checkUrl", () => {
  test("mapSentiment should map sentiment values correctly", () => {
    expect(mapSentiment("P+")).toBe("Strong Positive");
    expect(mapSentiment("P")).toBe("Positive");
    expect(mapSentiment("N")).toBe("Negative");
    expect(mapSentiment("N+")).toBe("Strong Negative");
    expect(mapSentiment("NEU")).toBe("Neutral");
    expect(mapSentiment("unknown")).toBe("Without Polarity"); // Test for unknown value
  });
});
