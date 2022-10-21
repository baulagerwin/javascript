let regularExpression = /hello/;
regularExpression = /hello/i; // i = case insensitive
regularExpression = /hello/g; // g = global search
regularExpression = /hello/i;

// console.log(regularExpression);
// console.log(regularExpression.source);

let result;

// exec() - // Returns an array with the match, index and the input value or null
// result = regularExpression.exec('LOLhell world');
// console.log(result);

// test() - Returns true or false
// result = regularExpression.test('Hello');
// console.log(result);

// match() - // Returns an array of matches inside the strings or null
// result = 'hell'.match(regularExpression);
// console.log(result);

// search() - Returns index of first match or -1 if none is found
// result = 'Hell There Phil'.search(regularExpression);
// console.log(result);

// replace()
result = 'Hello There'.replace(regularExpression, 'Hi');
console.log(result);