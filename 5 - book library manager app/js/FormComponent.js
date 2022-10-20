import { Book } from "./Book.js";
import { Library } from "./Library.js";
import { SubHeadingElement } from "./SubHeadingElement.js";

export function FormComponent() {
  let form = document.querySelector(".form");

  let titleElement = document.querySelector("#title");
  let authorElement = document.querySelector("#author");
  let isbnElement = document.querySelector("#isbn");

  let addButton = document.querySelector(".btn--add");
  let updateButton = document.querySelector(".btn--edit");
  let cancelButton = document.querySelector(".btn--cancel");

  let handleCancelButton = function () {
    let form = new FormComponent();

    form.clearFields();
    form.setToAddMode();
  };

  let handleConfirmButton = function (event) {
    let form = new FormComponent();

    if (form.isResultShowing) {
      event.preventDefault();
      return;
    }

    if (!form.getTitle()) {
      form.showResult("Title is empty.", false);
      return;
    }

    if (!form.getAuthor()) {
      form.showResult("Author is empty.", false);
      return;
    }

    if (!form.getIsbn()) {
      form.showResult("ISBN is empty.", false);
      return;
    }

    if (!Boolean(Number(form.getIsbn()))) {
      form.showResult("ISBN is not a number.", false);
      return;
    }

    const currentBook = form.getCurrentItem();
    const prevBookName = currentBook.firstElementChild.innerHTML;

    currentBook.firstElementChild.innerHTML = form.getTitle();
    currentBook.firstElementChild.nextElementSibling.innerHTML =
      form.getAuthor();
    currentBook.firstElementChild.nextElementSibling.nextElementSibling.innerHTML =
      form.getIsbn();

    const library = new Library();

    const books = document.querySelectorAll("tbody tr");

    const index = Array.from(books).indexOf(currentBook);
    const book = new Book(form.getTitle(), form.getAuthor(), form.getIsbn());
    library.update(index, book);

    form.showResult(`${prevBookName} has been updated successfully.`, true);

    form.clearFields();
    form.setToAddMode();

    event.preventDefault();
  };

  this.getTitle = function () {
    return titleElement.value;
  };

  this.getAuthor = function () {
    return authorElement.value;
  };

  this.getIsbn = function () {
    return isbnElement.value;
  };

  this.setTitle = function (theTitle) {
    titleElement.value = theTitle;
  };

  this.setAuthor = function (theAuthor) {
    authorElement.value = theAuthor;
  };

  this.setIsbn = function (theIsbn) {
    isbnElement.value = theIsbn;
  };

  this.isResultShowing = Boolean(document.querySelector(".alert"));

  this.setToUpdateMode = function (book) {
    let subheading = new SubHeadingElement();
    subheading.setSubheading("Update Book".toUpperCase());

    addButton.setAttribute("type", "button");
    addButton.style.display = "none";
    updateButton.setAttribute("type", "submit");
    updateButton.style.display = "inline-block";
    cancelButton.style.display = "inline-block";

    this.setCurrentItem(book);

    cancelButton.addEventListener("click", handleCancelButton);
    updateButton.addEventListener("click", handleConfirmButton);
  };

  this.setToAddMode = function () {
    let subheading = new SubHeadingElement();
    subheading.setSubheading("Add Book".toUpperCase());

    addButton.setAttribute("type", "submit");
    addButton.style.display = "inline-block";
    updateButton.setAttribute("type", "button");
    updateButton.style.display = "none";
    cancelButton.style.display = "none";

    this.setCurrentItem(null);
  };

  this.validateFields = function () {
    if (!titleElement.value) throw new Error("Title is empty!");
    if (!authorElement.value) throw new Error("Author is empty!");
    if (!isbnElement.value) throw new Error("ISBN is empty!");
    if (!Number(isbnElement.value)) throw new Error("ISBN is not a number!");
    return new Book(titleElement.value, authorElement.value, isbnElement.value);
  };

  this.clearFields = function () {
    titleElement.value = "";
    titleElement.blur();
    authorElement.value = "";
    authorElement.blur();
    isbnElement.value = "";
    isbnElement.blur();
  };

  this.showResult = function (message, status) {
    const resultElement = document.createElement("div");
    resultElement.innerHTML = message;

    !status
      ? resultElement.classList.add("alert", "failed")
      : resultElement.classList.add("alert", "success");

    form.insertBefore(resultElement, titleElement.parentElement);

    setTimeout(function () {
      resultElement.remove();
    }, 1000);
  };
}

FormComponent.currentBook = null;

FormComponent.prototype.getCurrentItem = function () {
  return FormComponent.currentItem;
};

FormComponent.prototype.setCurrentItem = function (item) {
  FormComponent.currentItem = item;
};
