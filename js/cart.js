let cart = document.querySelector('#cart');
let tovar = JSON.parse(localStorage.getItem('tovar'));
console.log(tovar);
function cartFunc(){
    for(let i=0;i < tovar.length;i++){
        console.log(tovar[i])
        let div = document.createElement('div');
        let p = document.createElement('p'); 
        let p1 = document.createElement('p');    
        let img = document.createElement('img');
        let btn_cart = document.createElement('button');
        img.style.cssText = `
        width:250px;
        height:17vh;
        border-radius:5%;
        `;
        cart.style.cssText = `
        display:flex;
        justify-content:space-around;
         flex-wrap:wrap;
         gap:3%;
         `
        p1.style.cssText=`
        color:black;
        font-size:15px;
        text-align:center;
        `
        div.style.cssText = `
        margin-top:5%;
        background-color:white;
        margin-bottom:2%;
        width:300px;
        padding:3%;
        border-radius:5%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        `
        p.style.cssText = `
        color:white;
        text-align:center;
        `
        btn_cart.style.cssText = `
        width:100%;
        height:4vh;
        border-color: red;
        border-radius: 26px;
        background: none;
        color:red;
        margin-top:10%;
        `
        img.setAttribute('src', tovar[i].thumbnail)
        p.innerHTML = `
        ${tovar[i]}
        `
        p1.innerHTML = `
         ${tovar[i].description}
         `
         btn_cart.innerHTML = '-';
         function act(event) {
            event.target.parentElement.remove();
        }
        
        // Блок #2
        document.querySelectorAll('button.button').forEach(
            button => button.addEventListener('click', act)
        );
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(btn_cart);
        cart.appendChild(div);
    }
}
cartFunc();