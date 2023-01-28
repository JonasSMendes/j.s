

const igual = document.getElementById('igual')

function somar(){
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value

    if( x !== "" && y !== ""){

        const somar = parseInt(x) + parseInt(y)
        igual.textContent = somar
    }else{
        alert('preencha todos os campos')
    }
    
   
}
function subtrair(){
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value

    if( x !== "" && y !== ""){

        const somar = parseInt(x) - parseInt(y)
        igual.textContent = somar
    }else{
        alert('preencha todos os campos')
    }
    
   
}
function dividir(){
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value

    if( x !== "" && y !== ""){

        const somar = parseInt(x) / parseInt(y)
        igual.textContent = somar
    }else{
        alert('preencha todos os campos')
    }
    
   
}
function multiplicar(){
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value

    if( x !== "" && y !== ""){

        const somar = parseInt(x) * parseInt(y)
        igual.textContent = somar
    }else{
        alert('preencha todos os campos')
    }
    
   
}


