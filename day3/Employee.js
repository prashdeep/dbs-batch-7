class Employee {
    constructor(firsname, lastname){
        this.firsname = firsname;
        this.lastname = lastname;
    }

    setFirstName(fName){
        this.firsname = fName;
    }

    getFirstName(){
        return this.firsname;
    }

    setLastName(lName){
        this.lastname = lName;
    }

    getLastName(){
        return this.lastname;
    }

    printEmployeeDetails(){
        return `FirstName: ${this.firsname} , LastName: ${this.lastname}`
    }
}

const hari = new Employee('Hari', 'Vinay');
const kishore = new Employee('Kishore', 'Kumar');

console.log(hari.firsname)
