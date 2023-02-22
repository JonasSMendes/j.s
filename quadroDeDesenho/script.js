//inicio

let currenColor = 'black'
let canDraw = false
let mouseX = 0;
let mouseY = 0;

let screem = document.querySelector('#tela') 
let ctx = screem.getContext('2d')
//eventos
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);

});
screem.addEventListener('mousedown',mouseDownEvent)
screem.addEventListener('mousemove',mousemoveEvent)
screem.addEventListener('mouseup', mouseupEvent)
document.querySelector('.clear').addEventListener('click', clearScreem)
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

function mouseDownEvent(e){
    canDraw = true

    mouseX = e.pageX - screem.offsetLeft
    mouseY = e.pageY - screem.offsetTop
    
}
function mousemoveEvent(e){
    if(canDraw){
        Draw(e.pageX, e.pageY)
    }
}
function mouseupEvent(){
   canDraw = false
}

function Draw(x, y){
    let pointX = x - screem.offsetLeft
    let pointY = y - screem.offsetTop

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX,mouseY);
    ctx.lineTo(pointX,pointY);
    ctx.closePath();
    ctx.strokeStyle = currenColor;
    ctx.stroke();


    mouseX = pointX
    mouseY = pointY
}

function clearScreem(){
    ctx.setTransform(1,0,0,1,0,0)
    ctx.clearRect(0 , 0, ctx.canvas.width, ctx.canvas.height)

}