// 重载
function log(value: string): string;
function log(value: string[]): string[];
function log(value: any) {
  console.log(value);
  return value;
}
log("张三");
log(["张三", "李四"]);

// 联合类型

namespace U {
  function log(value: string | string[]): string | string[] {
    console.log(value);
    return value;
  }
  log("张三");
  log(["张三", "李四"]);
}

namespace T {
  function log<T>(value: T): T {
    console.log(value);
    return value;
  }

  log<string>("张三");

  log("张三"); // 类型推断，省略泛型 推荐。
}

type Log = <T>(value: T) => T;
const myLog: Log = log;

namespace A {
  function log<T>(value: T): T {
    console.log(value);
    return value;
  }

  // 与类型别名一致。 泛型约束函数
  interface ILog1 {
    <T>(value: T): T;
  }

  interface ILog<T> {
    (value: T): T;
  }

  let log1: ILog<number> = log;

  interface ILog<T = string> {
    <T>(value: T): T;
  }
  let log2: ILog = log;
}

namespace B {
  class Log<T> {
    // static run(value: T) {}
    run(value: T) {
      console.log(value);
      return value;
    }
  }

  const numberLog = new Log<number>();
  numberLog.run(1);

  let anyLog = new Log();
  anyLog.run("1");
  anyLog.run({ test: 1 });
}

namespace C {
  interface ILength {
    length: number;
  }
  class Log<T extends ILength> {
    run(value: T) {
      console.log(value);
      return value;
    }
  }

  let anyLog = new Log();
  anyLog.run({ test: 1 });

  anyLog.run("1");
  anyLog.run({ length: 1 });
  anyLog.run(["1", "2"]);
}
