// boolean
const hasWorking: boolean = true;
const hasWorking1: boolean | undefined = undefined;
const hasWorking2: boolean | null = null;
const hasWorking3 = new Boolean(true);
const hasWorking4 = Boolean(true);

// number
let age: number = 20;
const age1: number | undefined = undefined;
const age2: number | null = null;
const age3 = Number(20);
const age4 = new Number(20);
const age5 = 0.1;
const age6 = 0b1010;
const age7 = 0o774;
const age8 = 0x00d;

// bigint
let age9: bigint = 20n;
// age9 = age;
// age9 = age3;

// string
const username: string = "lucas";
const username1: string | undefined = undefined;
const username2: string | null = null;
const username3: string = String("lucas");
const username4 = new String("lucas");
const username5: string = `my name is ${username}`;

String("lucas") === String("lucas");
new String("lucas") === new String("lucas");
String("lucas") === new String("lucas");
String("lucas") === "lucas";
new String("lucas") === "lucas";

// array
const children: number[] = [1, 2];
const children1: (number | string)[] = [1, 2];
const friends: Array<string> = ["1", "2"];
const friends1: Array<string | number> = ["1", "2"];

// tuple
const taxRate: [hasTax: boolean, rate: string] = [true, "1"];
taxRate.push("2");

// function
const plus = (lhs: number, rhs: number) => lhs + rhs;
let plus1: (lhs: number, rhs: number) => number;
plus1 = (lhs, rhs) => lhs + rhs;

// object
const user: { username: string; age: number } = { username: "lucas", age: 20 };
user.username = "bob";

// symbol
const symbol1: symbol = Symbol("symbol1");
const symbol2: symbol = Symbol("symbol1");

// any
let any: any;
any = 1;
any = [];
any = () => {};

// never
let error = () => {
  throw new Error("error");
};

let endless = () => {
  while (true) {}
};

// unknown

{
  let unknown1: unknown;
  // let num: number = unknown1;
  let any: any = unknown1;

  // if (typeof num === "number") {
  //   num.toFixed();
  // }
}
