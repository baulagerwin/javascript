// Local Storage API

localStorage.setItem("name", "Gerwin");

localStorage.removeItem("name");

console.log(localStorage.getItem("name"));

localStorage.clear();

// Session Storage API
sessionStorage.setItem("isTrue", false);
sessionStorage.removeItem("isTrue");

console.log(sessionStorage.getItem("isTrue"));
