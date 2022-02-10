const selectButton=document.querySelector(".btn");
const selectPara=document.querySelector("#paraID");

selectButton.addEventListener("click", startClock);
 function startClock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    //for showing 0 before seconds and minutes
     minutes=timeFormat(minutes);
     seconds=timeFormat(seconds);
    
    let timeDisplay= hours+ "h:" + minutes + "m:" + seconds + "s";
   selectPara.textContent="Now the time is = " + timeDisplay; // if setInterval not set then we will have to refresh the page 


  setInterval( startClock, 1000); // now it will not refresh automatically

    //console.log(timeDisplay);
}
function timeFormat(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}
