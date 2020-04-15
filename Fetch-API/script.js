const apibutton = document.querySelector('#apibutton');
let display = document.querySelector('ul');

//API
const todos  = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res=>res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

apibutton.addEventListener('click',todos);
//.json file
const jsonfile = document.querySelector('#jsonfile');

jsonfile.addEventListener('click',()=>{
    // let display = document.querySelector('.display');
    fetch('list.json')
    .then(res=>res.json())
    .then(data=>
        
         data.forEach(lists => {
            //  let ul=document.querySelector('ul');
            
            //  let li=document.querySelector('li');
        // li.style="list-style-type=none"
             display.innerHTML+=`
             
              
                     <li >Id-${lists.id} </li>
                     <li>Title-${lists.title} </li>
                     <li>Body-${lists.body} </li>
           
             `;
            //   let ul = document.querySelector('ul');
            //   ul.classList.add("list-disc list-inside");
              let li=document.querySelectorAll('li');
            //   li.style="color:red";
            //   console.log(ul);
              li.forEach(lis => {
                  lis.classList.add("list-none");
                  lis.classList.add("text-xs");
                  lis.classList.add("text-center");
                  lis.classList.add("bg-yellow-300");
                  lis.classList.add("text-teal-500");
                  lis.classList.add("py-2");
                  console.log(lis)
                //   console.log(lis);
                  
              });
         }),
         
        )

    .catch(err=>console.log(err))
})

const form=document.querySelector('.newform');

const AddNewPost=e=>{
  e.preventDefault();
  const newtitle= document.querySelector('#newtitle').value;
  const newbody = document.querySelector('#newbody').value;
  
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers:{
      'Accept':'application/json, text/plain , */* ',
      'Content-type':'application/json'
    },
    body:JSON.stringify({newtitle:newtitle,newbody:newbody})
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
  .catch(err=>console.log(err))



};
form.addEventListener('click', AddNewPost);
// const postButton = document.querySelector("#postBtn");

// postButton.addEventListener('submit',()=>{
//   console.log('Clicked');

// });