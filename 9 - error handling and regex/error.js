try {

    // ReferenceError
    // retrieveUsers();

    // TypeError
    // null.retrieveUsers();

    // SyntaxError
    // eval('Hello World');

    const employee = {name: 'Phil'};

    if (!employee.age) {
        throw new ReferenceError('Employee has no age');
    }


} catch (error) {

    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError);
} finally {
    console.log('Finally block executed.');
}

// retrieveUsers();

// console.log('Program is continuing.');