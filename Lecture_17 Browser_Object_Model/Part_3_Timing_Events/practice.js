const selectButton =document.querySelector(".btn");
const selectPara =document.querySelector(".para");

selectButton.addEventListener("click", saveUser);
// for setTimeout function 


// function saveUser(){
//     selectPara.textContent="Registration successfull";
//     setTimeout(()=>{
//         selectPara.textContent="Gone";
//     },2000)
// }


//for setInterval fucntion
function saveUser(){
    let count =0;
    selectPara.textContent="Number counting = " +count;
    setInterval(() => {
        count++;
        selectPara.textContent="Number counting = " + count;
    },1000);
}
