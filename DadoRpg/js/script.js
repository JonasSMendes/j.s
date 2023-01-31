
 
    
    const img = document.querySelector('.img')

function clicar(i){
    let input = document.querySelector('.input').value

    if(i.onkeyup === 'Enter'){

     let valor = Math.floor( Math.random() * input)

        console.log(valor)
    }

}

img.addEventListener('keyup',clicar)
