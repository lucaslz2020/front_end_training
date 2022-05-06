import { isPhoneNumber } from "../src";

describe("invalid phone number", () => {
  test("invalid string", () => {
    expect(isPhoneNumber()).toBeFalsy();
  });
  test("incorrect length", () => {
    expect(isPhoneNumber("1992877111")).toBeFalsy();
  });
  test("incorrect first character", () => {
    expect(isPhoneNumber("29928771111")).toBeFalsy();
  });
});

test("valid phone number", () => {
  expect(isPhoneNumber("19928771111")).toBeTruthy();
});
