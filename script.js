const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorindex = 0;
const trafficlight = ( event ) => {
   
    tutnOn[event.target.id]();
   
}

const nextindex = () => {
    if(colorindex < 2){
        colorindex++
    }else{
        colorindex = 0;
    }
}

const changecolor = () => {
    const cores = ['red' ,'yellow', 'green']
    const color = cores [ colorindex ];
    tutnOn[color]();
    nextindex();
}
const tutnOn = {
    'red':      () => img.src = "./semáforo/img/vermelho.png",
    'yellow':   () => img.src = "./semáforo/img/amarelo.png",
    'green':    () => img.src = "../semáforo/img/verde.png",
    'automatic':() => setInterval(changecolor,1000),
    
}

buttons.addEventListener('click', trafficlight );