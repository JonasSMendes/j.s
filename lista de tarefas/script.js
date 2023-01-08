//elementos
const ul = document.querySelector('ul');
const input = document.querySelector('input');
//funçoes
function adicionar(e){
   
 if(e.key === 'Enter'){
    
      let newli = document.createElement('li')
      newli.innerHTML = input.value
      ul.appendChild(newli)
      input.value = ""
}

}
//eventos
input.addEventListener('keyup', adicionar )


