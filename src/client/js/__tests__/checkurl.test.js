import { checkUrl } from "../urlChecker";

describe("checkUrl", () => {
  test("should return true for valid URLs", () => {
    expect(checkUrl("http://example.com")).toBe(true);
    expect(checkUrl("https://example.com")).toBe(true);
    expect(checkUrl("https://www.example.com")).toBe(true);
    expect(checkUrl("http://example.com/path/to/resource")).toBe(true);
    expect(checkUrl("https://example.com/")).toBe(true);
  });

  test("should return false for invalid URLs", () => {
    expect(checkUrl("example")).toBe(false);
    expect(checkUrl("htp:/example.com")).toBe(false);
    expect(checkUrl("http://example")).toBe(false);
    expect(checkUrl("http://.com")).toBe(false);
    expect(checkUrl("http://example,com")).toBe(false);
    expect(checkUrl("ftp://example.com")).toBe(false); // Not http/https
  });

  test("should return false for empty or null inputs", () => {
    expect(checkUrl("")).toBe(false);
    expect(checkUrl(null)).toBe(false);
    expect(checkUrl(undefined)).toBe(false);
  });

  test("should handle edge cases", () => {
    expect(checkUrl("http://localhost")).toBe(false); // localhost isn't considered valid here
    expect(checkUrl("https://123.456.789.000")).toBe(false); // Invalid IP format
  });
});
