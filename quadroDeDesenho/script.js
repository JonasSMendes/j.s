//inicio

let currenColor = 'black'
let canDraw = false
let pointX = 0;
let pointY = 0;

let screem = document.querySelector('#tela') 
let ctx = screem.getContext('2d')
//eventos
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);

});
screem.addEventListener('mousedown',mouseDownEvent)
screem.addEventListener('mousemove',mousemoveEvent)
screem.addEventListener('mouseup', mouseupEvent)
/* passo a passo para desenhar no canvas

- quando eu clicar e ABaixar o modo desenho será ativado
- quando o mouse se mover enquanto estiver ativado, desenhe
- quando clique do mouse levantar para o modo desenho

*/
//funçoes

function colorClickEvent(e){
    let color = e.target.getAttribute('data-color')
    currenColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}

function mouseDownEvent(){
    canDraw = true

    pointX = e.pageX - screem.offsetLeft
    pointY = e.pageY - screem.offsetTop
    
}
function mousemoveEvent(e){
    if(canDraw){
        
    }
}
function mouseupEvent(){
   canDraw = false
}