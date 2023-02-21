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
        this.life = 60;
        this.attack = 20;
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
        this.life = 200;
        this.attack = 8;
        this.defense = 8;
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

        this.figther1El.querySelector('.atackButton').addEventListener('click', ()=> this.doAttack(this.figther1,this.figther2))
        this.figther2El.querySelector('.atackButton').addEventListener('click', ()=> this.doAttack(this.figther2,this.figther1))
    }
    update(){
        //figther 1

        this.figther1El.querySelector('.name').innerHTML= `${this.figther1.name} - ${this.figther1.life.toFixed(1)}`;
        let f1Pct = (this.figther1.life / this.figther1.maxLife) * 100
        this.figther1El.querySelector('.bar').style.width = `${f1Pct}%`
        //figther2

        this.figther2El.querySelector('.name').innerHTML= `${this.figther2.name} - ${this.figther2.life.toFixed(1)}`;
        let f2Pct = (this.figther2.life / this.figther2.maxLife) * 100
        this.figther2El.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked){
       // console.log(`${attacking.name} esta atacando ${attacked.name}`)
        if(attacking.life <= 0 || attacked.life <= 0){
            console.log('atacando cadaver')
            return
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor
        console.log(actualAttack , actualDefense)

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack
            console.log(`${attacking.name} causou ${actualAttack.toFixed(2)} em ${attacked.name}`)
        }else{
            console.log(`${attacked.name} conseguiu defender`)
        }


        this.update()
    }
}