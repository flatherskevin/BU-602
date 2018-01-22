let EventEmitter = require('events').EventEmitter;

class EmployeeEmitter extends EventEmitter {
    constructor(data) {
        this.data = data;
    }

    lookupById = (id) => {
        this.emit('lookupById')
        for (const employee of employeeArray) {
            if (employee.id === id) {
                return employee;
            }
        }
        return;
    }

    lookupByLastName = (last) => {
        let returnArr = []

        for (const employee of employeeArray) {
            if (employee.lastName === last) {
                returnArr.push(employee);
            }
        }

        return returnArr;
    }

    addEmployee = (first, last) => {
        currentId++;
        employeeArray.push({
            id: currentId,
            firstName: first,
            lastName: last
        });
    }
}