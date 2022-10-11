class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log("Hi, boss");
  }
}

class Employee extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);

    this.role = role;
  }

  static addTwoNumbers(a, b) {
    console.log(a + b);
  }
}

const gerwin = new Employee("Gerwin", "Baula", "Developer");
console.log(gerwin);
gerwin.greet();
Employee.addTwoNumbers(1, 2);
gerwin.addTwoNumbers(1, 2);
