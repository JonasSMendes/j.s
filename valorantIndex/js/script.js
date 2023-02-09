
const el = document.querySelector('.text-name-js h1');
const text = 'SKYE...';
const interval = 400;

function showtext(el, text, interval){
    const char = text.split('').reverse()

    const type = setInterval(()=>{
        if(!char.length){
            return clearInterval(type)
        }

        const next = char.pop()

        el.innerHTML += next

    },interval)
}

showtext(el, text, interval)


const Q = document.querySelector('.agent--ability--Q')
const E = document.querySelector('.agent--ability--E')
const C = document.querySelector('.agent--ability--C')
const X = document.querySelector('.agent--ability--X')

const id0 = document.getElementById('0')
const id1 = document.getElementById('1')
const id2 = document.getElementById('2')
const id3 = document.getElementById('3')

function skilQ(){

    id0.style.backgroundColor = '#55dcad'
    id1.style.backgroundColor = '#27282c'
    id2.style.backgroundColor = '#27282c'
    id3.style.backgroundColor = '#27282c'
   


    Q.style.display = 'block'
    E.style.display = 'none'
    C.style.display = 'none'
    X.style.display = 'none'
  
}
function skilE(){

    id0.style.backgroundColor = '#27282c'
    id1.style.backgroundColor = '#55dcad'
    id2.style.backgroundColor = '#27282c'
    id3.style.backgroundColor = '#27282c'

    Q.style.display = 'none'
    E.style.display = 'block'
    C.style.display = 'none'
    X.style.display = 'none'
     
}
function skilC(){

    id0.style.backgroundColor = '#27282c'
    id1.style.backgroundColor = '#27282c'
    id2.style.backgroundColor = '#55dcad'
    id3.style.backgroundColor = '#27282c'

    Q.style.display = 'none'
    E.style.display = 'none'
    C.style.display = 'block'
    X.style.display = 'none'
     
}
function skilX(){

    id0.style.backgroundColor = '#27282c'
    id1.style.backgroundColor = '#27282c'
    id2.style.backgroundColor = '#27282c'
    id3.style.backgroundColor = '#55dcad'

    Q.style.display = 'none'
    E.style.display = 'none'
    C.style.display = 'none'
    X.style.display = 'block'
     
}


