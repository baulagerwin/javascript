// String Concatenation

let result = "Gerwin";
result = 'Today was really "cool"';
result = "Today \n was really cool";
result = "Today \t was really cool";
result = "Today \v was really cool";

let firstName = "Gerwin";
let lastName = "Baula";
result = firstName + " " + lastName;

result = `${lastName} ${firstName}`;
result = result.length;

//  Mutating Methods
result = firstName.concat(" ", lastName);

result = firstName.charAt(firstName.length - 1);

result = firstName.slice(0, 2);
result = firstName.slice(0, -2);

result = firstName.substring(0, 2);

result = firstName.toUpperCase();
result = firstName.toLowerCase();

result = firstName.replace("G", "J");

result = firstName.includes("r");

console.log(result);
