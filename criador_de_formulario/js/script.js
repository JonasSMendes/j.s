class Form{

    items = [];

    method = "GET"

    constructor(container, method, action){
        this.container = document.querySelector(container)
        this.method = method
        this.action = action

    }
    additem(item){
        this.items.push(item)
    }

    
}


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

class Button extends input{
    constructor(label){
        super('', label)
        this.type = 'submit'
    }
}

//implementação

//formulario
let form = new Form(".formArea", 'POST', 'https://site.com.br')


//email
let email = new input ('email', 'digite seu email')
email.type = "email"
email.reaquired = true
form.additem(email);

//senha

let passworld = new input ('passworld', 'digite su senha')
passworld.type = 'passworld'
passworld.required = true
form.additem(passworld)

//botão

let button = new Button('Enviar');
form.additem(button);

console.log(form.items)
