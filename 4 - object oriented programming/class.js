class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  eat() {
    return `My name is ${this.firstName} ${this.lastName} and I'm currently eating.`;
  }
}

const gerwin = new Person("Gerwin", "Baula");

console.log(gerwin);
console.log(gerwin.eat());
