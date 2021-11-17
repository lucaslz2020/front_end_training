class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  getFullName() {}
  private salary?: number;
  private getSalary() {}
  protected getUserInfo() {}
  readonly code: string = "1";
  static motherTongue = "";
}

User.motherTongue;

// 类的属性都是实例属性
// 类的方法都是实例方法
console.log(User.prototype);

// 内部属性在实例上面，不再原型上。
const user1 = new User("张三");
console.log("user1", user1);
user1.motherTongue;

// 实例的属性必须要有初始值。

class EmployeeUser extends User {
  constructor(name: string, public age: number) {
    super(name);
    this.age = age;
  }
  // age: number;
  private salary: number;
}

const employeeUser: EmployeeUser = new EmployeeUser("战三");
