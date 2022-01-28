var photos= ["image/pic1.jpg","image/pic2.jpg","image/pic3.jpg"]; // put all photos in array
var imgTag=document.querySelector("img"); // select the img tag

var count=0;
function next(){

    count++; // plus one index
    if (count >=photos.length) { // if count is more then the array index length thn indext will start with 0 again
        count=0
        imgTag.src=photos[count]; // this will put the photo index in image tag
    } else {
       
        imgTag.src=photos[count]; // this will put the photo index in image tag
    }

}

function prev(){
    count--; // minus one index
    if(count < 0){ //if index count is less then 0 then it will got to the last and minus one index from last  
        count=photos.length - 1;
        imgTag.src=photos[count];
    }else{
        imgTag.src=photos[count]; // this will put the photo index in image tag
    }
    
}
