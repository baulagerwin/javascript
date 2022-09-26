const name = "Gerwin";
const age = 19;
const occupation = "Web Developer";

let html;

html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Occupation: " +
  occupation +
  "</li></ul>";

html = `<ul>
          <li>Name: ${name}</li>
          <li>Age: ${age}</li>
          <li>Occupation: ${occupation}</li>
        </ul>
          `;

document.body.innerHTML = html;
