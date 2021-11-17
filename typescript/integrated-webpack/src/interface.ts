interface IUser {
  readonly recordId: number;
  name: string;
  age?: number;
  [key: string]: any;
}

interface IResult {
  users: IUser[];
}

const render = (result: IResult) =>
  result.users.forEach((user) => {
    console.log("render user", user);
    if (user.age) {
      console.log("age", user.age);
      user.recordId = 1;
    }
  });

const result = {
  users: [
    {
      recordId: 1,
      name: "张三",
    },
    {
      recordId: 2,
      name: "李四",
    },
  ],
};
render(result);

const result1 = {
  users: [
    {
      recordId: 1,
      name: "张三",
      age: 10,
    },
    {
      recordId: 2,
      name: "李四",
    },
  ],
};

// result能够完全符合接口IResult的定义
render(result1);

render({
  users: [
    {
      recordId: 1,
      name: "张三",
      age: 10,
    },
    {
      recordId: 2,
      name: "李四",
    },
  ],
});

render({
  users: [
    {
      recordId: 1,
      name: "张三",
      age: 10,
    },
    {
      recordId: 2,
      name: "李四",
    },
  ],
} as IResult);

render(<IResult>{
  users: [
    {
      recordId: 1,
      name: "张三",
      age: 10,
    },
    {
      recordId: 2,
      name: "李四",
    },
  ],
});

interface StringUsernames {
  [index: number]: string;
}

// 用任意的数字去索引StringArray 都会返回string
const usernames: StringUsernames = ["张三", "李四"];

interface Names {
  [key: string]: string;
  [index: number]: number;
}

// 2种索引可以混用，但是一定要确保返回是一种类型，即，是一种子类型。但是可以使用any进行类型扩展。
// 会思考变量的类型，思考API的边界问题
