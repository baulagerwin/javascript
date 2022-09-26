let result;

const employee = {
  job: "Developer",
  lastName: "Baula",
  qualities: ["NEET", "SmartAss", "Coward"],
  age: 25,
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

result = employee;
// result = employee.job;
// result = employee["job"];
employee["firstName"] = "Gerwin";
employee.address = "82 Champaca Street, Western Bicutan, Taguig City";

result = employee.lastName;
result = employee.qualities;
result = employee.qualities[0];
result = employee.getBirthYear();

console.log(result);
