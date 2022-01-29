var select = document.getElementById("first_id"); // select the paragraph by its ID 
//console.log(select);
var len=document.querySelectorAll(".btn").length;
for (var i = 0; i < len; i++) {

    document.querySelectorAll(".btn")[i].addEventListener("click", function () { //all button select 
        //console.log("hello");
        var text = this.innerHTML;
        //document.querySelector("#first_id").innerHTML= text + " is clicked";
        select.innerHTML = text + " is clicked..!";

    });
}