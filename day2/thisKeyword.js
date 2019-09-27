//this keyword
/*
function func1(a, b){
    console.log(arguments)
    console.log(this);
}

console.log(func1(100,true))
*/

var printName = function(message, arg2){
    console.log(message + this.name + arg2);
}

var person = {
    id:34,
    name:'Ramesh'
}

var course = {
    id:43,
    name:'Angular'
}


//using call
/*
printName.call(person, "Hello !! ", "arg2");
printName.call(course, "Welcome to the course !! ", "eewrewr");
printName.call({name:'Full stack training'}, "Welcome to ", "dsfsdffd");


//using apply
printName.apply(person, ["Hello !! "," Thanks "]);
printName.apply(course, ["Welcome to the course !!", " Regards "]);
printName.apply({name:'Full stack training'}, ["Welcome to ", "Welcome "]);



var personPrintName = printName.bind(person, "Welcome to the course ", " Thanks !!");
console.log('The above function will not be executed unitill called explicitly ....')
personPrintName();

*/

//this keyword in the context of object

var project = {
    id:24,
    name:'DBS-Fullstack-Training',
    address:{
        city:'Hyderabad',
        area:'Gachibowli'
    },

    setName:function(name){
        this.name = name;
    },

    getName:function(){
        return this.name
    },
    getProjectDetails:function(){
        return this.name+" "+ " located in "+ this.address.city +" at "+this.address.area;
    }
}


console.log(project.getProjectDetails());