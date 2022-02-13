console.clear();
// console.log(window);

//get method using axios
axios
.get("https://jsonplaceholder.typicode.com/posts") // axios return promise ,so we can use .then()
.then((res)=>console.log(res.data)) // database data will be in "data" that will return as response (res) 
.catch((err)=>console.log(err)) // if any error occured use catch and print by console
