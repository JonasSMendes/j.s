
function trocarimagem(filename, animalName){
    document.querySelector('.imagem').setAttribute('src', 'imagem/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalName)
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    alert(`o animal é ${animal}`)
}