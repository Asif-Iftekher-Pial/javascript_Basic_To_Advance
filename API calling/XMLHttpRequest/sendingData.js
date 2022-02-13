console.clear();
/* XMLHttpRequest events - onload(),onerror()

property - response,responseText,responseType,responseUrl,status,statusText

function - open(), send(),setRequestHeader()
*/ 


const makeRequest = (method,url,data) =>{  // method, url  , data reciving 
    
    //bring the XMLHttpRequest here 
    const xml = new XMLHttpRequest(); //  bought XMLHttpRequest by calling it and store in xml variable
   

    xml.open(method,url); // starting the request or open request, it request URL and get / post method that is declared in makeRequest function
   /* this is an Important line for sending data in database ,  */
   xml.setRequestHeader('content-type','application/json'); 


    // getting data from serve or Databse
    xml.onload = () =>{ // onload() event or function brings the data from server 
        let data =xml.response;  // storing datas in data variable which has came via response property from xml
       
        console.log(data); // displaying data in JSON format

        // let jsonFormat=JSON.parse(data); // showing data without JSON format
        // console.log(jsonFormat);
    }

    // if any error occured or have possibility 
    xml.onerror = () =>{
        console.log(`error is here`);
    }
    xml.send(JSON.stringify(data)); // sending data into database in JSON format by stringify method

}

// retriving data from databse if we needed multiple times 
const sendData = () =>{
    //calling makeRequest function with method and url if we need multiple times
    /* whenever we send data , data should be in JSON format , we will have to convert data in JSON */
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        //static data JSON format
        title: 'foo',
        body: 'bar',
        userId: 1,
    }); // passing method and url to makeRequest function that will recive  those

}
sendData();