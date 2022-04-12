import * as R from "ramda";

// a -> a
test("identity", () => {
  console.log(R.identity(null));

  const addOne = (x) => x + 1;
  const square = (x) => x * x;

  console.log(R.pipe(addOne, square)(2));
});

test("tap", () => {
  console.log(R.tap(console.log, 1));
});

test("alt", () => {
  R.alt;
});
