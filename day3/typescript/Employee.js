var Employee = /** @class */ (function () {
    function Employee(firsname, lastname) {
        this.firsname = firsname;
        this.lastname = lastname;
    }
    Employee.prototype.setFirstName = function (fName) {
        this.firsname = fName;
    };
    Employee.prototype.getFirstName = function () {
        return this.firsname;
    };
    Employee.prototype.setLastName = function (lName) {
        this.lastname = lName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastname;
    };
    Employee.prototype.printEmployeeDetails = function () {
        return "FirstName: " + this.firsname + " , LastName: " + this.lastname;
    };
    return Employee;
}());
var manish = new Employee('Manish', 'Vinay');
var vinay = new Employee('Vinay', 'Kumar');
console.log(vinay.firsname);
