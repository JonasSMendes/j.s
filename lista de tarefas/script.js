//elementos
const ul = document.querySelector('ul');
const input = document.querySelector('input');
//funçoes
function adicionar(e){
   
 if(e.key === 'Enter'){
    //adiconar o li na lista
      const newli = document.createElement('li')
      newli.innerHTML = input.value
      ul.appendChild(newli)
    //limpado o campo de texto
      input.value = ""
}

}
//eventos
input.addEventListener('keyup', adicionar )


