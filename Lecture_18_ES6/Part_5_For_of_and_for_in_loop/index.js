const property = ["10","20","30","40"];
//syntex for - for of loop
for( let i of property){  //storing value of property in => i 
     console.log(i);
}

//for in syntex (important when working with Object)
let students = {
    id : 101,
    name: "Pial",
    cgpa: 3.25

}
for(let x in students){ //storing all objects of students in x
    //console.log(x); // it will show all objects 
    console.log(` ${x} == ${students[x]}`); // it will show all objects with values
}