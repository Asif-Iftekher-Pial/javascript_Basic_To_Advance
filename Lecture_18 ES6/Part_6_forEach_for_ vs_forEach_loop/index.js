/* foreach loop */
let numbers= [10,20,30,40];
numbers.forEach(element); // foreach always expect a function in parameter soo, here function is "element"

function element(x){ // taking values from number to "element" function via parameter
    console.log(x) //  printing the parametr 
};

// another way
 let allNumbers=[100,200,300,400];
 allNumbers.forEach(function(x) { //anonymus function
     console.log(x);
 });