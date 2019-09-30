export class EmployeeTest {
    firsname:string;
    lastname:string;
    constructor(firsname:string, lastname:string){
        this.firsname = firsname;
        this.lastname = lastname;
    }

    setFirstName(fName:string):void{
        this.firsname = fName;
    }

    getFirstName():string{
        return this.firsname;
    }

    setLastName(lName:string):void{
        this.lastname = lName;
    }

    getLastName():string{
        return this.lastname;
    }

    printEmployeeDetails():string{
        return `FirstName: ${this.firsname} , LastName: ${this.lastname}`
    }
}



 export function testFunction() {
    console.log('came inside the test function');
}
