
// Array to hold emplyee objects
let employeeArray = [];

// Counter used for unique id
let currentId = 0;

module.exports.lookupById = (id) => {
    for (const employee of employeeArray) {
        if (employee.id === id) {
            return employee;
        }
    }
    return;
}

module.exports.lookupByLastName = (last) => {
    let returnArr = []

    for (const employee of employeeArray) {
        if (employee.lastName === last) {
            returnArr.push(employee);
        }
    }

    return returnArr;
}

module.exports.addEmployee = (first, last) => {
    currentId++;
    employeeArray.push({
        id: currentId,
        firstName: first,
        lastName: last
    });
}