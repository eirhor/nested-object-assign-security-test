const assign = require('nested-object-assign');

function nestedObjectAssignTest() {
    assign(Object.prototype, {
        nestedObjectAssignTest: 'hello world'
    });
}

nestedObjectAssignTest();
console.log("result from nested-object-assign:")
console.log(Object.prototype.hasOwnProperty('nestedObjectAssignTest') ? "mutated Object.prototype" : "did not mutate");

function objectAssignTest() {
    Object.assign(Object.prototype, {
        objectAssignTest: 'hello world'
    });
}

objectAssignTest();
console.log("result from Object.assign:")
console.log(Object.prototype.hasOwnProperty('objectAssignTest') ? "mutated Object.prototype" : "did not mutate");