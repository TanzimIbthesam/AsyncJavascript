const button = document.querySelector('button');
const buttontwo = document.querySelector('.buttontwo');

const httpRequest=(method,url,data)=>{
      return fetch(url,{
          method:method,
          body:JSON.stringify(data),
         headers: data ? {
             'Content-Type': 'application/json'
         } : {}

      }) .then(res =>res.json());
     
     
    };



const getData=()=>{
    httpRequest('GET', 'https://reqres.in/api/users')
 
    .then(res=>console.log(res))
   
}

const sendData=()=>{
   sendHttpRequest('POST','https: //reqres.in/api/register',{
       email:'eve.holt@reqres.in',
       password:'pistol'
   }).then(data=>console.log(data))
   
}
button.addEventListener('click', getData);
buttontwo.addEventListener('click', sendData);