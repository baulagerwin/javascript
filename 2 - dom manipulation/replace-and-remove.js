const newHeading = document.createElement("h2");
newHeading.id = "grocery-title";
newHeading.appendChild(document.createTextNode("New Grocery Item"));

const oldHeading = document.getElementById("grocery-title");
const parentElement = oldHeading.parentElement;

parentElement.replaceChild(newHeading, oldHeading);
console.log(newHeading);

const groceryItems = document.querySelectorAll(".collection-item");
const groceryList = document.querySelector(".item-list");

groceryItems[0].remove();
groceryList.removeChild(groceryItems[1]);

const link = groceryItems[2].querySelector(".delete-item");

result = link;
// result = link.classList;
// result = link.classList[0];
link.classList.add("new-test-class");
link.classList.remove("new-test-class");

result = link.getAttribute("href");
link.setAttribute("href", "http://www.google.com");

result = link.hasAttribute("href");

console.log(result);
