// document.getElementById
// console.log(document.getElementById("card"));
// console.log(document.getElementById("card").classList);

// const card = document.getElementById("card");
// console.log(card);

// card.style.background = "#232323";
// card.style.color = "white";
// card.innerHTML = "";

let result = document.querySelector(".card");
result = document.querySelector("#card");

result = document.querySelector("li");

document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "blue";

console.log(result);
