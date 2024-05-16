let sale = document.querySelector('#sale');




const Get_U = async function (){
    await fetch("https://dummyjson.com/products").then(function(responce){
        return responce.json();
    }).then(function(dataUser){
        console.log(dataUser);   
        for(let i=0;i <= dataUser.length;i++){
            let div = document.createElement('div');
            let p = document.createElement('p');
            p.innerHTML = dataUser.products[i].brand;
            sale.appendChild(div);
            div.appendChild(p);
        }        
    })
}
Get_U();
//апишка тваров смартфонов с картинками