//create html element

var newElement=document.createElement("h2"); // here createElement create new elements,in brakets () we will specify which elements will be created
var create_text=document.createTextNode("this will be in h2"); // h2 tag's texts 
//now the text of h2 put together 
newElement.appendChild(create_text); // this will add texts in h2


// now find out the div class or div id where this new text of h2 will be added 

var findOut=document.getElementById("my-div"); // find the div 
findOut.appendChild(newElement); //put the h2 in my-div 

//now how to remove any tag elements

//forst find out the tag 
var remove_tag=document.getElementsByTagName("h1")[1];
//now find out the div of the tag  which has already found out in line 11 
findOut.removeChild(remove_tag);




