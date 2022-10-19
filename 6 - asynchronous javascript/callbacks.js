let siblings = [
  { id: 1, name: "Gerwin" },
  { id: 2, name: "Edcel" },
  { id: 3, name: "Alyssa" },
];

function addSibling(id, name, cbFunction) {
  setTimeout(function () {
    const sibling = {
      id,
      name,
    };

    siblings.push(sibling);
    cbFunction();
  }, 2000);
}

function getSiblings() {
  setTimeout(function () {
    let html = "";

    siblings.forEach(function (sibling) {
      html += `<li>${sibling.id}. ${sibling.name}</li>`;
    });

    document.body.innerHTML = html;
  }, 1000);
}

addSibling(4, "Edgelyn", getSiblings);
