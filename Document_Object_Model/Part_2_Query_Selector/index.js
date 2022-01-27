/* getElementByTag,
getElementsByClassName,
getElementById this all can be access by one keyWord which is : querySelector();
*/
//................. Important note .......................
/* If we want to select id then give one HASH (#) before id name
If we want to select class then give one DOT (.) before class name 
If we want to select tag then just tag name */

 document.querySelector("#first_id").innerHTML="changing id"; // using hash before id=first_id
 document.querySelector(".first_class").innerHTML="changing class"; // using DOT before class=first_class

//  tag will work if above id and class is not available  (comment out above 2 lines)
document.querySelector("h1").innerHTML="changing tag"; // using DOT before class=first_class
