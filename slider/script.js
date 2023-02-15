let totalSlide = document.querySelectorAll('.slide--item').length

document.querySelector('.slide--width').style.width = 
`calc(100vw * ${totalSlide})`;
document.querySelector('.slide--controler').style.heigth =
 `${document.querySelector('.slide').clientHeight}px`