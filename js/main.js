
let inp = document.querySelector('#inp');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let  form = document.querySelector('#form');
let user = {
    email:null,
    name:null,
    password:null
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    user = {
        email:inp2.value,
        name:inp.value,
        password:inp1.value
    }
    localStorage.setItem('user',JSON.stringify(user));
})
