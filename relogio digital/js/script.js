const relogio = document.querySelector('.relogio')

function horas (){
    const d = new Date()

 let h = [
    d.toDateString(),
    d.getMinutes(),
    d.getHours(),
    d.getSeconds(),
]
  h = h.join('-')

   relogio.innerHTML = h
 
}



setInterval(horas, 1000)