/*normal Function
.....................

 const message = (test)=>{
    console.log(`${test}`); 
 }
 message('i love Bangladesh');
*/

//defaul parameter->


const message = (test = `this is default parameter`)=>{
    console.log(`${test}`); 
 }
 message();
 message(`this is the value of paremeter if default parameter not set`);

 //Rest paremeter

 const restPara =(x,y,...z)=>{  // if there is a lot of paremeter needed then use ... (3 dots)
    console.log(`x = ${x} y = ${y} z = ${z}` );
 }
 restPara(1,2,50,20,30);

 