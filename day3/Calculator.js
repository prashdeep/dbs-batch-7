
/*const sum = (a, b)=> a + b;
const sub = (a, b)=> a - b;
const product = (a, b)=> a * b;

console.log(sum(56,56));
*/


const outerFunction   = function(firstname, lastname){
    let message = "hello";

    console.log(" inside the outer function..." )
    console.log(this);
    let innerFunction = ()=>{
        console.log(`${firstname} ${lastname} with ${message}`)
        console.log('printing the value of this inside the inner function ...')
        console.log(this)
    }
    innerFunction()
}

outerFunction.call({name:'DBS'},'naveen', 'reddy');