namespace Enum {
  const getLeftValue = () => 10;

  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  const isUpDirection = (direction: Direction) => direction === Direction.Up;

  enum Gender {
    Male = "MALE",
    Female = "FEMALE",
  }

  enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
  }

  enum FileAccess {
    // 常量成员
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // 计算成员
    G = "123".length,
    H = Math.random(),
  }

// 运行时编译成对象。
  enum E {
    X,
    Y,
    Z,
  }
  function f(obj: { X: number }) {
    return obj.X;
  }

  f(E);

// 编译时

  enum LogLevel {
    Error,
    Warn,
    Info,
    Debug,
  }

  type LogLevelString = keyof typeof LogLevel;

  function print(key: LogLevelString, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.Warn) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }

  print("Error", "This is a message");

  enum Enum {
    A,
  }

  const a = Enum.A;
  const nameOfA = Enum[a];

  const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }

  const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;

  const eUp = EDirection.Up;

  const oUp = ODirection.Up;

// Using the enum as a parameter
  function walk(dir: EDirection) {}

// It requires an extra line to pull out the keys
  type Direction1 = typeof ODirection[keyof typeof ODirection];
  function run(dir: Direction1) {}

  walk(EDirection.Left);

  run(ODirection.Right);


  enum BooleanEnum {
    Yes,
    No
  }
  const notFound: BooleanEnum = 2;

  console.log("notFound",notFound);

  enum StringEnum {
    Foo = "Foo",
    Bar = "Bar",
  }
  // const string1: StringEnum = "Foo";
  // console.log("string", string1)
}
