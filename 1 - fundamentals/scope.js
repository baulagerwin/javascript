// Global Scope Variables
var x = 1;
let y = 2;
const z = 3;

// function hello() {
//   var x = 4;
//   let y = 5;
//   const z = 6;

//   console.log("Function Scope: ", x, y, z);
// }

// if (true) {
//   var x = 4;
//   let y = 2;
//   const z = 3;

//   console.log("If Scope: ", x, y, z);
// }

// hello();

for (var x = 0; x < 10; x++) {
  console.log("For loop: " + x);
}

console.log("Global Scope: ", x, y, z);
