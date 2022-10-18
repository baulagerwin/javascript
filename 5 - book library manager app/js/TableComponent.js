import { FormComponent } from "./FormComponent.js";
import { Library } from "./Library.js";

export function TableComponent() {
  let tbodyElement = document.querySelector(".books-table tbody");

  let handleUpdateButton = function (event) {
    if (!event.target.classList.contains("btn--update")) return;

    let item = event.target.parentElement.parentElement;

    const form = new FormComponent();

    form.setTitle(item.firstElementChild.innerHTML);
    form.setAuthor(item.firstElementChild.nextElementSibling.innerHTML);
    form.setIsbn(
      item.firstElementChild.nextElementSibling.nextElementSibling.innerHTML
    );

    form.setToUpdateMode(item);
  };

  let handleRemoveButton = function (event) {
    if (!event.target.classList.contains("btn--remove")) return;
    if (!confirm("Are you sure?")) return;

    const library = new Library();
    const book = event.target.parentElement.parentElement;
    const name = book.firstElementChild.innerHTML;

    const books = document.querySelectorAll("tbody tr");
    const index = Array.from(books).indexOf(book);

    book.remove();
    library.delete(index);

    new FormComponent().showResult(
      `${name} has been deleted successfully.`,
      true
    );
  };

  this.addBook = function (book, shouldPersist = true) {
    const library = new Library();

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
    updateButton.addEventListener("click", handleUpdateButton);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerHTML = "Delete";
    removeButton.classList.add("btn--remove");
    removeButton.addEventListener("click", handleRemoveButton);

    updateColumn.appendChild(updateButton);
    removeColumn.appendChild(removeButton);

    bookRow.appendChild(updateColumn);
    bookRow.appendChild(removeColumn);

    tbodyElement.appendChild(bookRow);

    if (shouldPersist) library.add(book);
  };
}
