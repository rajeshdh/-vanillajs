class Employee {
  constructor(name = 'Rajesh', position, sex, yob) {
    if (typeof (name) !== 'string') {
      this.err = 'invalid input';
    }
    this.name = name;
    this.position = position || 'employee';
    this.sex = sex;
    this.yob = yob;
  }
  speak() {
    return `hello my name is ${this.name}, I am a ${thsi.position} here.`;
  }
  get age() {
    return this.calcAge();
  }
  calcAge() {
    const currentYear = (new Date()).getFullYear();
    return currentYear - this.yob;
  }
}

export class Manager extends Employee {
  constructor(name, sex, yob) {
    super(name, 'Manager', sex, yob);
  }
  speak() {
    return `I'm ${this.name}, and I am your Manager.`;
  }
}

export default Employee;