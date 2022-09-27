// Arrays

let numbers = [5, 2, 10, 15, 13];
numbers = new Array(5, 2, 10, 15, 13);
let names = ["Gerwin", "Edgelyn", "Alyssa", "Edcel"];
let mixed = [
  "Gerwin",
  10,
  true,
  undefined,
  null,
  { name: "Phil" },
  new Date(),
  [10],
];

// console.log(mixed);

let result;

result = numbers.length;

result = Array.isArray("Phil");

result = numbers[2];

numbers[1] = 500;

result = numbers;

result = numbers.indexOf(500);

// Mutating Methods
result = numbers;

result.push(300);

result.unshift(92);

result.pop();

result.shift();

result.splice(2, 2);

result.reverse();

result = numbers.concat(numbers);

result = result.sort();

result = result.sort(function (a, b) {
  return a - b;
});

result = result.sort(function (b, a) {
  return a - b;
});

result = numbers.find(function (n) {
  return n == 10;
});

console.log(result);
