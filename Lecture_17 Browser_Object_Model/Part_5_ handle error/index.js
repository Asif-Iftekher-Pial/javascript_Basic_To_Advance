try {
    /*HERE POSIBLE ERROR CAN OCCURED ,those code with be here
   if in this part no error occured then catch block will not execuute  */
   alert("Hi everyone");
   alert(x); // error
   alert("Hi everyone");
} catch (error) {
    //hande the errors
    console.log("error caught  " +error);
    console.log(error); // show the error from error parameter
}finally{
    alert("finally block will always execute");
    /*this saction those code should be written that always executed ..
   even after caught error in catch block  */
}