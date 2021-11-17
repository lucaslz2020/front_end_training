// let add: (lhs: number, rhs: number) => number;

function add(lhs: number, rhs: number) {
  return lhs + rhs;
}

const add1 = (lhs: number, rhs: number) => lhs + rhs;

interface IAdd {
  (lhs: number, rhs: number): number;
}

type Add = (lhs: number, rhs: number) => number;

let add2: Add = (lhs, rhs) => lhs + rhs;

interface IComponent {
  (): void;
  version: string;
  render: () => void;
}

const component: IComponent = () => {};
component.version = "1.0.0";
component.render = () => {};

const getComponent = () => {
  const result: IComponent = () => {};
  result.version = "1.0.0";
  result.render = () => {};
  return result;
};

const component1 = getComponent();
component1.render();

const component2 = getComponent();
component2.render();

add(1, 2, 3);

const add3 = (lhs: number, rhs?: number) => {
  return lhs + (rhs ?? 0);
};

const add4 = (lhs: number, rhs = 0, z = 0) => {
  return lhs + (rhs ?? 0);
};

add4(1, undefined, 1);

const add5 = (...rest: number[]) =>
  rest.reduce((previousValue, currentValue) => previousValue + currentValue);

function add7(...rest: number[]): number;
function add7(...rest: string[]): string;
function add7(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join(",");
  }
  if (typeof first === "number") {
    return rest.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }
}
