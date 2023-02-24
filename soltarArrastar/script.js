document.querySelector('.neutralArea').addEventListener('click', neutraArea)

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart),
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave',dragLeave)
    area.addEventListener('drop', drop)
})

//funçoes item

function dragStart(e){
    e.currentTarget.classList.add('dragging');
}
function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}


function dragOver(e){
    e.preventDefault()
}
function dragLeave(){
    
}
function drop(){
    console.log('libera')
}

// funçoes area
function neutraArea(e){
    
}