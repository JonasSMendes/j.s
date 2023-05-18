const Tabuada = () => {
    let tab = document.getElementById('numTabua')
    let num = document.getElementById('numCalc')


    if(num.value.length == 0){
        alert('o campo está vazio')
    }else{
        let n = Number(num.value)
            tab.innerHTML = ''
        for(let c = 1; c < 10; c++ ){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}

