import { TableComponent } from "./TableComponent.js";

export function Library() {
  let key = "books";
  let value = [];

  this.init = function () {
    const table = new TableComponent();

    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }

    const books = JSON.parse(localStorage.getItem(key));
    for (const book of books) table.addBook(book, false);
  };

  this.add = function (book) {
    const books = JSON.parse(localStorage.getItem(key));
    books.push(book);
    localStorage.setItem(key, JSON.stringify(books));
  };

  this.update = function (index, book) {
    const books = JSON.parse(localStorage.getItem(key));
    books[index] = book;
    localStorage.setItem(key, JSON.stringify(books));
  };

  this.delete = function (index) {
    const books = JSON.parse(localStorage.getItem(key));
    books.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(books));
  };
}
