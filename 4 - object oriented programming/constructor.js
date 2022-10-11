function Person(name, birthday) {
  this.name = name;
  this.birthday = new Date(birthday);

  this.getAge = function () {
    const currentYear = new Date(Date.now()).getFullYear();

    return Math.abs(currentYear - this.birthday.getFullYear());
  };
}

let person1 = new Person("John", "02-18-2002");
let person2 = new Person("Josh", "02-18-2003");

console.log(person1);
console.log(person2);
