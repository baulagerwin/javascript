let result;

const groceryList = document.querySelector(".collection");
const groceryItem = document.querySelector(".collection-item:first-child");

result = groceryList.childNodes;
// gives you more than 3 childNodes. why?
// because of line break

result = groceryList.childNodes[0];
result = groceryList.childNodes[0].nodeName;
result = groceryList.childNodes[0].nodeType;

result = groceryList.children;
result = groceryList.children[0];
result.style.color = "blue";
result = groceryList.children[0].children;
result = groceryList.children[0].children[0].children[0].textContent =
  "My item";

result = groceryList.firstChild; // for nodelist
result = groceryList.firstElementChild;
result = groceryList.lastChild;
result = groceryList.lastElementChild;

result = groceryList.childElementCount;

result = groceryItem.parentNode;
result = groceryItem.parentElement;
result = groceryItem.parentElement.parentElement;

result = groceryItem.nextSibling;
result = groceryItem.nextElementSibling;
result = groceryItem.nextElementSibling.nextElementSibling;

result = groceryItem.previousSibling;
result = groceryItem.previousElementSibling;

console.log(result);
