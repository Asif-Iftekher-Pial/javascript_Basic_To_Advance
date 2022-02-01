//const is for that - identifire can not be reassinged. best practice instead of using var or let
const form=document.querySelector("form");
const name=form.querySelector("div #nameID"); //selecting input by its ID,and div is here because name input in inside a div
const email=form.querySelector("div #emailID");
const password=form.querySelector("div #passwordID");
//console.log(password);
form.addEventListener("submit",submitHandlar); // event listener will submit by the form ..
//soo form.addEventListener 
function submitHandlar(e){
    e.preventDefault(); // it will not refresh the value in console after submitting
    
    //console.log(name.value); // accessing the values from const name
    //console.log(email.value); // accessing the values from const email
    //console.log(password.value); // accessing the values from const password
    
    
    /* but above this way is not best practice because when we send data to backend 
    we will have to access each element as object ,so the best way is below--> */
    
    const valuesAsObj={
        nameN: name.value,
        emailL: email.value,
        passwordD: password.value,
    };
    // now we can send data to backend by accessing "valuesAsObj"
    console.log(valuesAsObj);

    // now clear the input box after submitting
    name.value="",
    email.value="",
    password.value=""
};