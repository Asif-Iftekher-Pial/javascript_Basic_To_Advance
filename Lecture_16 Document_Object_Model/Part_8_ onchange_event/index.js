/* Tutorial for name input */

// var findInput= document.querySelector("#nameID");
// //console.log(findInput);
// findInput.addEventListener("change",changeHandlar);

// function changeHandlar(e){ //if we working with onChange or change function we need to pass event (e) in parameter
/* in parameter (e) helps us to generate events after clicking the button or working on the
input. (e) also find all the attributes of the event by doing e.target. */ 
   
//     //console.log(e.target);-------> find the what you want
//     //console.log(e.target.className); -------> find the className
//     //console.log(e.target.id); // -------> find the id 
//     console.log(e.target.value); //-------> find the input value
// }

/* tutorial for CheckBox */

// var select= document.querySelectorAll("input[name=program]");
// //console.log(select); // return all the checkbox as array in console
// Array.from(select).map((singleElement)=>{ // taking all the element as single item from the arrays and mapping one by one in singleElements variable
// singleElement.addEventListener("change",changeHandlar); // accessing each element for onchange eventListener
// });
// function changeHandlar(e){
//     //console.log("hello");
//     if(e.target.checked){
//         console.log(e.target.value); // show the value 
//         console.log("checked box"); // show this string
//     }
    
// }

/* for select tutorial */
var select = document.querySelector("#department");
//console.log(select);
select.addEventListener("change",handleDepartment);
function handleDepartment(e){
console.log(e.target.value);

}