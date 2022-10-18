import { FormComponent } from "./FormComponent.js";
import { Library } from "./Library.js";
import { TableComponent } from "./TableComponent.js";

function handleContentLoaded() {
  const form = document.querySelector(".form");

  const library = new Library();
  library.init();

  form.addEventListener("submit", function (event) {
    const f = new FormComponent();
    const t = new TableComponent();

    if (f.isResultShowing) {
      event.preventDefault();
      return;
    }

    try {
      const book = f.validateFields();
      t.addBook(book);
      f.clearFields();
      f.showResult(`${book.title} has been added successfully.`, true);
    } catch (e) {
      // Log the error
      f.showResult(e.message, false);
    }

    event.preventDefault();
  });
}

window.addEventListener("DOMContentLoaded", handleContentLoaded);
