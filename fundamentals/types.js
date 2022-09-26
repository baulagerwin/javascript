// primitive types
let result;

// Strings
result = "Gerwin";

// Numbers
result = 15;
result += 5;
result -= 10;
result = 1.4;

// Boolean
result = true;
result = false;

// null
result = null;

// undefined
result = undefined;

//  Null vs undefined
// null means nothing while undefined means you declared a variable
//  but didn't assign anything to it.

// Symbols
result = Symbol("Gerwin");

// reference types
// Array
result = [1, 2, "3", true, null];
result[0] = 10;

// Objects
result = {
  firstName: "Gerwin",
  lastName: "Baula",
};

result = result["lastName"];

// Functions
function doSomeWork() {
  console.log("I'm currently working.");
}

doSomeWork();
console.log(doSomeWork);

var doSomeMoreWork = function () {
  console.log("I'm currently taking a break.");
};

doSomeMoreWork();
console.log(doSomeMoreWork);

// Dates
result = new Date();

console.log(result);

// JS is a DYNAMICALLY TYPED LANGUAGE
