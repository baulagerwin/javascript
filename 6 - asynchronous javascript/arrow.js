// let greet = function() {
//     console.log("Hello, it's Phil");
// }

// greet = () => {
//     console.log("Hello, it's PHil");
// }

// greet = () => console.log("Hello, it's Phil");

// greet = () => 'Phil';

// greet = name => console.log(`Hello, ${name}`);

// console.log(greet());

const employees = ["Phil", "John", "Tom"];

let nameLengths = employees.map(function (name) {
  return name.length;
});

nameLengths = employees.map((name) => name.length);

console.log(nameLengths);

// greet('John');
