
var createTag=document.createElement("p");
var createText=document.createTextNode("This will be the new paragraph");
//now add this two 
createTag.appendChild(createText); //added....!!

//find out the div 
var findingDiv=document.getElementById("para");
//findingDiv.appendChild(createTag); // new paragraph will be added in last 


//but in case of adding in first of specifing the position among other divs do this - 
var findTag=document.getElementsByTagName("p")[0]; //find out the which tag's position
//console.log(findTag);
findingDiv.insertBefore(createTag,findTag); //insert the tag before the found tag


//how to remove the Paragraph
var removePara=document.getElementsByTagName("p")[2]; //find out which one will be deleted

 // find out from which div's p tag will be deleted ,which has done in line number 8 
 findingDiv.removeChild(removePara); // now delete by removeChild method

