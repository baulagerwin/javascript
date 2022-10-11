const personPrototype = {
  eat: function () {
    return `My name is ${this.firstName} ${this.lastName} and I'm currently eating.`;
  },
};

// Object.create
const phil = Object.create(personPrototype);

phil.firstName = "Phil";
phil.lastName = "Warshavsky";

const tim = Object.create(personPrototype, {
  firstName: {
    value: "Tim",
  },
  lastName: {
    value: "Cook",
  },
});

console.log(phil);
console.log(phil.eat());

console.log(tim);
console.log(tim.eat());
