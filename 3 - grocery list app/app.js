const form = document.querySelector(".form");
const itemInput = document.querySelector("#item");
const commentInput = document.querySelector("#comment");
const groceryItems = document.querySelector(".grocery-items");
const editButton = document.querySelector(".btn--edit");
const deleteButton = document.querySelector(".btn--delete");
const resetButton = document.querySelector(".btn--reset");
const filterInput = document.querySelector("#filter");
const itemsTable = "items";
let currentItem = null;

window.addEventListener("DOMContentLoaded", handleContentLoaded);
form.addEventListener("submit", handleSubmitButton);
resetButton.addEventListener("click", handleResetButton);
filterInput.addEventListener("input", handleFilterInput);

function handleContentLoaded(event) {
  if (!localStorage.getItem(itemsTable)) {
    localStorage.setItem(itemsTable, JSON.stringify([]));
    return;
  }

  const items = JSON.parse(localStorage.getItem(itemsTable));
  for (const item of items) appendItemToList(item.name, item.comment, false);
  event.preventDefault();
}

function handleSubmitButton(event) {
  let itemValue = itemInput.value;
  let commentValue = commentInput.value;

  appendItemToList(itemValue, commentValue);

  itemInput.value = "";
  itemInput.blur();
  commentInput.value = "";
  commentInput.blur();

  event.preventDefault();
}

function appendItemToList(itemValue, commentValue, isStore = true) {
  const item = document.createElement("li");
  item.classList.add("item");

  const itemName = document.createElement("h3");
  itemName.classList.add("item__name");
  itemName.textContent = itemValue;

  const itemComment = document.createElement("p");
  itemComment.classList.add("item__comment");
  itemComment.textContent = commentValue;

  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.classList.add("btn--edit");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn--remove");

  editButton.addEventListener("click", handleEditButton);
  deleteButton.addEventListener("click", handleDeleteButton);

  editButton.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 edit"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  `;

  deleteButton.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 remove"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  `;

  item.appendChild(itemName);
  item.appendChild(itemComment);
  item.appendChild(editButton);
  item.appendChild(deleteButton);

  groceryItems.appendChild(item);

  if (isStore) addItemToLocalStorage(itemValue, commentValue);
}

function addItemToLocalStorage(itemValue, commentValue) {
  const items = JSON.parse(localStorage.getItem(itemsTable));
  items.push({ name: itemValue, comment: commentValue });
  localStorage.setItem(itemsTable, JSON.stringify(items));
}

function handleFilterInput(event) {
  const filterValue = event.target.value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach(function (item) {
    const itemValue = item.querySelector(".item__name").innerHTML.toLowerCase();
    item.style.display = !itemValue.indexOf(filterValue) ? "grid" : "none";
  });

  event.preventDefault();
}

function handleEditButton(event) {
  if (!event.target.classList.contains("edit")) return;

  let item = event.target.parentElement.parentElement;
  currentItem = item;

  let itemName =
    event.target.parentElement.previousElementSibling.previousElementSibling
      .innerHTML;

  let itemComment = event.target.parentElement.previousElementSibling.innerHTML;

  let form =
    event.target.parentElement.parentElement.parentElement
      .previousElementSibling.previousElementSibling.previousElementSibling;

  let formChildren = form.children;

  let h2 =
    event.target.parentElement.parentElement.parentElement
      .previousElementSibling.previousElementSibling.previousElementSibling
      .previousElementSibling;

  h2.innerHTML = "Edit Item".toUpperCase();
  formChildren[0].firstElementChild.value = itemName;
  formChildren[1].firstElementChild.value = itemComment;

  let addButton = formChildren[2].firstElementChild;
  let confirmButton = formChildren[2].firstElementChild.nextElementSibling;
  let cancelButton = formChildren[2].lastElementChild;

  addButton.style.display = "none";
  addButton.setAttribute("type", "button");
  confirmButton.style.display = "inline-block";
  confirmButton.setAttribute("type", "submit");
  cancelButton.style.display = "inline-block";

  // The first two comments is SOOOOOOOOOOOOO WEEEEEEEEEEEEEEEIIIIIRD!
  // confirmButton.addEventListener("click", function (event) {
  //   // handleConfirmButton(event, item);
  //   console.log("Something");
  // });

  // confirmButton.addEventListener("click", (event) => {
  //   // handleConfirmButton(event, item);
  //   console.log("Something");
  // });

  confirmButton.addEventListener("click", handleConfirmButton);
  cancelButton.addEventListener("click", handleCancelButton);

  event.preventDefault();
}

function handleConfirmButton(event) {
  let itemValue = itemInput.value;
  let commentValue = commentInput.value;

  // Getting the index of item
  const items = document.querySelectorAll(".item");
  const index = Array.from(items).indexOf(currentItem);

  if (!itemValue || (!itemValue && !commentValue)) {
    currentItem.remove();
    const itemsFromStorage = JSON.parse(localStorage.getItem(itemsTable));
    itemsFromStorage.splice(index, 1);
    localStorage.setItem(itemsTable, JSON.stringify(itemsFromStorage));

    itemInput.value = "";
    itemInput.blur();
    commentInput.value = "";
    commentInput.blur();

    let addButton = event.target.previousElementSibling;
    let confirmButton = event.target;
    let cancelButton = event.target.nextElementSibling;
    let h2 = event.target.parentElement.parentElement.previousElementSibling;

    addButton.style.display = "inline-block";
    addButton.setAttribute("type", "submit");
    confirmButton.style.display = "none";
    confirmButton.setAttribute("type", "button");
    cancelButton.style.display = "none";
    h2.innerHTML = "Add Item".toUpperCase();
    currentItem = null;

    event.preventDefault();
  }

  // Updating the item and comment in view
  currentItem.firstElementChild.innerHTML = itemValue;
  currentItem.firstElementChild.nextElementSibling.innerHTML = commentValue;

  // Updating the item and comment in localStorage
  const itemsFromStorage = JSON.parse(localStorage.getItem(itemsTable));
  itemsFromStorage[index] = { name: itemValue, comment: commentValue };
  localStorage.setItem(itemsTable, JSON.stringify(itemsFromStorage));

  itemInput.value = "";
  itemInput.blur();
  commentInput.value = "";
  commentInput.blur();

  let addButton = event.target.previousElementSibling;
  let confirmButton = event.target;
  let cancelButton = event.target.nextElementSibling;
  let h2 = event.target.parentElement.parentElement.previousElementSibling;

  addButton.style.display = "inline-block";
  addButton.setAttribute("type", "submit");
  confirmButton.style.display = "none";
  confirmButton.setAttribute("type", "button");
  cancelButton.style.display = "none";
  h2.innerHTML = "Add Item".toUpperCase();
  currentItem = null;

  event.preventDefault();
}

function handleCancelButton(event) {
  itemInput.value = "";
  itemInput.blur();
  commentInput.value = "";
  commentInput.blur();

  let addButton = event.target.previousElementSibling.previousElementSibling;
  let confirmButton = event.target.previousElementSibling;
  let cancelButton = event.target;
  let h2 = event.target.parentElement.parentElement.previousElementSibling;

  addButton.style.display = "inline-block";
  addButton.setAttribute("type", "submit");
  confirmButton.style.display = "none";
  confirmButton.setAttribute("type", "button");
  cancelButton.style.display = "none";
  h2.innerHTML = "Add Item".toUpperCase();
  currentItem = null;

  event.preventDefault();
}

function handleDeleteButton(event) {
  if (!event.target.classList.contains("remove")) return;
  if (!confirm("Are you sure?")) return;

  const items = document.querySelectorAll(".item");
  const item = event.target.parentElement.parentElement;
  const index = Array.from(items).indexOf(item);
  item.remove();

  const itemsFromStorage = JSON.parse(localStorage.getItem(itemsTable));
  itemsFromStorage.splice(index, 1);
  localStorage.setItem(itemsTable, JSON.stringify(itemsFromStorage));

  event.preventDefault();
}

function handleResetButton() {
  groceryItems.innerHTML = "";
  localStorage.clear();
  localStorage.setItem(itemsTable, JSON.stringify([]));
}
