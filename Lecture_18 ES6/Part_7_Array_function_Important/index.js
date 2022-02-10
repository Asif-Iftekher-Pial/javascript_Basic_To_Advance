//tradition functiom
function displayOne(){
    console.log(`Hi its Pial`);
}
displayOne();
//Array Function (ES6)
const displayTwo = () =>{
    console.log(`Hi i am array function`);
}
displayTwo();

/* passing parameter in both traditional and Array function way  */

/* Tradition function */

function traditional(num1,num2){
    return num2+num1;
}
console.log(traditional(5,10)); 


/* Array  function */

const arrayFunction = (number1,number2) =>{
    return number1+number2;
}
console.log(arrayFunction(5,30));