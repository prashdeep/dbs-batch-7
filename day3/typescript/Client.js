"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var Product_1 = require("./Product");
var NetBanking_1 = require("./NetBanking");
var vijay = new Employee_1.EmployeeTest('Vijay', 'Krishnan');
var manish = new Employee_1.EmployeeTest('Manish', 'Vinay');
var vinay = new Employee_1.EmployeeTest('Vinay', 'Kumar');
//console.log(vinay.firsname)
//testFunction();
var iPhone = new Product_1.Product("IPhone", 85000, "branded Iphone", Product_1.ProductType.CELLPHONE);
var samsung = new Product_1.Product("Samsumg", 65000, "Galaxy Note 10", Product_1.ProductType.ELECTRONICS);
iPhone.price = 45000;
//console.log(`${iPhone.price}  is from ${COMPANY_NAME}`);
var exchangeMoney = new NetBanking_1.CashDelivery();
exchangeMoney.transferMoney('Harish', 'Ashok');
