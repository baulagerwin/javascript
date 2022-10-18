document.querySelector(".form").addEventListener("submit", function (e) {
  const ui = new UI();

  if (ui.isAlerting) {
    e.preventDefault();
    return;
  }

  try {
    ui.addBook(ui.passData());
    ui.clearFields();
    ui.showAlert("The book has been added successfully.");
  } catch (e) {
    ui.showAlert(e.message, false);
  }
  e.preventDefault();
});

const UI = function () {
  this.subheading = document.querySelector(".subheading");
  this.form = document.querySelector(".form");
  this.title = document.querySelector("#title");
  this.author = document.querySelector("#author");
  this.isbn = document.querySelector("#isbn");
  this.addButton = document.querySelector(".btn--add");
  this.updateButton = document.querySelector(".btn--edit");
  this.cancelButton = document.querySelector(".btn--cancel");
  this.tableBody = document.querySelector(".books-table tbody");
  this.isAlerting = Boolean(document.querySelector(".alert"));
};

UI.currentItem = null;

UI.prototype.getCurrentItem = function () {
  return UI.currentItem;
};

UI.prototype.setCurrentItem = function (item) {
  UI.currentItem = item;
};

UI.prototype.passData = function () {
  if (!this.title.value) throw new Error("Title field is empty.");
  if (!this.author.value) throw new Error("Author field is empty.");
  if (!this.isbn.value) throw new Error("ISBN field is empty.");
  if (!Number(this.isbn.value)) throw new Error("ISBN is not a number!");

  return new Book(this.title.value, this.author.value, this.isbn.value);
};

UI.prototype.clearFields = function () {
  this.title.value = "";
  this.title.blur();
  this.author.value = "";
  this.author.blur();
  this.isbn.value = "";
  this.isbn.blur();
};

UI.prototype.showAlert = function (message, status = true) {
  const alertElement = document.createElement("div");
  alertElement.innerHTML = message;

  if (!status) alertElement.classList.add("alert", "failed");
  else alertElement.classList.add("alert", "success");

  this.form.insertBefore(alertElement, this.title.parentElement);

  setTimeout(function () {
    alertElement.remove();
  }, 1000);
};

UI.prototype.addBook = function (book) {
  const bookRow = document.createElement("tr");
  bookRow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
  `;

  const updateColumn = document.createElement("td");
  const removeColumn = document.createElement("td");

  const updateButton = document.createElement("button");
  updateButton.type = "button";
  updateButton.innerHTML = "Update";
  updateButton.classList.add("btn--update");
  updateButton.addEventListener("click", this.handleUpdateButton);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerHTML = "Delete";
  removeButton.classList.add("btn--remove");
  removeButton.addEventListener("click", this.handleRemoveButton);

  updateColumn.appendChild(updateButton);
  removeColumn.appendChild(removeButton);

  bookRow.appendChild(updateColumn);
  bookRow.appendChild(removeColumn);

  this.tableBody.appendChild(bookRow);
};

UI.prototype.handleRemoveButton = function (event) {
  if (!event.target.classList.contains("btn--remove")) return;
  new UI().removeItem(
    "Are you sure?",
    event.target.parentElement.parentElement
  );
};

UI.prototype.removeItem = function (prompt, item) {
  if (!confirm(prompt)) return;

  const name = item.firstElementChild.innerHTML;
  item.remove();

  new UI().showAlert(`${name} has been deleted successfully.`);
};

UI.prototype.handleUpdateButton = function (event) {
  if (!event.target.classList.contains("btn--update")) return;

  let item = event.target.parentElement.parentElement;

  const ui = new UI();
  ui.title.value = item.firstElementChild.innerHTML;
  ui.author.value = item.firstElementChild.nextElementSibling.innerHTML;
  ui.isbn.value =
    item.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;

  ui.subheading.innerHTML = "Update Book".toUpperCase();

  ui.addButton.setAttribute("type", "button");
  ui.addButton.style.display = "none";
  ui.updateButton.setAttribute("type", "submit");
  ui.updateButton.style.display = "inline-block";
  ui.cancelButton.style.display = "inline-block";

  ui.setCurrentItem(item);

  ui.cancelButton.addEventListener("click", ui.handleCancelButton);
  ui.updateButton.addEventListener("click", ui.handleConfirmButton);
};

UI.prototype.handleConfirmButton = function (event) {
  const ui = new UI();
  const currentItem = ui.getCurrentItem();
  const prevItemName = currentItem.firstElementChild.innerHTML;

  const items = document.querySelectorAll("tr");

  // For local storage
  const index = Array.from(items).indexOf(currentItem);

  if (!ui.title.value && !ui.author.value && !ui.isbn.value) {
    ui.removeItem(
      "All fields are empty. Do you like to remove the item?",
      currentItem
    );
    return;
  }
  if (!ui.title.value) {
    ui.showAlert("Title is empty.", false);
    return;
  }

  if (!ui.author.value) {
    ui.showAlert("Author is empty.", false);
    return;
  }

  if (!ui.isbn.value) {
    ui.showAlert("ISBN is empty.", false);
    return;
  }

  if (!Boolean(Number(ui.isbn.value))) {
    ui.showAlert("ISBN is not a number.", false);
    return;
  }

  currentItem.firstElementChild.innerHTML = ui.title.value;
  currentItem.firstElementChild.nextElementSibling.innerHTML = ui.author.value;
  currentItem.firstElementChild.nextElementSibling.nextElementSibling.innerHTML =
    ui.isbn.value;

  ui.showAlert(`${prevItemName} has been updated successfully.`);

  ui.clearFields();

  ui.subheading.innerHTML = "Add Book".toUpperCase();

  ui.addButton.setAttribute("type", "submit");
  ui.addButton.style.display = "inline-block";
  ui.updateButton.setAttribute("type", "button");
  ui.updateButton.style.display = "none";
  ui.cancelButton.style.display = "none";

  ui.setCurrentItem(null);

  event.preventDefault();
};

UI.prototype.handleCancelButton = function () {
  const ui = new UI();

  ui.clearFields();

  ui.subheading.innerHTML = "Add Book".toUpperCase();

  ui.addButton.setAttribute("type", "submit");
  ui.addButton.style.display = "inline-block";
  ui.updateButton.setAttribute("type", "button");
  ui.updateButton.style.display = "none";
  ui.cancelButton.style.display = "none";

  ui.setCurrentItem(null);
};

const Book = function (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};
