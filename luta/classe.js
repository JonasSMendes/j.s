// knigh ou sorcerrer 
// little monster ou  bigMonster 

class caracter{

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0
    

    constructor(name){
        this.name = name
    }

    get life(){
        return this._life
    }
    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife
    }
}

class knigth extends caracter {
    constructor (name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class sorcerer extends caracter{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}
class litlemonster extends caracter{
    constructor(){
        super('little monster');
        this.life = 150;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}
class bigMonster extends caracter{
    constructor(){
        super('bigMonster');
        this.life = 180;
        this.attack = 6;
        this.defense = 2;
        this.maxLife = this.life;
    }
}
class Stage{
    constructor(figther1, figther2, figther1El, figther2El){
            this.figther1 = figther1
            this.figther2 = figther2
            this.figther1El = figther1El
            this.figther2El = figther2El
    }
    start(){
        this.update()
        // evento do botão de atacar
    }
    update(){
        //figther 1

        this.figther1El.querySelector('.name').innerHTML= this.figther1.name;
        
        //figther2

        this.figther2El.querySelector('.name').innerHTML= this.figther2.name;

    }
}