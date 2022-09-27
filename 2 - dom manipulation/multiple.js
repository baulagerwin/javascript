let result;

// document.getElementsByClassName
// result = document.getElementsByClassName("collection-item");
// result[0].style.color = "blue";
// result[0].querySelector(".item-name").textContent = "My Item";

// document.getElementsByTagName
// result = document.getElementsByTagName("li");

// result[0].style.color = "red";
// result[0].querySelector(".item-name").textContent = "My item";

// result = Array.from(result);
// result.forEach(function (li, index) {
//   console.log(li.className);
//   li.querySelector(".item-description").textContent = `Description ${
//     index + 1
//   }`;
// });

// document.querySelectorAll
result = document.querySelectorAll(".collection-item");
// This returns a NodeList and you don't need to convert it to array
//  you can iterate it already

result.forEach(function (li, index) {
  li.querySelector(".item-description").textContent = `Description ${
    index + 1
  }`;
});

console.log(result);
