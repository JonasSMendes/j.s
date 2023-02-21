let log = new Log (document.querySelector('.log'))
let monster = new bigMonster()
let char = new sorcerer('Mago')


  
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start()