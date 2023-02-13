let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1--right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numeroHtml = '';

    for(let i = 0 ; i < etapa.numeros ;i++){
        if(i === 0 ){
            numeroHtml += '<div class="numero pisca"></div>'
        }
        numeroHtml += '<div class="numero"></div>'
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}
function atualizaInterface(){

}

function clicou(n){
    let elementoNumero = document.querySelector('.numero.pisca')
    if(elementoNumero !== null){
        elementoNumero.innerHTML = n;
        numero = `${numero} ${n}`

        elementoNumero.classList.remove('pisca')

        if(elementoNumero.nextElementSibling !== null ){
            elementoNumero.nextElementSibling.classList.add('pisca')
        }else{
            atualizaInterface()
        }
        
    }
}
function branco(){
    alert('clicou em branco')
}
function corrige(){
    alert('clicou em corrige')
}
function confirma(){
 alert('cliou em confirme')
}

comecarEtapa()