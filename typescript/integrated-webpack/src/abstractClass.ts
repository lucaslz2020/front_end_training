abstract class Animal {
  eat() {}

  abstract run(): void;
}

// let animal = new Animal();

class Dog extends Animal {
  run(): void {}
}

const dog = new Dog();
dog.eat();

class Cat extends Animal {
  run(): void {}
}

let cat = new Cat();

let animals: Animal[] = [dog, cat];

animals.forEach((animal) => {
  animal.run();
});

class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new WorkFlow().step1().step2();

// 多态 this可以是子类也可以是父类
class PurchaseWorkFlow extends WorkFlow {
  next() {
    return this;
  }
}

new PurchaseWorkFlow().next().step1().next().step2();
