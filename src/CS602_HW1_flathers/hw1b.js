let EmployeeEmitter = require('./employeeEmitter');

let data = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Smith'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith'
    }
]

let employeeEmitter = new EmployeeEmitter(data);

employeeEmitter.on('lookupById', (data) => {
    console.log('Event lookupById raised! ' + data);
});

employeeEmitter.on('lookupByLastName', (data) => {
    console.log('Event lookupByLastName raised! ' + data);
});

employeeEmitter.on('addEmployee', (data) => {
    console.log('Event addEmployee raised! ' + data);
});

console.log(employeeEmitter.lookupByLastName('Smith'));

employeeEmitter.addEmployee('William', 'Smith');

console.log(employeeEmitter.lookupByLastName('Smith'));

let employeeId2 = employeeEmitter.lookupById(2);