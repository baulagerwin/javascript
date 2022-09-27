let result = document;

result = document.all;
result = document.all[0];
result = document.all.length;
result = document.head;
result = document.body;
result = document.domain;
result = document.URL;
result = document.contentType;

result = document.links;
result = document.links[0];
result = document.links[0].id;
result = document.links[0].classList;

result = document.images;

result = document.scripts;

// result.forEach(function(script) {
//     console.log(script);
// });

result = Array.from(result);

result.forEach(function (script) {
  console.log(script);
});

console.log(result);
