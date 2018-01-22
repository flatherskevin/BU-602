let EventEmitter = require('events').EventEmitter;


module.exports = class EmployeeEmitter extends EventEmitter {

    constructor(data) {
        super();
        this.data = data;
        this.employeeArray = [];
        this.currentId = 0;
    }

    lookupById(id) {
        this.emit('lookupById', JSON.stringify({ id: id }));
        for (const employee of this.employeeArray) {
            if (employee.id === id) {
                return employee;
            }
        }
        return;
    }

    lookupByLastName(last) {
        this.emit('lookupByLastName', JSON.stringify({ lastName: last }));
        let returnArr = []

        for (const employee of this.employeeArray) {
            if (employee.lastName === last) {
                returnArr.push(employee);
            }
        }

        return returnArr;
    }

    addEmployee(first, last) {
        this.emit('addEmployee', JSON.stringify({ firstName: first, lastName: last }));
        this.currentId++;
        this.employeeArray.push({
            id: this.currentId,
            firstName: first,
            lastName: last
        });
    }
}