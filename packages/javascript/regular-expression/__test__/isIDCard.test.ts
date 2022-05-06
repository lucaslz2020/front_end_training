import { isIDCard } from "../src";

describe("invalid ID card", () => {
  test("invalid string", () => {
    expect(isIDCard()).toBeFalsy();
  });
  test("incorrect length", () => {
    expect(isIDCard("1283712893712893712")).toBeFalsy();
  });
  test("incorrect first character", () => {
    expect(isIDCard("9283712893712893712")).toBeFalsy();
  });
  test("incorrect year", () => {
    expect(isIDCard("12345630001221921X")).toBeFalsy();
  });
  test("incorrect month", () => {
    expect(isIDCard("12345630002221921X")).toBeFalsy();
  });
  test("incorrect date", () => {
    expect(isIDCard("12345630002241921X")).toBeFalsy();
  });
});

test("valid ID card", () => {
  expect(isIDCard("11111119991221921X")).toBeTruthy();
});
