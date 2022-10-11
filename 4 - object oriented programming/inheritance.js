// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.eat = function () {
  console.log(`My name is ${this.firstName} ${this.lastName} and I'm eating.`);
};

// Employee constructor
function Employee(firstName, lastName, role, deskNumber) {
  Person.call(this, firstName, lastName);
  this.role = role;
  this.deskNumber = deskNumber;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

let employee = new Employee("Gerwin", "Baula", "Developer", 25);
employee.eat();

console.log(employee);
