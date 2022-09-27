const form = document.querySelector("form");
const nameInput = document.getElementById("grocery-item-name");
const descriptionInput = document.getElementById("grocery-item-description");
const heading = document.querySelector("h4");

// Submit
// form.addEventListener("submit", handleEvent);

// Keydown
// nameInput.addEventListener("keydown", handleEvent);

// Keyup
// nameInput.addEventListener("keyup", handleEvent);

// Keypress
// nameInput.addEventListener("keypress", handleEvent);

// Focus
// nameInput.addEventListener("focus", handleEvent);

// Blur
// nameInput.addEventListener("blur", handleEvent);

// Cut
// nameInput.addEventListener("cut", handleEvent);

// Paste
// nameInput.addEventListener("paste", handleEvent);

// Input
// nameInput.addEventListener("input", handleEvent);

// Change
// document.getElementById("select").addEventListener("change", handleEvent);

function handleEvent(e) {
  console.log("Event type: " + e.type);
  // console.log(nameInput.value, descriptionInput.value);

  // nameInput.value = "";
  // descriptionInput.value = "";

  console.log(e.target.value);

  // e.preventDefault();
}
