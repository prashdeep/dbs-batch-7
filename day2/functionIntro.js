// single line comment

/*
    multi line comment
*/

// 1. function expression

var greet = function(message){
    console.log('type of argument is '+ typeof message);
    console.log("hello world !!" + message());
}

//function invocation
//var message = "Welcome to Javascript training";
//greet(message);


//2. passing function as argument

var message = function(){
    return "Welcome to functional style of Javascript training!!"
}

//greet(message);

//3. Function can be returned from a function

//function passing another function
var sum = function(a, b){return a + b;}

var sub = function(a,b){return a - b;}

var multiply = function(a, b){
    return a * b;
}


var calculate = function(a, b, mathFun){
    console.log('executing the math function ');
    return mathFun(a,b);
}

//var result = calculate(50,5, multiply);
//  console.log('The result is '+result);

var squareResult  = calculate(45,67, function(a, b){return a + b;}
);

//console.log(squareResult)

//3. Function returning another function 


var greet = function(firstName, lastName){

    var greetWithMessage = function(greetMessage){
        console.log(greetMessage + " "+firstName +" "+ lastName);
    }

    return greetWithMessage;
}

var result = greet('Vinay', 'Kumar');
//result("Welcome to Javascript with Angular Training !! ");


var calculateBillAmount = function(billAmountWithoutTax){

    return function(taxInPercentage){
        var billAmountWithTax = billAmountWithoutTax + (taxInPercentage/100) * billAmountWithoutTax;
        return function(tipAmount){
            var totalBill = billAmountWithTax + tipAmount;
            return totalBill;
        }
    }
    
}

var result = calculateBillAmount(2000)(18)(40);

console.log('Your total bill amount including tip is '+result);













