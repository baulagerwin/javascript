const clearButton = document.querySelector(".clear-list");
const card = document.querySelector(".card");
const heading = document.querySelector("#grocery-title");

// Click
// clearButton.addEventListener("click", handleEvent);

// DoubleClick
// clearButton.addEventListener("dblclick", handleEvent);

// MouseDown
// clearButton.addEventListener("mousedown", handleEvent);

// MouseUp
// clearButton.addEventListener("mouseup", handleEvent);

// MouseEnter
// clearButton.addEventListener("mouseenter", handleEvent);

// MouseLeave
// clearButton.addEventListener("mouseleave", handleEvent);

// Mouseover
// card.addEventListener("mouseover", handleEvent);

// Mouseout
// card.addEventListener("mouseout", handleEvent);

// Mousemove
// Can be used with offsetX or offsetY
card.addEventListener("mousemove", handleEvent);

function handleEvent(e) {
  console.log("Event type: " + e.type);

  heading.innerHTML = `Mouse X: ${e.offsetX} MouseY: ${e.offsetY}`;

  e.preventDefault();
}
