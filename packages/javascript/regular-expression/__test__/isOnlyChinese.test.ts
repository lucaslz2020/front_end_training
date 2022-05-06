import { isOnlyChinese } from "../src";

describe("invalid IP", () => {
  test("invalid string", () => {
    expect(isOnlyChinese()).toBeFalsy();
  });
  test("invalid pattern", () => {
    expect(isOnlyChinese("this is not chinese")).toBeFalsy();
    expect(isOnlyChinese("123123")).toBeFalsy();
    expect(isOnlyChinese("this is not chinese有英文")).toBeFalsy();
    expect(isOnlyChinese("123123有数字")).toBeFalsy();
  });
});

test("valid chinese", () => {
  expect(isOnlyChinese("测试")).toBeTruthy();
});
