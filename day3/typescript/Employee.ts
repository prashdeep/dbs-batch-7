class Employee {
    firsname;
    lastname;
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

let manish = new Employee('Manish', 'Vinay');
let vinay = new Employee('Vinay', 'Kumar');

console.log(vinay.firsname)
