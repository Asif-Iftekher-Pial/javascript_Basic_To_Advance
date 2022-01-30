function clickMe(){
    alert("hello world");


}function clickMe2(){
    alert("hello ,see console too");
    console.log("You have won");
}

//for changing button 1
function changing_click_button_one(){
    var changingone= document.querySelector("#first_id"); //selecting the paragraph by id
    changingone.innerHTML="Changing button one has been selected "; // changing paragraph
    
}

 
function changing_click_button_two(){
    var changingtwo= document.querySelector("#second_id");
    changingtwo.innerHTML="Changing button two has been selected ";
}
//for changing button 2


//+picture one
function picture_one(){
    var pictureOne = document.querySelector("#myPicture");
    //console.log(pictureOne);
    pictureOne.src="image/pial.jpg"; // changing picture direction of scr
}

function troll(){
    var pictureTwo = document.querySelector("#trollPicture");
    //console.log(pictureOne);
    pictureTwo.src="image/troll.jpg"; // changing picture direction of scr
}