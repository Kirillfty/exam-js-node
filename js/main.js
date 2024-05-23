const Get_U = async function (){
    await fetch("./json/users.json").then(function(responce){
        return responce.json();
    }).then(function(dataUser){
        console.log(dataUser);
    })
}
Get_U();
let inp = document.querySelector('#inp');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let  form = document.querySelector('#form');
let user = {
    email:null,
    name:null,
    password:null
}

form.addEventListener('click',function(e){
    e.preventDefault();
    Post();
})
const Post = async function (user){
     user = {
        email:inp2.value,
        name:inp.value,
        password:inp1.value
    }
    await fetch("../json/users.json",{
        method:'POST',
        headers:{
            'Content-Type':'application.json; charset=utf-8'
        },
        body:JSON.stringify(user)

    })
}