const hasWorking: boolean = true;
const hasWorking1: boolean | undefined = undefined;
const hasWorking2: boolean | null = null;

const age: number = 20;
const age1: number | undefined = undefined;
const age2: number | null = null;

const username: string = "lucas";
const username1: string | undefined = undefined;
const username2: string | null = null;

const children: number[] = [1, 2];
const children1: (number | string)[] = [1, 2];
const friends: Array<string> = ["1", "2"];
const friends1: Array<string | number> = ["1", "2"];

const taxRate: [hasTax: boolean, rate: string] = [true, "1"];
taxRate.push("2");

const plus = (lhs: number, rhs: number) => lhs + rhs;
let plus1: (lhs: number, rhs: number) => number;
plus1 = (lhs, rhs) => lhs + rhs;

const user: { username: string; age: number } = { username: "lucas", age: 20 };
user.username = "bob";

const symbol1: symbol = Symbol("symbol1");
const symbol2: symbol = Symbol("symbol1");

let error = () => {
  throw new Error("error");
};

let endless = () => {
  while (true) {}
};
