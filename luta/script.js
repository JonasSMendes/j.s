let log = new Log (document.querySelector('.log'))
let char = new sorcerer('jonas')
let monster = new bigMonster()

  
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start()