console.clear();
/* XMLHttpRequest events - onload(),onerror()

property - response,responseText,responseType,responseUrl,status,statusText

function - open(), send(),setRequestHeader()
*/ 


const makeRequest = (method,url) =>{  // method, url reciving 
    
    //bring the XMLHttpRequest here 
    const xml = new XMLHttpRequest(); //  bought XMLHttpRequest by calling it and store in xml variable
   

    xml.open(method,url); // starting the request or open request, it request URL and get / post method that is declared in makeRequest function
   
   
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
    xml.send();

}

// retriving data from databse if we needed multiple times 
const getData = () =>{
    //calling makeRequest function with method and url if we need multiple times

    makeRequest('GET','https://jsonplaceholder.typicode.com/posts'); // passing method and url to makeRequest function that will recive  those

}
getData();