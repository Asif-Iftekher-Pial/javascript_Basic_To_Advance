console.clear();
/* when we going to use Axios multiple time we need to code like this = */

const makeRequest = (config) => {
    return axios(config);
}

/* for retriving  data from databse  */
// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//         .then((res) => console.log(res.data))
//         .catch((err) => console.log(err))
// };

//getData();

/* for creating data  */

// const createData = () => {
//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         data: JSON.stringify({  // when we save data in database we need to convert in JSON format
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         method: "post"
//     })
//         .then((res) => console.log(res.data))
//         .catch((err) => console.log(err))
// }
// createData();

/* for creating data  */

// const updateData = () => {
//     makeRequest({
//         url: "https://jsonplaceholder.typicode.com/posts/1",
//         method: "put",
//         data: JSON.stringify({  // when we save data in database we need to convert in JSON format
//             id: 1,
//             title: 'Asif Iftekhar Pial',
//             body: 'bar',
//             userId: 1,
//         }),
        
//     })
//         .then((res) => console.log(res.data))
//         .catch((err) => console.log(err));
// }
// updateData();

/* for deleting data  */

const deleteData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "delete",
    })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
}
deleteData();