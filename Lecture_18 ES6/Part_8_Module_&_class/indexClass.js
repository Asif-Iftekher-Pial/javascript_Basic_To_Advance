class Student{
    constructor(id,name){ //if we create a class , we must need constructor and if constructor has parameter we need this operator to transfer value from parameter
        this.id = id; //left side id is now in right side this.id 
        this.name=name; //same
    }
    //craeting a set function 
    set setName(name){
        this.name=name;
    }
}

//calling class 
let s1 = new Student(10,"constructor Pial"); 
console.log(s1.name);
console.log(s1.id);
//calling set function with giving value
s1.setName = "Setting name from seName function";
//printing the setName function value 
console.log(s1.name);
