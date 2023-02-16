let totalSlide = document.querySelectorAll('.slide--item').length
let currentSlide = 0;


document.querySelector('.slide--width').style.width = 
`calc(100vw * ${totalSlide})`;
document.querySelector('.slide--controler').style.heigth =
 `${document.querySelector('.slide').clientHeight}px`

 function goprev(){
    currentSlide--
    if(currentSlide < 0){
        currentSlide = totalSlide - 1
    }
    updateMargin()
 }
 function gonext(){
    currentSlide++
    if(currentSlide > (totalSlide - 1)){
        currentSlide = 0
    }

    updateMargin()

 }
 function updateMargin(){
    let slidewidth = document.querySelector('.slide--item').clientWidth
    
    let newMargin = (currentSlide * slidewidth) 
    document.querySelector('.slide--width').style.marginLeft =
     `-${newMargin}px`;
 }

 //setInterval(gonext , 5000)