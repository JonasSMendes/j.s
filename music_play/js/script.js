
// nav remote 

const list = document.querySelectorAll('.list');
    
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}


list.forEach((item)=>
item.addEventListener('click',activeLink))


// radio play

const musica = document.querySelector('audio');


// eventos
document.querySelector('.button-play').addEventListener('click', playMusic);
document.querySelector('.button-pause').addEventListener('click', pauseMusic);

musica.addEventListener('timeupdate', updatebar)



//funcoes

function playMusic(){
    musica.play();

    document.querySelector('.button-play').style.display = ('none')
    document.querySelector('.button-pause').style.display = ('block');
}
function pauseMusic(){
    musica.pause()

    document.querySelector('.button-play').style.display = ('block')
    document.querySelector('.button-pause').style.display = ('none');
}


function updatebar(){
    let barra = document.querySelector('progress');
      
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100)+ '%';

    let start = document.querySelector('.start');
    start.textContent= secondsedit(Math.floor(musica.currentTime));
}

function secondsedit(second){
    let campminute = math.floor(second / 60);
    let campsecond = second % 60;
    if(campsecond < 10){
        campsecond = '0' + campsecond;
    }

    return campminute + ':' + campsecond
}