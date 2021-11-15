interface IUser {
  id: number;
  name: string;
}

interface Result {
  data: IUser[];
}

interface StringArray {
  [index: number]: string;
}

// 用任意的数字去索引StringArray 都会返回string
let chars: StringArray = ["A", "B"];

interface Names {
  [x: string]: string;
  x: number; // 这样就不能申明number类型了。
}

// 2种索引可以混用，但是一定要确保返回是一种类型，即，是一种子类型。但是可以使用any进行类型扩展。
// 会思考变量的类型，思考API的边界问题
