import * as R from "ramda";
import { wrap } from "./domain/Wrapper";

test("wrapper", () => {
  const wrappedValue = wrap("Get Functional");
  console.log(wrappedValue.map(R.identity));
  wrappedValue.map(console.log);
  wrappedValue.map(R.toUpper);
});

test("invalid value", () => {
  const wrapperNull = wrap(null);
  wrapperNull.map(console.log);
});

test("fmap", () => {
  const plus = R.curry((a, b) => a + b);
  const plus3 = plus(3);
  const two = wrap(2);
  console.log(two.fmap(plus3));
  console.log(two.fmap(plus3).map(R.identity));
});
