const map = new Map();

const key1 = 'a string',
      key2 = {},
      key3 = function() {};

map.set(key1, 'Value1');
map.set(key2, 'Value2');
map.set(key3, 'Value3');

// console.log(map.get(key1), map.get(key2), map.get(key3));

// console.log(map.size);

// Iterate Maps

// for ...of toget keys and values
// for (let [key, value] of map) {
//     console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for (let key of map.keys()) {
//     console.log(key);
// }

// Iterate values only
// for (let value of map.values()) {
//     console.log(value);
// }

// Loop over the array with forEach
// map.forEach((value, key) => console.log(`${key} = ${value}`));

// Convert maps to Arrays

// const keyValArr = Array.from(map);
// console.log(keyValArr);

// const keyArr = Array.from(map.keys());
// console.log(keyArr);

const valArr = Array.from(map.values());
console.log(valArr);