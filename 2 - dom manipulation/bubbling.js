// Event Bubbling

// document.querySelector("#add-item-btn").addEventListener("click", function (e) {
//   console.log("add button");
//   e.preventDefault();
// });

// document
//   .querySelector("#grocery-item-form")
//   .addEventListener("click", function (e) {
//     console.log("form component");
//     e.preventDefault();
//   });

// document.querySelector(".card-content").addEventListener("click", function (e) {
//   console.log("card content div");
//   e.preventDefault();
// });

// document.querySelector("#card").addEventListener("click", function (e) {
//   console.log("card");
//   e.preventDefault();
// });

// Event Delegation
document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-remove")) {
    e.target.parentElement.parentElement.parentElement.remove();
    console.log("Valid");
  }

  console.log("Invalid");
});
