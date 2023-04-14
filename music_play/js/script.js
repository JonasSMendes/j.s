
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

let music = [
    {titulo: 'all i Am',
     artista:'Dyalla',
     src:'./assets/music/All I Am - Dyalla.mp3',
     img:'./assets/img/lofi-girl-lofi.gif'},

     {titulo: 'ice & fire',
     artista:'king canyon',
     src:'./assets/music/Ice & Fire - King Canyon.mp3',
     img:'./assets/img/head-phones-music.gif'},

     {titulo: 'poolside Radio',
     artista:'Dyalla',
     src:'./assets/music/Poolside Radio - Dyalla.mp3',
     img:'./assets/img/giphy.gif'},

     {titulo: 'We Cruisin',
     artista:'Otis McDonald',
     src:'./assets/music/We Cruisin - Otis McDonald.mp3',
     img:'./assets/img/retrowave-synthwave.gif'},

];

const musica = document.querySelector('audio');

let indexMusic = 0;

renderMusic(indexMusic)

const durationMusic =  document.querySelector('.end')

const image = document.querySelector('img');
const musicName = document.querySelector('.description h2');
const singerName = document.querySelector('.description i');

durationMusic.textContent = secondEdit(Math.floor(musica.duration));


// eventos
document.querySelector('.button-play').addEventListener('click', playMusic);
document.querySelector('.button-pause').addEventListener('click', pauseMusic);

musica.addEventListener('timeupdate', updatebar)

document.querySelector('.before').addEventListener('click', () =>{

    if(indexMusic < 0){
        indexMusic = 4
    }
    indexMusic--;
    renderMusic(indexMusic)
    document.querySelector('.button-play').style.display = ('block')
    document.querySelector('.button-pause').style.display = ('none');
})
document.querySelector('.next').addEventListener('click', () =>{

    if(indexMusic > 3){
        indexMusic = -1;
    }

    indexMusic++;
    renderMusic(indexMusic)
    document.querySelector('.button-play').style.display = ('block')
    document.querySelector('.button-pause').style.display = ('none');
})


//funcoes
function renderMusic(i){
    musica.setAttribute('src', music[i].src);
    musica.addEventListener('loadeddata', ()=>{
        musicName.textContent = music[i].titulo;
        singerName.textContent = music[i].artista;
        image.src = music[i].img;
        durationMusic.textContent = secondEdit(Math.floor(musica.duration));
    });
}



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
      
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let start = document.querySelector('.start');
    start.textContent = secondEdit(Math.floor(musica.currentTime));
}

function secondEdit(second){
    let campminute = Math.floor(second / 60);
    let campsecond = second % 60;
    if(campsecond < 10){
        campsecond = `0${campsecond}`;
    }

    return `${campminute}:${campsecond}`
}

