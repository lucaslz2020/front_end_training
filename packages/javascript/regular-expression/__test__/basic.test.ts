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
  test("单词边界", () => {
    console.log("lucas lucas1 lucaslz".match(/\blucas\b/g));
  });
  test("不是单词边界", () => {
    console.log("lucas lucas1 lucaslz".match(/\Blucas\B/g));
    console.log("lucaslucas1lucaslz".match(/\Blucas\B/g));
  });
  test("字符串开始", () => {
    console.log("字符串开始", "1本书，2本书".match(/^\d+/g));
  });
  test("字符串结束", () => {
    console.log("字符串结束", `1book,2book`.match(/\w+$/g));
  });
  test("字符串开始结束", () => {
    console.log("字符串开始结束", `1book，2book`.match(/^\d\w+$/g));
  });
  test("多行模式", () => {
    console.log(
      `
      第1本书正则
      第2本书JavaScript
      第3本书HTML
    `.match(/\d+/gm)
    );
    console.log(
      `
1book
2book
`.match(/^\d\w+$/gm)
    );
  });

  test("分组", () => {
    console.log("分组1", "Googoogoo".match(/go+/gi));
    console.log("分组2", "Googoogoo".match(/(go)+/gi));
  });

  test("向前环视", () => {
    console.log("2022年5月29日".match(/\d+(?=日)/g));
  });
  test("否定向前环视", () => {
    console.log("否定向前环视", "2022年5月29日".match(/\d+(?![\d+日])/g));
    console.log("否定向前环视", "2022年5月29日".match(/\d+(?!日)/g));
  });
  test("向后环视", () => {
    console.log("2022年5月29日订单金额￥12".match(/(?<=￥)\d+/g));
  });
  test("否定向后环视", () => {
    console.log("2022年5月29日订单金额￥12".match(/(?!=￥)\d+/g));
  });
  test("贪婪匹配", () => {
    console.log("ber beer beeer beeeer".match(/.*r/));
  });
  test("懒惰匹配", () => {
    console.log("ber beer beeer beeeer".match(/.*?r/));
  });
  test("或操作", () => {
    console.log("19902021".match(/(19|20)/g));
  });
  test("反向引用", () => {
    console.log("This is a test test text.".match(/\s+(\w+)\s+\1/g));
  });
});
