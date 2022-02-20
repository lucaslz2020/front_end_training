import * as R from "ramda";

test("2加2等于4", () => {
  expect(2 + 2).toBe(4);
});

/**
 * 合并
 * [a] -> [b] -> [a, b]
 */
test("zip", () => {
  const students = ["Rosser", "Turing", "Kleene", "Church"];
  const grades = [80, 100, 90, 99];
  console.log(R.zip(students, grades));
});

test("sortBy", () => {
  const students = ["Rosser", "Turing", "Kleene", "Church"];
  const grades = [80, 100, 90, 99];

  console.log(
    R.compose(
      R.head,
      R.pluck(0),
      R.reverse,
      R.sortBy(R.prop(1)),
      R.zip
    )(students, grades)
  );
});
