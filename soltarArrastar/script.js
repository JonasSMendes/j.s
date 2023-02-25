let areas = {
    a: null,
    b: null,
    c: null,
}


document.querySelector('.neutralArea').addEventListener('dragover', neutraAreaOver)
document.querySelector('.neutralArea').addEventListener('dragleave', neutraAreaLeave)
document.querySelector('.neutralArea').addEventListener('drop', neutraAreaDrop)

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

    if(e.currentTarget.querySelector('.item') === null){
        e.preventDefault();
        e.currentTarget.classList.add('hover')
    }
   
}
function dragLeave(e){
    e.currentTarget.classList.remove('hover')
}
function drop(e){
    e.currentTarget.classList.remove('hover')

    let dragItem = document.querySelector('.item.dragging')
    
    if(e.currentTarget.querySelector('.item') === null){
        e.currentTarget.appendChild(dragItem);
    }
}

// funçoes area
function neutraAreaLeave(e){
    e.currentTarget.classList.remove('hover')
}
function neutraAreaDrop(e){
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem);
    
}
function neutraAreaOver(e){
    e.preventDefault();
   e.currentTarget.classList.add('hover')

}

// logic functions


function updateArea(){
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name')

        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        }else{
            areas[name] = null;
        }
    });

    console.log(areas);
}