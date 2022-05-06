import { isURL } from "../src";

describe("invalid IP", () => {
  test("invalid string", () => {
    expect(isURL()).toBeFalsy();
  });
  test("invalid pattern", () => {
    expect(isURL("https:lucaslz.com")).toBeFalsy();
    expect(isURL("https:///lucaslz.com")).toBeFalsy();
  });
});

test("valid IP", () => {
  expect(isURL("https://lucaslz.com/123123?a=1&b=2")).toBeTruthy();
  expect(
    isURL("https://lucas:password@lucaslz.com/123123?a=1&b=2")
  ).toBeTruthy();
  expect(isURL("https://lucaslz.com")).toBeTruthy();
  expect(isURL("https://lucaslz.com:8080")).toBeTruthy();
});
