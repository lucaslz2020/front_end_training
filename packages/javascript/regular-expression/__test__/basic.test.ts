describe("字符串", () => {
  test("匹配文本", () => {
    console.log("I love JavaScript!".match(/love/));
    expect("I love JavaScript!").toMatch(/love/);
  });
  test("匹配多个文本", () => {
    console.log("I love love love JavaScript!".match(/love/g));
    expect("I love love love JavaScript!").toMatch(/love/g);
  });
  test("匹配不区分小写的文本", () => {
    console.log("I love Love love JavaScript!".match(/love/gi));
    expect("I love love Love JavaScript!").toMatch(/love/gi);
  });
  test("匹配任意字符串", () => {
    expect("Z").toMatch(/./);
  });
});
