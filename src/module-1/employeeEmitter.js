let EventEmitter = require('events').EventEmitter;


module.exports = class EmployeeEmitter extends EventEmitter {

    constructor(data) {
        super();

        // Array to hold emplyee objects
        this.data = data;

        // Counter used for unique id
        this.currentId = 0;
    }

    lookupById(id) {
        this.emit('lookupById', JSON.stringify({ id: id }));
        for (const employee of this.data) {
            if (employee.id === id) {
                return employee;
            }
        }
        return;
    }

    lookupByLastName(last) {
        this.emit('lookupByLastName', JSON.stringify({ lastName: last }));
        let returnArr = []

        for (const employee of this.data) {
            if (employee.lastName === last) {
                returnArr.push(employee);
            }
        }

        return returnArr;
    }

    addEmployee(first, last) {
        this.emit('addEmployee', JSON.stringify({ firstName: first, lastName: last }));
        this.currentId++;
        this.data.push({
            id: this.currentId,
            firstName: first,
            lastName: last
        });
    }
}