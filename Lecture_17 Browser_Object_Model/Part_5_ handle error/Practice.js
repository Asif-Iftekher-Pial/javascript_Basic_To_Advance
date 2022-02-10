const selectButton = document.querySelector("#btn");
const selectInput = document.querySelector("#inputCheck");

selectButton.addEventListener("click", function (e) {
    //console.log("button working");
    var inputValue = selectInput.value;
    //alert(inputValue);
    try {
        if (inputValue < 5) {
            throw "input is below 5"; // this is custome error massage that will throw will pass the information to the catch paremeter error
        }else if(inputValue > 10){
            throw "input is higher then 10 ";
        }
    } catch (error) { 
        console.log(error); // showing custom error recived from throw
    } finally {
        console.log("finally section always execute");

    }
});

