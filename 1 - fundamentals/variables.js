// Variables & Declaration Lecture

// var, let, const
var x;

var x = 1;
var x = 4;

var name = "Gerwin";

// Camel Case Convention
var firstName = "Phil"; // letter, $ and _

// var keyword
var x = 10;
// console.log(x);

var x = 0;
// console.log(x);

// let keyword
let globalVariable = 1;

if (true) {
  let globalVariable = 5;
}

// console.log(globalVariable);

//  difference of let and var keyword in terms of scoping
var varGlobalVariable = 1;

if (true) {
  var varGlobalVariable = 5;
}

// console.log(varGlobalVariable);

// reassigning variable using let keyword
// this gives you an error
// let num = 1;
// let num = 5;

// the proper way of reassigning variable using let is like this
let num = 1;
num = 5;

console.log(num);

// const keyword
const NUMBER = 5;
NUMBER = 1;

// gives you an error because you try to reassign a variable
//  declared via const keyword
// console.log(NUMBER);
