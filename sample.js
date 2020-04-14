
const button = document.querySelector('button');
const buttontwo = document.querySelector('.buttontwo');
// const HttpRequest = (method, url, data) => {
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(data),
//         headers: data ? {
//             'Content-Type': 'application/json'
//         } : {}
//     }).then(response => {
    
//         return response.json();
//     });
// }
const HttpRequest=(method,url,data)=>{

    return fetch(url,{
    method:method,
    body:JSON.stringify(data),
    headers:data ? {
   'Content-Type':'application/json' 
       } 
       : 
       {}
    }).then(response=>{
        if (response.status >= 400) {
            // !response.ok
            return response.json().then(errResData => {
                const error = new Error('Something went wrong!');
                error.data = errResData;
                throw error;
            });
        }
        return response.json();
    });
    // .then(data=>console.log(data))
//      return fetch(url, {
//          method: method,
//          body: JSON.stringify(data),
//          headers: data ? {
//              'Content-Type': 'application/json'
//          } : {}
//      }).then(res => {
//          if (res.status >= 400) {
        

//              return res.json().then(errResData => {
//                  const error = new Error('Something went wrong!');
//                  error.data = errResData;
//                  throw error;
//              });
//          }
//          return res.json();
//      });

// }
}
const getData = () => {
    HttpRequest('GET', 'https://reqres.in/api/users').then(data=> console.log(data));
  
};

const sendData = () => {
    HttpRequest('POST', 'https://reqres.in/api/register', {
              "email": "eve.holt@reqres.in",
              "password": "pistol"
        })
        .then(data=>{
            console.log(data);
        })
        .catch(err=>console.log(err,err.data))

// };
    }
button.addEventListener('click', getData);
buttontwo.addEventListener('click', sendData);
// getBtn.addEventListener('click', getData);
// postBtn.addEventListener('click', sendData);