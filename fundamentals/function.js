// Functions & Declaration

function greet(firstName = "Gerwin", lastName = "Baula") {
  console.log(`${firstName} ${lastName}`);
}

greet();
greet("Kia", "Kritiko");

const add = function (x = 0, y = 0) {
  return x + y;
};

console.log(add(5, 2));

if (true) {
  // Function Declaration
  function ifFunction() {
    console.log("Defined in if");
  }

  ifFunction();
}

ifFunction();

// if (true) {
//   // Function Expression
//   const ifFunction = function () {
//     console.log("Defined in if");
//   };

//   ifFunction();
// }

// // Results in error
// ifFunction();

(function () {
  console.log("IIFE");
})();

// Property Methods
const operations = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};

console.log(operations.add(2, 5));
console.log(operations.subtract(2, 5));

operations.multiply = function (x, y) {
  return x * y;
};

console.log(operations.multiply(2, 5));
