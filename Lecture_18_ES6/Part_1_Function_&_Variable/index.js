/* var = this variable can be change if declare second time and second value will be the last
let = this variable will not change if declare second time,second value will show ,but first value will remain same
const = this variable is fixed, if declare second time and assing new value it will show error  */

let x= 10;
let y = 20;
let sum= x + y;
console.log(`sum is ${sum} the end`); /* in ES6 we dont need "" and + for string concatination 
 we can use ` ` instead */ 

 let name=`Pial`;
 let fullName=`Asif Iftekhar`;
 console.log(`my name is ${fullName} ${name}`);

 // Normal javascript function declaration
 function addNormal(x,y){
     var sum = x+y;
     console.log(sum);
 };
 addNormal(5,10); //calling add function

 //But Declaring Function in ES6

const addES =(a,b) => {
    var sumES = a+b;
     console.log(sumES);

};
addES(40,50); // calling function 


// function without paremeter calling 
const addESS = () => {
    let ab = 50;
    let bc = 60;
    var sumE = ab+bc;
     console.log(sumE);

};
addESS(); // calling function 
