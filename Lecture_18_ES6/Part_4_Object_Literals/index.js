const studentInfo =(name,age)=>{

    return{ // returning objects
        //name: name, // this are old method 
        //age: age // this are old method  but in ES6 we can eliminate right side variable
        name, // same as name: name
        age // same as age: age
    }
};
console.log(studentInfo("Asif Iftekhar",20));

/* consize object function (making function inside object) */

let consizeVariable ={
    body(){ //function
        return "i am object variable";
    }
}
console.log(consizeVariable.body); // calling the body function of "consizeVariable" variable