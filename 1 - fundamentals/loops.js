const names = ["John", "Steve", "Henry"];

names.forEach(function (name) {
  console.log(name);
});

for (let index in names) {
  console.log(names[index]);
}

// map
const lowercasedNames = names.map(function (name) {
  return name.toLowerCase();
});

console.log(lowercasedNames);
