// var selectButton=document.querySelector("#buttonId"); //find the button by its id
// selectButton.addEventListener("click",clickFunction); // for click event - addEventListener then call the function

// function clickFunction(){
//     alert("Hello world");
// }

// but  best practice is -
var seletion= document.querySelector("#first_id");
document.querySelector("#buttonId").addEventListener("click",function(){
    seletion.classList.add("my-style"); // classList method helps to add class
    //console.log(seletion);

});

document.querySelector("#buttonIdTwo").addEventListener("click",function(){
    seletion.classList.remove("my-style"); // classList method helps to add class
    //console.log(seletion);

});