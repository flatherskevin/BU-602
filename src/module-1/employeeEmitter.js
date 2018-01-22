let EventEmitter = require('events').EventEmitter;

module.exports = class EmployeeEmitter extends EventEmitter {
    employeeArray;
    currentId;
    
    constructor(data) {
        super();
        this.data = data;
        this.employeeArray = [];
        this.currentId = 0;
    }

    lookupById(id) {
        this.emit('lookupById', { id: id });
        for (const employee of employeeArray) {
            if (employee.id === id) {
                return employee;
            }
        }
        return;
    }

    lookupByLastName(last) {
        this.emit('lookupByLastName', { lastName: last });
        let returnArr = []

        for (const employee of employeeArray) {
            if (employee.lastName === last) {
                returnArr.push(employee);
            }
        }

        return returnArr;
    }

    addEmployee(first, last) {
        this.emit('addEmployee', { firstName: first, lastName: last });
        currentId++;
        employeeArray.push({
            id: currentId,
            firstName: first,
            lastName: last
        });
    }
}