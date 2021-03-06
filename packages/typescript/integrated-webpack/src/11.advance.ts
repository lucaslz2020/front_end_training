// 交叉类型
namespace IntersectionTypes {
  interface IDog {
    run(): void;
  }
  interface ICat {
    scratch(): void;
  }

  type Animal = IDog & ICat;

  // animal 需要实现所有的方法
  const animal: Animal = {
    run() {},
    scratch() {},
  };

  // wrong usage
  const animalWrong = {
    run() {},
  } as Animal;
}

namespace UnionTypes {
  interface IDog {
    run(): void;
  }
  interface ICat {
    scratch(): void;
  }

  type Text = string | number;
  const aText: Text = "可以是文本";
  const aNumber: Text = 1;

  // 字面量联合类型。不仅限定变量类型，还需要限定变量的取值在某个特定的范围内。
  type SizeType = "small" | "middle" | "large";
  type ModeType = 0 | 1 | 2 | 3;

  class Dog implements IDog {
    run() {}
    eat() {}
  }
  class Cat implements ICat {
    scratch() {}
    eat() {}
  }

  const getAnimal = () => {
    const result = Math.random() % 2 === 0 ? new Dog() : new Cat();
    result.eat();
    // result.run();
    // result.scratch();
    return result;
  };

  interface ISquare {
    kind: "square";
    size: number;
  }
  interface IRectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }

  interface ICircle {
    kind: "circle";
    radius: number;
  }

  type Shape = ISquare | IRectangle | ICircle;

  const getArea = (s: Shape) => {
    switch (s.kind) {
      case "square":
        return s.size * s.size;
      case "rectangle":
        return s.height * s.width;
      case "circle":
        return Math.PI * s.radius ** 2;
      default:
        return ((e) => {
          throw new Error(e);
        })(s);
    }
  };
  console.log("1", getArea({ kind: "circle", radius: 1 }));
}

namespace IndexType {
  const user: IUser = {
    name: "lucas",
    age: 20,
  };
  const getUserValues = (user: any, keys: string[]) => {
    return keys.map((key) => user[key]);
  };

  console.log("user", getUserValues(user, ["name", "age"]));
  // console.log("user", getValues(user, ["weight", "height"]));

  interface IUser {
    name: string;
    age: number;
  }
  // keyof
  let key: keyof IUser;
  // T[K]
  let value: IUser["name"];

  // T extends U
  const getUserValues1 = <T, K extends keyof T>(user: T, keys: K[]): T[K][] => {
    return keys.map((key) => user[key]);
  };

  console.log("user", getUserValues1(user, ["name", "age"]));
  // console.log("user", getUserValues1(user, ["weight", "height"]));
}

namespace MappedTypes {
  interface IUser {
    name: string;
    age: number;
  }

  // 只读
  type ReadonlyUser = Readonly<IUser>;

  // 如何实现？

  // optional
  type PartialUser = Partial<IUser>;

  type PickUser = Pick<IUser, "age">;
  type AllUser = Pick<IUser, "age" | "name">;

  type RecordUser = Record<"lucas" | "john", IUser>;
}

// 条件类型  T extends U ? X : Y
namespace ConditionalTypes {
  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

  type T1 = TypeName<string>;
  //  T1 是什么类型？

  // T2 是什么类型?
  type T2 = TypeName<string[]>;

  // 分布式条件类型 (A | B) extends U ? X : Y
  // 拆解：A extends U ? X : Y | B extends U ? X : Y
  type T3 = TypeName<string | string[]>;

  // 实现类型的过滤。
  // Exclude<T, U>
  type Diff<T, U> = T extends U ? never : T;
  type T4 = Diff<"a" | "b" | "c", "a" | "e">;
  // Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
  // never | "b" | "c"
  // "b" | "c"
  // 可以从类型T中过滤掉可以赋值给类型U的类型

  // NonNullable<T>
  type NotNull<T> = Diff<T, null | undefined>;
  type T5 = NotNull<string | number | undefined | null>;

  // Extract<T, U> 可以从类型U中抽取出可以赋值给T的类型。
  type T6 = Extract<"a" | "b" | "c", "a" | "e">;

  // ReturnType<T>
  // 获取函数返回值类型 参数是一个函数
  type T8 = ReturnType<() => string>;
}
