// document.querySelector(".clear-list").addEventListener("click", function (e) {
//   console.log("hello, world");
//   e.preventDefault();
// });

document.querySelector(".clear-list").addEventListener("click", handleEvent);

function handleEvent(e) {
  // console.log(e);

  let result = e.target;
  result = e.target.id;
  result = e.target.className;
  result = e.target.classList;
  result = e.type;
  result = e.timeStamp;

  result = e.clientY;
  result = e.clientX;

  result = e.offsetY;
  result = e.offsetX;

  console.log(result);

  e.preventDefault();
}
