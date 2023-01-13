class input {

    _type = 'text'
    required = false;
    
    constructor(name, label){
        this.name = name
        this.label = label
    }

    get type(){
        return this._type
    }
    set type(t){
        if(['text', 'passworld', 'submit', 'email'].includes(t)){
            this._type = t
        }else{
            throw new Error(`input "${t}" doens't exist.`) 
        }
    }

}

//implementação
let email = new input ('email', 'digite seu email')
email.type = "email"
email.reaquired = true

//senha

let passworld = new input ('passworld', 'digite su senha')
passworld.type = 'passworld'

