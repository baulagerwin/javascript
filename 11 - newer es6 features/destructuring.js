// Array Destructuring

const numbers = [0,1,2,3];

// const [a, b, c, d] = numbers;

// console.log(a, b, c, d);

// Rest pattern

const [a, b, ...rest] = numbers;

console.log(rest);

// Object Destructuring

const employee = { name: 'Phil', age: 20, surname: 'Warshavsky', job: 'Developer' };

const { name, age, surname, job } = employee;

console.log(name, age, surname, job);