// console.log(window);

const makeRequest = async (url, method, data) => {
    try {
        //call ajax
        const result = await $.ajax({
            url: url,
            method: method,
            data: data
        })
        return result;
    } catch (error) {
        console.log(error);
    }
}

//retriving data
// const getData = () =>{
//     //call makeRequest for use many time if want with its all paremeter 
//     makeRequest("https://jsonplaceholder.typicode.com/posts/2","GET")
//     .then((res) => console.log(res)) // store result in res and printing the res data
// }
// getData();

//creating data
// const createData = () =>{
//     //call makeRequest for use many time if want with its all paremeter 
//     makeRequest("https://jsonplaceholder.typicode.com/posts/","POST",
//     {
//         title: 'Pial',
//         body: 'Asif',
//         userId: 10,
//     })
//     .then((res) => console.log(res)) // store result in res and printing the res data
// }
// createData();

//updating data
// const updateData = () =>{
//     //call makeRequest for use many time if want with its all paremeter 
//     makeRequest("https://jsonplaceholder.typicode.com/posts/3","PUT",
//     {
//         title: 'Pial',
//         body: 'Iftekhar',
//         userId: 1,
//     })
//     .then((res) => console.log(res)) // store result in res and printing the res data
// }
// updateData();

//updating data
const deleteData = () => {
    //call makeRequest for use many time if want with its all paremeter 
    makeRequest("https://jsonplaceholder.typicode.com/posts/3", "DELETE",)
        .then((res) => console.log(res)) // store result in res and printing the res data
}
deleteData();
