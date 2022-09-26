// Type Conversion Lecture
let result;

// Data types to String Conversion

// Number -> String
result = 5;
result = String(result);

// Boolean to String
result = String(true);
result = String(false);

// Date -> String
result = new Date();
result = String(result);

// Array -> String
result = [1, 2, 3, 4];
result = String(result);

// Object -> String
result = { age: 10 };
// result = String(result);
result = String(result.age);

// Cleaner way
result = 5;
result = result.toString();

// Data types to Number Conversion
// 50, 0, NaN

// String -> Number
result = Number("Gerwin");

// Boolean -> Number
result = Number(true);
result = Number(false);

// Date -> Number
result = Number(new Date());
// the ms passed jan first 1970

// Array/Object -> Number
result = Number([5, 6]);
result = Number({ age: 10 });
result = Number([]);

// Data types to Boolean
// Number -> Boolean
result = Boolean(0);
result = Boolean(1);
result = Boolean(12313);

// String/Array/Object -> Boolean
result = Boolean("Gerwin");
result = Boolean([3, 9]);
result = Boolean([]);
result = Boolean({});
result = Boolean("");
result = Boolean(null);
result = Boolean(undefined);

result = 5 + null; // 5 + 0
result = "5" + null; // 5null
result = "5" + 2; // 52
result = "5" - 3;
result = "Gerwin" - 3;
result = "5" * "2";

console.log(typeof result);
console.log(result);
