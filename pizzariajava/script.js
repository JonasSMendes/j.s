let modalQt = 1;

const c = (el)=> document.querySelector(el) //resumo de codigo sendo atribuido o valor para uma letra só,proposito de diminuir espaço e pratiocidade de manipulação
const cs = (el) => document.querySelectorAll(el)  

//>>>>>>>>>>>>>>>>>>>>>>> descrição geral dos produtos
pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true)
    //preencher as informações com pizza-item
    pizzaItem.setAttribute('data-key', index); // selecionando a pizza pelo seu id no json
    pizzaItem.querySelector('.pizza-item--img img').src= item.img //adicionado imagem que está no api
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name // adiconando o nome que esta no api
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description // adicinando descrição que está no api
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}` // adiconando os preços que estão no api,com a aprlicação do simnulo de dos 00 atras dos numeros
   
//>>>>>>>>>>>>>>>>> descrição dos itens selecionados

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{ // um evento de click para fazer abrir o modal  de pizzas usando o a(link) para ser o botão 
        e.preventDefault(); // usado para tela ñ atulizar com o click no link

        let key = e.target.closest('.pizza-item').getAttribute('data-key') // seleção da pizza como um objeto unico
        modalQt = 1;

        c('.pizzaBig img').src = pizzaJson[key].img //adiconando a imagem especifica da imagem que está no api fake
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name //adicionando o nome que esta no api fake do json 
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description // descrição que está nom api fake  
        c('.pizzaInfo--actualPrice').innerHTML = `R$${pizzaJson[key].price}` //adicionado o preço que está no api fake 
        c('.pizzaInfo--size.selected').classList.remove('selected') // remover o item selecionado no html
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{ // adionar tamanhos mais de um item,logo é preciso usar essa outras função para selecionar o index certo
            if(sizeIndex === 2){ //esse if serve para que sempre que abir uma pizza,a pizza selenionada será a grande por uma maneira de fazer as pessoas comprarem ela 
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex] // seleção do index correto de dentro do api fake

        })
        c('.pizzaInfo--qt').innerHTML = modalQt


//>>>>>>>>>>>>>>>>>>> abertura do modal

        c('.pizzaWindowArea').style.opacity = 0 // transção com animação da entrada do modal na tela após o clique
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
        c('.pizzaWindowArea').style.opacity = 1 // efetivamente a transição do modal,usando uma função que faz ter um pequeno delay,usando o setTimeOut
        }, 200)
        })

    c('.pizza-area').append( pizzaItem ); // onde se adiciona as pizzas na div area delas

});

