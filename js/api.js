let sale = document.querySelector('#sale');

const Get_U = async function (){
    await fetch("https://dummyjson.com/products").then(function(responce){
        return responce.json();
    }).then(function(dataUser){
        let prod = dataUser.products
        console.log(prod)
        for(let i=0;i < prod.length;i++){
            let div = document.createElement('div');
            let p = document.createElement('p'); 
            let p1 = document.createElement('p');    
            let img = document.createElement('img');
            let btn_cart = document.createElement('button');
            img.style.cssText = `
            width:300px;
            height:15vh;
            border-radius:5%;
            `;
            sale.style.cssText = `
            flex-wrap:wrap;
            gap:3%;
            `
            p1.style.cssText=`
            color:black;
            font-size:15px;
            `
            div.style.cssText = `
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
            color:black;
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
            img.setAttribute('src', prod[i].thumbnail)
            p.innerHTML = `
            ${prod[i].brand}
            `
            p1.innerHTML = `
             ${prod[i].description}
             `
             btn_cart.innerText = 'buy'
            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(p1);
            div.appendChild(btn_cart);
            sale.appendChild(div);
            
        }        
    })
}
Get_U();
//апишка тваров смартфонов с картинками