
//creating a function
function squre(a,b){
    a=number1;
    b=number2;
   
    var result= a * b;
    document.write("squre is = " + result);
}
function add(c,d,e){
    c=numberX;
    d=numberY,e=numberZ;
    var result= c + d + e;
    document.write("<br/> addition is = " + result);
}
//calling this function 
var number1=parseInt(prompt("enter first= "));
var number2=parseInt(prompt("enter second= "));
squre(number1,number2); //this will automatically call the squre(a,b) fucntion



var numberX=parseInt(prompt("enter first for add= "));
var numberY=parseInt(prompt("enter second for add= "));
var numberZ=parseInt(prompt("enter third for add= "));
add(numberX,numberY,numberZ);
//add(); //this will automatically call the squre() fucntion