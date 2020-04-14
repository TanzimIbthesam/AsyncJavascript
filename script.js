const button=document.querySelector('button');
const buttontwo=document.querySelector('.buttontwo');

const httpRequests=(method,url,data)=>{
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        if(data){
            xhr.setRequestHeader('Content-type', 'application/json');
        }
        xhr.onload = () => {

            //    const data=JSON.parse(xhr.response)
            //console.log(data);
            // if we declare response Type
            if(xhr.status >=400){
                reject(xhr.response);
            }else{
                resolve(xhr.response);
            }
            
        }
        xhr.onerror=()=>{
            reject('Something went wrong');
        }
        xhr.send(JSON.stringify(data));
    });

   
    
 
};



// xhr.open('GET', 'sample.txt', true);

const getData=()=>{
    httpRequests('GET','https://reqres.in/api/users')
    .then(res=>console.log(res));
   

}
button.addEventListener('click',getData);


const sendData=()=>{
    httpRequests('POST', 'https://reqres.in/api/register',{
           "email": "eve.holt@reqres.in",
           "password": "pistol"
        // password:'hello'
    }).then(data=>console.log(data))
   .catch(err=>console.log(err));
}
buttontwo.addEventListener('click', sendData);
// const ajaxfunc=()=>{

// }


