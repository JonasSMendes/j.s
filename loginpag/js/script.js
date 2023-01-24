    
function abrir(){
    
    let homeDados = document.getElementById('homeDados')
    let open = document.getElementById('open')
    let fechar = document.getElementById('fechar')

    if(homeDados.style.display=='flex' && open.style.marginLeft =='170px'){
        
        homeDados.style.display='none'
        open.style.marginLeft='870px'
        
    }else{
        homeDados.style.display='flex'
        open.style.marginLeft='170px'
        
    }


}

