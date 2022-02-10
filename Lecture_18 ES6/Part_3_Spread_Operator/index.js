
let numbers=[10,20,30,40];
const addNumbers = (a,b,c,d) =>{
    sum = a+b+c+d;
console.log(`sum value = ${sum}`);
};
addNumbers(...numbers); // here ... (3 dots) before numbers Variable will spread the array index

let p1={
    name: "Pial",
    age: "25"
};
let p2={
    nationality: "Bangladeshi",
    country: "Bangladesh"
}
let addjust = {...p1, ...p2}; //concatinating two variable p1 and p2
console.log(addjust);