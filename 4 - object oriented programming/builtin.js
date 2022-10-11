// String constructor
let result = "hi";
result = new String("hi");
result.name = "Phil";

// Number constructor
result = 5;
result = new Number(result);

// Boolean
result = true;
result = new Boolean(1);

result = "Gerwin";
result = new String("Gerwin");

if (result === "Gerwin") {
  console.log("Yes");
} else {
  console.log("No");
}

if (result == "Gerwin") {
  console.log("Yes");
} else {
  console.log("No");
}

console.log(typeof result);
console.log(result);
