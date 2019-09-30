"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(firsname, lastname) {
        this.firsname = firsname;
        this.lastname = lastname;
    }
    EmployeeTest.prototype.setFirstName = function (fName) {
        this.firsname = fName;
    };
    EmployeeTest.prototype.getFirstName = function () {
        return this.firsname;
    };
    EmployeeTest.prototype.setLastName = function (lName) {
        this.lastname = lName;
    };
    EmployeeTest.prototype.getLastName = function () {
        return this.lastname;
    };
    EmployeeTest.prototype.printEmployeeDetails = function () {
        return "FirstName: " + this.firsname + " , LastName: " + this.lastname;
    };
    return EmployeeTest;
}());
exports.EmployeeTest = EmployeeTest;
function testFunction() {
    console.log('came inside the test function');
}
exports.testFunction = testFunction;
