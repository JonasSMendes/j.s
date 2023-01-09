'use strict';

const images = [
    { 'id': '1' , 'url': "./img/chrono.jpg"},
    { 'id': '2' , 'url': "./img/inuyasha.jpg"},
    { 'id': '3' , 'url': './img/tenchi.jpg'},
    { 'id': '4' , 'url': './img/tenjhotengo.jpg'},
    { 'id': '5' , 'url': './img/yuyuhakusho.jpg'},
    { 'id': '6' , 'url': './img/ippo.png' },
]

const container = document.querySelector('#container-item')

const loadImages = ( images, container ) => {
    images.forEach( image  => {
        container.innerHTML += `
            <div class ="item" >
                <img src = '${image.url}'
            </div>
        `
    })
}

loadImages (images, container)


