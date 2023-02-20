let char = new sorcerer('jonas')
let monster = new litlemonster()

  
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start()