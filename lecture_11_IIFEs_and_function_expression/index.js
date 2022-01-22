
//normal function calling ,
function display(){
    console.log("hello world");
}
display();

//keep the entire function in a variable and call the variable
var newvariable=function display(){
    console.log("hello world");
}
newvariable();


//but this is IIFEs (immidiate invocable function expression) and function expression

(function displaymessage(){
    console.log("hello javascript");
})(); // (); will automatically call the displaymessage function immediately

// another example
(function displaymessagetwo(message){
    console.log(message);
})("modified javascript program"); // this will go to the message parameter of the displaymessagetwo function and return via console 

(function displaymessagetwo(message,message1){
    var result=message+message1;
    console.log(result);
})(5,10);


//add two number using IIEFs 
var addition = function addition(num1, num2){
    sum = num1 + num2;
    console.log(sum);
 }

 addition(20,10);