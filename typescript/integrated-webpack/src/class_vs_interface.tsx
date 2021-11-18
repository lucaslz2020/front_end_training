interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
  sleep() {}
}

interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: "",
  cry(): void {},
  eat(): void {},
  run(): void {},
};

class Auto {
  state = 1;
  private state2 = 0;
}

interface IAuto extends Auto {}

class C implements IAuto {
  state = 2;
  private state2 = 1;
}

// 必须实现state熟悉，因为它是Auto子类。
class Bus extends Auto implements IAuto {}
