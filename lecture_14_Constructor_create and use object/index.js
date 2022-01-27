//constructor is a template which we can use it frequently.
function Student(name,age,cgpa){ //here Student is a parameterized construcor
    this.name = name; //value of name will store in -> this.name
    this.age = age;
    this.cgpa = cgpa;

    this.display=function(){ //here display is the method or function in constructor
        
        console.log("properties of display function");
        console.log(this.name); //printing name
        
    };
    this.displayageandcgpa=function(){ //here display is the method or function in constructor
        console.log("properties of displayageandcgpa function");
        
        console.log(this.age);
        console.log(this.cgpa);
       
    };
};
var a=prompt("enter name = ");
var b = parseInt(prompt("enter age = "));
var c = parseInt(prompt("enter cgpa = "));

var studentInfo1 = new Student("pial","20","3.5"); // direct values  for constructor parameter
var studentInfo2 = new Student("asif","30","4.5"); // direcct values  for constructor parameter

var studentInfo3 = new Student(a,b,c); // defining values  for constructor parameter by user input

studentInfo3.display(); //calling the method in constructor
studentInfo3.displayageandcgpa();