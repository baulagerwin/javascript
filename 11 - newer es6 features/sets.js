const set1 = new Set();

// Add values to the set
set1.add(200);
set1.add('Hello');
set1.add({name: 'Phil'});
set1.add(true);

set1.add(200);

// console.log(set1);

// const set2 = new Set([5, false, 'world']);

// console.log(set2);

// console.log(set1.size);
// console.log(set1.has('Hello'));
// console.log(set1.has(100+100));

// console.log(set1.has({name: 'Phil'}));
// console.log({name: 'Phil'} === {name: 'Phil'});
// console.log('Hello' === 'Hello');

// set1.delete(200);

// Iterate through sets

// For ...of way
// for (let item of set1.values()) console.log(item);

// Foreach loop
// set1.forEach((value) => console.log(value));

// convert a set to an array
const setArr = Array.from(set1);

console.log(setArr);

// console.log(set1);