document.querySelector("#buttonIdForPractice").addEventListener("click",function(){
    var bt= document.createElement("button");
    var text=document.createTextNode("new Button Added");
    bt.appendChild(text);
 
 
    var findPlace=document.querySelector("#buttonIdForPractice");
    findPlace.appendChild(bt);
    // console.log(findPlace);
     
     //console.log("hello world");
    });