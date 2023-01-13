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
    render(){
        let formElement = document.createElement('form')
        formElement.setAttribute('method', this.method)
        formElement.setAttribute('action', this.method)

        for(let i in this.items){
            this.items[i].render(formElement)
        }

        this.container.appendChild(formElement)
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
    render(formElement){
        let el = document.createElement('input')
        el.type = this.type
        el.name = this.name
        el.placeholder = this.label
        el.required = this.required
        formElement.appendChild(el)
    }

}

class Button extends input{
    constructor(label){
        super('', label)
        this.type = 'submit'
    }

    render(formElement){
        let el = document.createElement('input')
        el.type = this.type
        el.value = this.label
        formElement.appendChild(el)
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

form.render();