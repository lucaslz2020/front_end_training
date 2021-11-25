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

let obj111 = {
  // a: 1,
  // b: 2,
  // c: 3,
};

// function getValues(obj: any, keys: string[]) {
//     return keys.map(key => obj[key])
// }
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}
// console.log(getValues(obj, ["a", "b"]));
// console.log(getValues(obj, ['d', 'e']))

// keyof T
interface Obj {
  a: number;
  b: string;
}
let key: keyof Obj;

// T[K]
let value: Obj["a"];

// T extends U

// 类型映射
interface Obj {
  // a: string;
  // b: number;
}
type ReadonlyObj = Readonly<Obj>;

type PartialObj = Partial<Obj>;

type PickObj = Pick<Obj, "a" | "b">;

type RecordObj = Record<"x" | "y", Obj>;

// 条件类型
// T extends U ? X : Y

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
type T2 = TypeName<string[]>;

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>;

type Diff<T, U> = T extends U ? never : T;
type T4 = Diff<"a" | "b" | "c", "a" | "e">;
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

type NotNull<T> = Diff<T, null | undefined>;
type T5 = NotNull<string | number | undefined | null>;

// Exclude<T, U>
// NonNullable<T>

// Extract<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">;

// ReturnType<T>
type T8 = ReturnType<() => string>;
