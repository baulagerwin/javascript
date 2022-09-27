// Window object

// Useful Methods
// alert("Hello world.");

// const input = prompt();
// console.log(input);

// if (confirm("Are you sure you want to continue?")) {
//   console.log("Authorized");
// } else {
//   console.log("Discarded");
// }

// Useful Properties

let result;

// Outer Height and Width
result = window.outerHeight;
result = window.outerWidth;

// Inner Height and Width
result = window.innerHeight;
result = window.innerWidth;

// Scroll Points
result = window.scrollY;
result = window.scrollX;

// Location Object
result = window.location;
result = window.location.hostname;
result = window.location.href;
result = window.location.search;

// window.location.href = "http://google.com";
// window.location.reload();

// History object
// window.history.back(-1);
// window.history.forward(1);

// Navigator object
result = window.navigator;
result = window.navigator.vendor;
result = window.navigator.platform;

console.log(result);
