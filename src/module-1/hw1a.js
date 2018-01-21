const employee = require('./employeeModule');

console.log(employee.lookupByLastName('Smith'));

employee.addEmployee('William', 'Smith');

console.log(employee.lookupByLastName('Smith'));

let employeeId2 = employee.lookupById(2);

console.log(employeeId2);

let employeeId2.firstName = typeof employeeId2 === 'undefined' ? undefined : 'Mary';