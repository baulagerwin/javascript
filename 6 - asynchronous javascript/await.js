async function retrieveEmployees() {
    
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('Test'), 1000);
    // })

    // const result = await promise;

    // return result;

    const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');

    const employees = await response.json();

    return employees;
}

retrieveEmployees()
    .then(response => console.log(response));