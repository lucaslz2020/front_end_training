import { isIP } from "../src";

describe("invalid IP", () => {
  test("invalid string", () => {
    expect(isIP()).toBeFalsy();
  });
  test("invalid pattern", () => {
    expect(isIP("123123")).toBeFalsy();
    expect(isIP("311.123.123.123")).toBeFalsy();
    expect(isIP("123.311.123.123")).toBeFalsy();
    expect(isIP("123.123.311.123")).toBeFalsy();
    expect(isIP("123.123.123.311")).toBeFalsy();
    expect(isIP("123.123.123.311.")).toBeFalsy();
    expect(isIP(".123.123.123.311.")).toBeFalsy();
    expect(isIP(".123.123..123.311.")).toBeFalsy();
  });
});

test("valid IP", () => {
  expect(isIP("192.168.0.1")).toBeTruthy();
  expect(isIP("192.168.1.1")).toBeTruthy();
  expect(isIP("192.168.2.1")).toBeTruthy();
  expect(isIP("192.168.0.0")).toBeTruthy();
});
