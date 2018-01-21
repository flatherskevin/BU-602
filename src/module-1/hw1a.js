const employee = require('./employeeModule');

// Add some base employees
employee.addEmployee('John', 'Smith');
employee.addEmployee('Jane', 'Smith');

console.log(employee.lookupByLastName('Smith'));

employee.addEmployee('William', 'Smith');

console.log(employee.lookupByLastName('Smith'));

let employeeId2 = employee.lookupById(2);

console.log(employeeId2);

employeeId2.firstName = typeof employeeId2 === 'undefined' ? undefined : 'Mary';

console.log(employee.lookupByLastName('Smith'));