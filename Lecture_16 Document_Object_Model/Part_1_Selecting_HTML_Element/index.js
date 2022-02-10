//First part
//all the html elements like <body>,tags everything stored in "document"
//select the html element by using "getElementById"
//innerHTML changes the html 
document.getElementById("heading1").innerHTML="My first Javascript"; //selecting the HTML element by its id = heading1 .....
/* another way of doing this */
var  myheading = document.getElementById("heading2");
myheading.innerHTML="My another heading!!";



// Second part
/* getElementByTag or Class Name */
//select the html element by using "getElementByTag or Class Name"
document.getElementsByTagName("p")[0].innerHTML="changing  first Tag name";
document.getElementsByTagName("p")[1].innerHTML="changing second Tag name";
/* getElementsByTagName always returns as array 
if theres multiple tag of the name soo we have to mention the index number after the tag */



// Third part
// now select by class name its same as tag name and also returns elements as array for each class
document.getElementsByClassName("first_class")[0].innerHTML="changing by first class name ";

document.getElementsByClassName("second_class")[0].innerHTML="changing by the second class name";


