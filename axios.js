const button = document.querySelector('button');
const buttontwo = document.querySelector('.buttontwo');

const getData=()=>{
    axios.get('https://reqres.in/api/users')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}
const sendData=()=>{
axios.post('https://reqres.in/api/register',{
 "email": "eve.holt@reqres.in",
 "password": "pistol"
}).then(res => console.log(res.data))
.catch(err=>console.log(err,err.response))
}


button.addEventListener('click', getData);
buttontwo.addEventListener('click', sendData);