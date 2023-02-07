const c = (el)=> document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)  


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true)
    //preencher as informações com pizza-item

    pizzaItem.querySelector('.pizza-item--img img').src= item.img

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
   

    c('.pizza-area').append( pizzaItem );

})