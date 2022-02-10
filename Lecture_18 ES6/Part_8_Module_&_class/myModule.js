/*this is a js file where we can declare variable ,function, Class ect
 and export to other js file */

 export let text = `hello module`; // export keyword will export the varible, import will recive this from another js filter

  export function setText(tx){
    text=tx;
 }

 export function summestion(){
     let a = 10;
     let b = 20;
     let sum = a+b;
     console.log(sum);
 }
 