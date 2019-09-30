import { EmployeeTest, testFunction } from "./Employee";
import { Product, ProductType, COMPANY_NAME } from "./Product";

const vijay = new EmployeeTest('Vijay','Krishnan');
 
let manish = new EmployeeTest('Manish', 'Vinay');
let vinay = new EmployeeTest('Vinay', 'Kumar');

console.log(vinay.firsname)
testFunction();

const iPhone = new Product("IPhone", 85000,"branded Iphone", ProductType.CELLPHONE);
const samsung = new Product("Samsumg", 65000, "Galaxy Note 10", ProductType.ELECTRONICS);

iPhone.price = 45000;
console.log(`${iPhone.price}  is from ${COMPANY_NAME}`);

