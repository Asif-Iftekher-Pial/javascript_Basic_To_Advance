console.clear();
var locationSelect=document.querySelector(".location-div");

var p1=locationSelect.children[0]; // selecting the first paragraph tag
p1.innerText=location.href; //showing href into paragraph
var p2=locationSelect.children[1];
p2.innerText=location.protocol; // showing protocol
var p3=locationSelect.children[2];
p3.innerText=location.hostname;
//console.log(p1);

const findingButton= document.querySelector("#buttonId");
//console.log(findingButton);
findingButton.addEventListener("click", function(){
    //console.log("hello");
    location.assign("http://www.google.com");
});