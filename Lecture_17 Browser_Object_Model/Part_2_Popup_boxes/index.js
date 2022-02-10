//confirm
// function confirmBox(){
//    var value=  confirm("are you sure.. ?");

//    if(value){
//        console.log("Ok button clicked..!");

//    }else{
//        console.log("cancel button clicked");
//    }
// };
// confirmBox();

// prompt

const h1= document.createElement("h1"); //creat tag
let text;
function promptBox(){
   const anyText= prompt("Enter anything-");

   if(anyText == null || anyText ==""){
       text = "No text found";
       

   }else{
       text= "welcome "+anyText;

   }
  const textNode= document.createTextNode(text); // create text of h1 tag
  h1.appendChild(textNode); // joining the text with h1
  document.body.appendChild(h1); // thers no h1 in HTML , we created this dinamically thats why we are adding this into body of HTML 
  
};
promptBox();
