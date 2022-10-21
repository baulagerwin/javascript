// Basic Module Structure
// (function() {
//     // Private variables and functions

//     return {
//         // Public variables and functions
//     }
// })

// Standard Module Pattern

// const UIController = (function() {
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector('h1');

//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             console.log('Text has been changed.');
//         }
//     }
// })();

// UIController.callChangeText();
// UIController.changeText();

// console.log(UIController.text);

// Revealing Module Pattern

const EmployeeController = (function() {
    let list = [];

    function addEmployee(name) {
        list.push(name);
        console.log(`${name} has been added as an employee.`);
    }

    function getEmployee(name) {
        return list.find(employee => employee === name);
    }

    return {
        addEmployee: addEmployee,
        // getEmployee: getEmployee
    }
})();

EmployeeController.addEmployee('Phil');

console.log(EmployeeController.getEmployee('Phil'));