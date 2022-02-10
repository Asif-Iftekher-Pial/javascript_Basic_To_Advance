var students = [ // ceating student array variable ...
    { // creating objects of the variable
        name: "Pial", // datas
        age: 20,
        cgpa: 3
    }, {
        name: "Asif",
        age: 30,
        cgpa: 5
    }, {
        name: "iftekher",
        age: 10,
        cgpa: 2
    }, {
        name: "bibkj",
        age: 200,
        cgpa: 30
    },

]

// retrive the names of the student whos CGPA is higher then 3  with traditional function
/*
function studentName(){
    students.filter(function(takingValue){ // students array variable filtering , filter expect function with parametr
       if (takingValue.cgpa > 3) {
           
        console.log(takingValue.name);
       }
        
    })
}
console.log(studentName());
*/


//aulternative way Using Map() function
function studentName() {
    return students.filter(function (x) { //return students filter 
        return x.cgpa > 3;
    }).map(function (y) {  // map function expect function with paramter for reciving value and retirn as array
        return y.name; // returning names as array
    })
}
console.log(studentName());

// retrive the names of the student whos CGPA is higher then 3  with Array function

const studentArray = () => {
    return students.filter((x) => (x.cgpa > 3)).map((y) => y.name);
}
console.log(studentArray());