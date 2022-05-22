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
  test("匹配特殊字符", () => {
    console.log("test.js".match(/\.js/));
    expect("test.js").toMatch(/\.js/);
  });
  test("匹配一组字符", () => {
    console.log("Mop top".match(/[tm]op/gi));
    expect("Mop top").toMatch(/[tm]op/gi);
  });
  test("匹配字符区间", () => {
    console.log("test a string range".match(/[a-z]/g));
    expect("test a string range").toMatch(/[a-z]/g);
  });
  test("排除", () => {
    console.log("No numbers here?".match(/[^0-9]/g));
    expect("No numbers here?").toMatch(/[^0-9]/g);
  });
  test("匹配数字", () => {
    let str = "123-123123-12312";
    console.log(str.match(/\d/g));
    console.log(str.match(/\D/g));
    expect(str).toMatch(/\D/g);
  });
  test("匹配一个或多个", () => {
    let str = "123-123123-12312";
    console.log(str.match(/\d+/g));
    console.log(str.match(/\D+/g));
    expect(str).toMatch(/\d+/g);
    expect(str).toMatch(/\D+/g);
  });
  test("匹配零次或者一次", () => {
    console.log("Should I write color or colour?".match(/colou?r/g));
    expect("Should I write color or colour?").toMatch(/colou?r/g);
  });
  test("匹配零次或者多次", () => {
    console.log("100 10 1".match(/\d0*/g));
    console.log("100 10 1".match(/\d0+/g));

    expect("100 10 1").toMatch(/\d0*/g);
    expect("100 10 1").toMatch(/\d0+/g);
  });
  test("匹配具体的重复次数", () => {
    console.log("test 12345 test".match(/\d{5}/g));
  });
  test("匹配重复范围", () => {
    console.log("Today is 5 22, 2022".match(/\d{2,4}/g));
  });
  test("匹配最少次数", () => {
    console.log("Today is 5 22, 2022".match(/\d{4,}/g));
  });
});
