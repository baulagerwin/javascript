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
  // equivalent of super keyword in java
  Person.call(this, firstName, lastName);
  this.role = role;
  this.deskNumber = deskNumber;
}

// The two assignments are equivalent to extends in java
// The methods inside the Person.prototype is not accessible eg. eat()
Employee.prototype = Object.create(Person.prototype);

// The employee.prototype is missing in the hierarchy
Employee.prototype.constructor = Employee;

let employee = new Employee("Gerwin", "Baula", "Developer", 25);

console.log(employee);
// employee.eat();
