import { isEmail } from "../src";

describe("invalid email", () => {
  test("invalid string", () => {
    expect(isEmail()).toBeFalsy();
  });
  test("invalid pattern", () => {
    expect(isEmail("123123")).toBeFalsy();
    expect(isEmail("123.123")).toBeFalsy();
    expect(isEmail("123123@")).toBeFalsy();
  });
});

test("valid email", () => {
  expect(isEmail("hello@lucaslz.com")).toBeTruthy();
  expect(isEmail("hello.world@lucaslz.com")).toBeTruthy();
  expect(isEmail("hello@world.lucaslz.com")).toBeTruthy();
  expect(isEmail("hello.world@world.lucaslz.com")).toBeTruthy();
});
