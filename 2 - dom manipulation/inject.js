const groceryList = document.querySelector(".item-list");

const groceryItem = document.createElement("li");

groceryItem.setAttribute("class", "collection-item");
groceryItem.id = "item-3";
groceryItem.style =
  "display: flex; align-items:center; justify-content: space-between;";

groceryItem.innerHTML = `
    <div class="item-info">
      <h5 class="item-name">Item 4</h5>
      <span class="item-description">Description 4</span>
    </div>
  `;

const removeButton = document.createElement("a");
removeButton.innerHTML = `<i class="fa fa-remove"></i>`;
removeButton.style = "cursor: pointer;";
removeButton.classList = "delete-item secondary-content";

const editButton = document.createElement("a");
editButton.innerHTML = `<i class="fa fa-edit"></i>`;
editButton.style = "cursor: pointer;";
editButton.classList = "edit-item secondary-content";

const buttonContainer = document.createElement("div");
buttonContainer.classList = "button-container";

buttonContainer.appendChild(removeButton);
buttonContainer.appendChild(editButton);

groceryItem.appendChild(buttonContainer);

groceryList.appendChild(groceryItem);
