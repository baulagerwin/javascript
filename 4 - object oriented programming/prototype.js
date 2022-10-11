// Object.prototype
// Person.prototype

function Person(name, birthday) {
  this.name = name;
  this.birthday = new Date(birthday);

  // this.getAge = function () {
  //   const currentYear = new Date(Date.now()).getFullYear();

  //   return Math.abs(currentYear - this.birthday.getFullYear());
  // };
}

Person.prototype.getAge = function () {
  const currentYear = new Date(Date.now()).getFullYear();

  return Math.abs(currentYear - this.birthday.getFullYear());
};

let peter = new Person("Peter", "02-18-2002");
let josh = new Person("John", "02-18-2003");

console.log(peter);
console.log(josh);
console.log(peter.hasOwnProperty("hasAge"));
console.log(peter.hasOwnProperty("name"));

// Instance of Peron -> Person.prototype -> Object.prototype
