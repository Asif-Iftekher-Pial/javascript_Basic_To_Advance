
var sum = 0;

for(var i=0; i<5; i++){

    var userNum = parseInt(prompt("Enter number: "));
    console.log(userNum);
    sum = sum + userNum;
};
console.log("sum = " + sum);