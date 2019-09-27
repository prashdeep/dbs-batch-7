//closures

//stage 1 
/*
 var outerFun = function(firstname, lastname){
     var message = 'Hello !! '
     console.log('Came inside the outer function');
     (function greet(){
         console.log(message + firstname + ' '+ lastname);
     })();

     
 }
 */

 var outerFun = function(firstname, lastname){
     var message = 'Hello !! '
     console.log('Came inside the outer function');
     return function greet(){
         console.log(message + firstname + ' '+ lastname);
     }
 }



 //var greetFun  = outerFun('Vinay','Kumar');
 //greetFun();



 //encapsulation 

 var project = function() {
    id = 24;
    name = 'DBS-Fullstack-Training';
    address = {
        city:'Hyderabad',
        area:'Gachibowli'
    };

    return {
        setName:function(n){
            name = n;
        },

        getName:function(){
            return name
        },
        getProjectDetails:function(){
            return name+" "+ " located in "+ address.city +" at "+ address.area;
        }
    }
}()


project.setName("DBS-Dveops")
console.log(project.getProjectDetails())
