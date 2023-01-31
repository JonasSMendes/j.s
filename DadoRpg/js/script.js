const img = document.querySelector('.img')

function clicar(i){

    let input = document.querySelector('.input').value

    if(i.key === 'Enter'){

     let valor = Math.floor( Math.random() * input)

     img.innerHTML = valor

    }

}

img.addEventListener('keyup', clicar)
