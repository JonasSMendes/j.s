//inicio

let currenColor = 'black'

let screem = document.querySelector('#tela') 
let ctx = screem.getContext('2d')
//eventos
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);

});
//funçoes
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color')
    currenColor = color

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}