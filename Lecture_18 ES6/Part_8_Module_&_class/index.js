/* reciveing text variable from myModule js file */

import { text , setText, summestion} from "/myModule.js";

console.log(text); // before changing text
setText("My name is Pial"); // changing the text 
console.log(text);// after changing the text

summestion(); //calling another function

