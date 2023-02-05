//console.log("ola,mundo 3.0")

/*
let idade = 21
let nome = "jonas"
let cidade = "recife"
let estado = "PE"

console.log(" meu nome é " + nome + " e minha idade é " + idade + " anos nasci na cidade de " + cidade + " que fica no estado de "+ estado )
*/

//tipos de variaveis
/*
let nome = "jonas"                              //string
let idade = 10                                  //number
let logado = true / false                       //boolean
let lista = ["ovo, farinha, açucar"]            //array
let nomecompleto = {nome: "jonas", idade: 21}   // object

console.log(typeof nomecompleto)

*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



/*
//execicio ficçaçao 

//1. crie uma variavel para armazenar o nome 
// do carro e ponha o valor ferrari e exiba-a

let carro = "ferrari";

console.log(carro);

//2. crie uma variavel para armazenar o preço do bolo,
// que custa R$ 19,99 e exiba-a

let preco = 19.99;

console.log(preco)

//3. corrija o codigo a seguir (e exiba-o)
// let "cidade" = são paulo

let cidade = "são paulo"

console.log(cidade)


*/




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



/*
// ponto e virgula
let nome ="jonas"; let idade = 90;

console.log(nome); console.log(idade);

*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//formas de variaveis 

/*
let nome ="jonas"
console.log(nome)

nome = "joão" 
console.log(nome)

var meunome = "pedro"
console.log(meunome)

const myname = "paulo" //variavel constante,ñ muda o valor
console.log(myname)
*/




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//operaçoes em variaveis

/*
let nome = "jonas";
let sobrenome = "mendes"

let nomecompleto = nome + " " + sobrenome

console.log(nomecompleto)


let n1 = 15
let n2 = 20
let n3 = 167

let soma = n1 + n2 + n3

console.log(soma)

*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
//adicionando template string `${}`

let nome = "jonas";
let sobrenome = "mendes";

//let nomecompleto = nome + " " + sobrenome;

let nomecompleto = `${nome} ${sobrenome}` //templater string

console.log("nome : " + nomecompleto);


let idade = 90

let idadestring = `idade: ${idade} anos`

console.log(idadestring)
*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// if/else 
/*
let idade = 17

if (idade >= 18) {
console.log("você é maior de idade")

}else {
    console.log("você é menor de idade")
}

// <    menor 
// >    maior
// ==   igual
// >=   maior ou igual
// <=   menor ou igual
// !=   diferente ou igual

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//=== and == diferença 

/*

let idade = "20";

if(idade == 20){
    idade = idade - 2022;
    console.log("sua data de nacimento é");
    console.log(idade);
}


let n1 = 20;
if(n1 === 20){

    n1 = n1 - 2022;
    console.log("sua data de nacimento é");
    console.log(n1);
}

*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
let idade = 45 

if (idade >= 18){
    if(idade <= 60){
        console.log("você é um adulto")
    }
}
*/
/*
let idade = 14

if(idade >= 18 && idade <= 60){
    console.log("você é um adulto")
}

// && todos precisam ser true
// || pelo menos um precisa ser true 
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// condicional dupla tripla e etc... else if 

/*
let idade = 31

if(idade < 18){
    console.log("você é uma criança")
}else if (idade > 60){
    console.log("você é um idoso")
}else if(idade >= 18 && idade <= 60){
    console.log("você é um adulto")
}

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
let idade = 19

let adulto = idade >= 18 && idade <= 60

if(adulto){
    console.log("é adulto")
}else{
    console.log("nao é adulto")
}
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//subtitua 0 @ pela condicional correta para que 
// o resultado seja true 
/*
let x = 10
let y = 5

console.log(x > y)

//susbtitua o @ pela condicional correta para 
//o resultado seja false

let w = "10"
let z = 10

console.log (w === z)

//subtitua 0 @ pela condicional correta para que 
// o resultado seja true

let a = 10
let b = 5 

console.log(a != b)

//crie uma condicional para verificar se o preço da 
// carne esta barato ou caro. ps: até as 45 esta barato

let preco = 40.3

if (preco >= 45){
    console.log("o preço está caro")
}else{
    console.log("está barato")
}
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
// condicional ternario

let ismember = true

let shipping = ismember ? 2: 10

console.log(shipping ? "você é membro" : "você ñ é membro")
console.log(" frete " + shipping + "$")

let age = 60;

let isadult = (age >= 18 && age <= 60 ? 'sim' : 'não')

console.log(isadult)
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
let profession = "atleta"

switch(profession){
    case "fiscal" : 
        console.log("sua camisa será verde")
    break;
    case "policial" :
        console.log("sua camisa será azul")
    break;
    case "bombeiro" :
        console.log("sua camisa será VERMeLHa")
    break;
    default:
        console.log("sua camisa será preta")
        break;
}
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
// oque é uma função?

function gravidade(){
    console.log("a gravidade do planeta é ")
    console.log("9.8")
}

gravidade();
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
function somar(n1,n2) {
    let resultado = n1 + n2
    console.log("resultado é: " + resultado)
}

somar(19,15)

function nomeCompleto(nome,sobrenome){
    console.log(`${nome} ${sobrenome}`)
}

 nomeCompleto("jonas","mendes")
nomeCompleto("pedro","algusto")
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
function nomeCompleto(nome,sobrenome){
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("jonas","mendes")
console.log(`${"completo:"} ${completo}`)
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
function maiorDeIdade(n1) {
    if(n1 >= 18){
        return true;
    }else{
        return false;
    }
}


let idade = 19;
let verificacao = maiorDeIdade(idade)

if (verificacao){
    console.log("é maior de idade")
}else{
    console.log("você ainda não tem idade suficiente")
}
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
 calcule a porcentagem entre 2 numeros
 exemplo 25% de 40 é 10 
 formula da porcetagem: (y / x) *100
 uso da minha função

 let x = 40
 let y = 10

let pct = calcptc(x, y)
console.log(`${pct} ${x} ${y}`);

*/
/*
function calcpct(y ,x){
    let pct = (y / x) * 100
    return pct
}

let y = 80
let x = 15


let pct = calcpct(x , y)

console.log(`${pct}% de ${y} é ${x}`)
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
calcule  o preço do imovel
- n2 = 3.000
- se tiver 1 quarto o n2 é 1x
- se tiver 2 quartos o n2 é 1.2x
- se tiver 3 quartos o n2 é 1.5x

*/
/*
function calculaImovel(m2 , m1){

    m2 = 3000
    
    if( m1 === 1){
        let preco = metragem * (m2 * 1)
        return `sua casa com 1 quartos fica por ${preco}`

    }else if (m1 === 2){
        let preco = metragem * (m2 * 1.2)
        return `sua casa com 2 quartos fica por ${preco}`

    }else if( m1 === 3){
        let preco = metragem * (m2 * 1.5)
        return `sua casa com 3 quartos fica por ${preco}` 

    }
}

let metragem = 123
let quarto = 3

let preco = calculaImovel(metragem ,quarto)

console.log(`${preco}`)
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*crie uma função que avalie usario e senha.
usario correto: pedro
senha correta: 123
*/

/*
function validar( usuario, senha) {
 
   if(usuario === "pedro" && senha === "123") {
        return true
   }else{
        return false
   }

}

let usuario = "pedro"
let senha = "123"

let validacao = validar(usuario, senha);
if(validacao){
    console.log('acesso permitido meu patrão')
}else{
    console.log('acesso negado meu chapa')
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//const função  simplificação da função

/*
function s+omar (x, y ){
    return x + y
}*/
/*
const somari = (x , y) => {
    return x + y
}

const somar = (x , y) => x + y

console.log(somar(10,78))
/*
function sobrenome (sob){
    return "jonas " + sob
}*/
/*
const sobrenome = sob => "jonas " + sob

console.log(sobrenome("mendes"))

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let count = 0

function add() {
    
    count ++   
}


add()
add();


console.log(count)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// função dentro da função

 function addSquare(a ,b){

    const square = (x) => x * x

    return square (a) + square (b)
 }

 console.log(addSquare(2, 6))

 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Arrey

 let colors = [
    'blue' ,'red' ,'grenn', 'yellow'
];

 console.log(colors[1])

 let idade = [1 ,2 ,4 ,56]

 console.log(idade[3])

 let lista = ["blabla" ,["xx" ," yy"]]

 console.log(lista[1][0])

 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let ingredientes = [
    'farinha',
    'ovo',
    'manteiga',
    'sal',
    'açucar'
]

//pop = remove o ultimo
//shift = remove o primeiro


ingredientes.shift()

ingredientes.push('doce');

console.log(ingredientes)

console.log(`total de ingredientes ${ingredientes.length}`)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//exercicio array

//1. no array abaixo qual o numero que pega a ferrari

let carros = ['bmw', 'ferrari', 'mercedes']
let x = 1;

console.log('1 ' + carros[x] );

//2. troque a ferrari por aqui
carros[1]='audi'

console.log('2. lista com audi:');
console.log(carros);

//3. adicione o volvo a lista 

carros.push('volve')

console.log('3. lista com volvo:');
console.log(carros);

//4. exiba quantos itens tem no seu array

console.log(`4. items no array: ${carros.length}`);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let nome = "jonas"
let nomes =['jonas' , 'pedro']
let personagem = {
    nome : 'jonas',
    idade: 90,
    pais : 'brazil',
    olhos: ['preto' , 'azul'],
    atributos:{
        magia:30,
        vigor:40,
        mana:60
    }

}

personagem.nome = "bento";
personagem.atributos.mana = 70;
personagem.olhos.push('verde');

console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}`)
console.log(personagem.atributos.mana)
console.log(personagem.olhos[2])




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let pessoal = {
    nome : 'jonas',
    anos : 30,
    carro:[
       { modelo : 'Fiate' ,cor:'preto'},
       { modelo : 'ferrati', cor:'vermelha'}
    ]
}
console.log(pessoal.carro[0].cor);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let pessoa = {
    nome:'jonas',
    sobrenome: 'mendes',
    idade: '21',
    nomecompleto: function(){
        return`${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomecompleto())

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//let cores = ['preto', 'vermelho' , 'azul' ,'amarelo', 'cinza'];

let cores = [
    {nome: 'vermelho', qt: 14},
    {nome: 'azul', qt: 10},
    {nome: 'verde', qt: 7},
]

//for(let n = 0; n <= cores.length; n++){
 //   console.log(cores[n])}

for(let i in cores){
    console.log(cores[i].nome)
}
/*
for(let cor of cores){
    console.log(cor.nome + '-' + cor.qt)

}
*/
//for (let n = 0; n <= 15; n++){
 //   console.log('frase qualquer ' + n);}

 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
 let numero = 0 

 while(numero <= 10){
    console.log(`o numero da vez é ${numero}`);
    numero++;
 }

 for(let numero = 0; numero <= 10 ; numero++ ){ // a mesca coisa que o while
    console.log(`o numero da vez é ${numero}`);
 }
*/
 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
 //1 faça um loop que mostra as frutas 

 let frutas = ['maça', 'uva ', 'banana'];

 for(let n = 0; n < frutas.length; n++){
    console.log(frutas[n])
 }


 //2 conte de até 100 através de um while

 let conta = 1

 while(conta <= 100){
    console.log(conta)
    conta++
 }

 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 let fruits = ['maça', 'uva','banana','laranja'];

fruits.push ('kiwi');
console.log(fruits.join(' -> '));

fruits[fruits.length - 1]= 'pêra';

fruits.pop(); //tirar o ultimo da lista 
fruits.push(); // adicionar no array
fruits.shift(); // tirar do inicio do array


console.log(fruits.length)
console.log(fruits)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let f = ['maça', 'uva','banana','laranja']

f.sort(); // ordem alfebatica 
f.reverse(); // inverte

console.log(f)







let cars = [
    {brand: 'fiat', year: 2022},
    {brand: 'ferrari', year: 2020},
    {brand: 'bmw', year: 2018},
]

cars.sort((a, b) => {
    if(a.year > b.year){
        return 1;
    }else {
        return -1
    }
});

cars.sort((a, b)=>{
    return a.year - b.year;
})

console.log(cars)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




let frui = ['maça', 'uva','banana','laranja']

let bigfrui = frui.filter((value) => {
    if(value.length > 4){
        return true;
    }else{
        return false;
    }
})

//some // nem todos precisam ser satisfatorios
//every // todos os itens tem q ser satisfatorios


let ok = frui.some((value)=>{
    if(value.length > 3){
        return true
    }else{
        return false
    }
})

if(ok){
    console.log('todos são maiores que 3')
}else{
    console.log('todos ñ são maiores que 3')
}


if(fruits.includes('uva')){
    console.log('tem isso ai sim ')
}else{
    console.log('ñ tem isso ai  ñ pow')
}


*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
let contador = 0

function count(){
    return contador++;
}

function clicou (){
    return console.log(`clicou no botão ${count()}` )
  
}

let botão = document.querySelector('.botão')

botão.addEventListener('click', clicou);

*/
/*
function clicou(){
    const teste = document.querySelector('#te2')
    const ul = document.querySelector('ul')

    ul.children[0].prepend="mudei de novo"
    ul.innerHTML += '<li>mudei a porra toda</li>'

    console.log(ul.outerHTML)

    let newli = document.createElement('li');
    newli.innerText = 'um novo elemento'

    ul.prepend(newli);

    ul.children[0].append('(alterado)');
}
*/

/*
botão.addEventListener('click', clicou);

function clicou(){
    const teste = document.querySelector('#te2')
    const ul = document.querySelector('ul')
    
    const newbutton = document.createElement('button');

    let newul = document.createElement('ul')


    
    newbutton.innerHTML = "botão";

    ul.before('newbutton');

}
*/
/*

trocar senha visivel e ñ visivel


function clicou(){
    const input = document.querySelector ('input')
    const botao = document.querySelector('.botao')

if(input.getAttribute('type') === 'text'){
    input.setAttribute('type', 'password')
    botao.innerText = 'mostrar senha' 
}else{
    input.setAttribute('type', 'text')
    botao.innerText = 'ocultar senha' 
}


}
*/
/*
function clicou(){
    const body = document.querySelector('body')

    body.style.backgroundColor = 'black'
    body.style.fontSize = '20px'
    body.style.color = 'white'

}

function clicou(){
    const button = document.querySelector('button')


    if (button.classList.contains('azul')){
        button.classList.remove('azul')
        button.classList.add ('amarelo')
    }else{
        button.classList.add('azul')
        button.classList.remove('amarelo')
    }

    console.log(button.classList)

    
}

*/
/*
function apertou (){
    console.log('APERTOU')
}

function segurou (){
    console.log('SEGUROU')
}

function soltou (){
    console.log('SOLTOU')
}
*/

/*
function soltou (event){
    console.log('TECLADO APERTADO ' + event.code)
    console.log('shift ' + event.shiftKey);
    console.log('---')

}

const input = document.querySelector('input')

input.addEventListener('keyup', soltou)
*/
/*
    function pirulito () {
        const teste = document.querySelector('#teste')
        const ul = teste.querySelector('#ul')

        const newlist = document.createElement('ul')


        for(i = 0 ; i < 5 ; i++){
            let newli = document.createElement('li')
            newli.innerHTML='item novo' + i
            newlist.append(newli)
        }

        ul.before(newlist)
    }
    */
/*
    let botao = document.querySelector('.botao')

    botao.addEventListener('click', () => {
        pirulito()
    })
*/
/*
const ul = document.querySelector('#muda')
const input = document.querySelector('#input')

function adicionar(e){


    if(e.key === 'Enter'){
         const newli = document.createElement('li')

         newli.innerHTML = input.value
         ul.appendChild(newli)
         input.value = ""
    }
}

input.addEventListener('keyup', adicionar)
*/
/*
const input = document.querySelector('input')
const ul = document.querySelector('ul')

function adicionar(e){

    if(e.key === 'Enter'){
        let newli = document.createElement('li')
        
        newli.innerHTML= input.value
        ul.appendChild(newli)
        input.value= ""

    }
    
}
input.addEventListener('keyup', adicionar)
*/

//orientação a objetos

// --programação orientada a objetos -- OOP - eng / POO - br
// --programção funcional  FP - eng / PF - br
// --programação procedural / prototype-basead procedural language


//claases 
/*
class Person {

    _age = "(sem valor)";
    steps = 0;

    constructor(firtName, lastName){
        this.firtName = firtName
        this.lastName = lastName
    }
    takestep(){
        this.steps++;
    }
/*
    setAge(newage){
        if (typeof newage == "number" && newage >= 18){

            this.age = newage
            console.log('seu acesso foi permitido,bem vindo!')

        }else if( newage < 18){

            console.log('você é menor de idade,seu acesso foi negado ')
            
        } else if( newage != !Number){

            console.log('erro! (só Numeros permitidos)')
            
        }
        
    }*/
    /*
    get fullName(){
        return `${this.firtName} ${this.lastName}`
    }

    get age(){
        return this._age
    }

    set age(x){
        if(typeof x == "number" &&  x >= 18){
            this._age = x
        }
    }

}



let p1 = new Person('joao','algusto' );
let p2 = new Person('maria','luna' );
let p3 = new Person('pedro', 'duarte');

p1.age = 40;

console.log(`${p1.fullName} tem ${p1.age} anos de idade `)



*/

/*
p1.takestep();

console.log(`passos de ${p1.name} forão de ${p1.steps}`);
console.log(`passos de ${p2.name} forão de ${p2.steps}`);
*/
/*
p1.age = 21

console.log(`p1 = ${p1.name} tem ${p1.age} anos.`)
console.log(`p2 = ${p2.name} tem ${p2.age} anos.`)
console.log(`p3 = ${p3.name} tem ${p3.age} anos.`)
*/
/*
class Person {

    age = 0

    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`${this.name} Diz ola`)
    }
}

class student extends Person  {


    constructor(name, id){
        super(name)
        this.id = id
       
    }
    sayHello(){
        super.sayHi()     
    }

}

let p1 = new student("jonas", 56875689)
p1.age = 20
p1.sayHello()

console.log(`${p1.name} que tem ${p1.age} anos, com o id de #${p1.id}`)

let p2 = new Person("pedro", 56748499)
p2.age = 30
p2.sayHi()

console.log(`${p2.name} que tem ${p2.age} anos, com o id de #${p2.id}`)


*/
/*
class Person{

    static hands = 2
    age = 0

    constructor(name){
        this.name = name
    }
    sayhi(){
        console.log(`oi eu sou ${this.name} e tenho ${Person.hands} mãos`)
    }

    static sayHi(){
        console.log('oi')
    }

}

Person.sayHi()

let p1 = new Person ('jonas');
p1.sayhi()
*/
/*
class Person{

    age = 0

    constructor(name){
        this.name = name
    }
}


function creatPerson (name , age){
    let p = new Person(name)
    p.age = age
    return p;
}

let p1 = creatPerson('jonas' , 21);

console.log(`${p1.name} tem ${p1.age} anos`)

*/

// requisições

//oque é sicrono e assincrono

//sincrono ~sao excutados em uma ordem 
//assincrono são executados os mesmo tempo
/*
let nome = 'jonas'
let sobrenome = 'mendes'

let nomeCompleto = nome + sobrenome
*/
/*
como a web funciona (requisição e resposta)
request
->cabeçalho / headers
->corpo / body

response
->cabeçalho / headers
->corpo / body
*/
/*
como funciona API
API = application programing interface

JSON = javacript object notation

https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/users

*/

//oque é um callback
/*
call back = ligar de volta

*/
/*
document.querySelector('#botao')
.addEventListener('click', () => (
    alert('clicou no botão')
))
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// requisição

//promese uma função ansincrona//

//GET , POST , PUT ,DELETE

//https://jsonplaceholder.typicode.com/posts

//let clicou = async () => {} //

/*
//GET
async function clicou(){

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
    alert(`status ${json[0].title}`)

    alert('clicou')
    

   
}



//metodo POST
async function inserir(){

    let response= await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        Headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            title:'titulo de teste',
            body:'corpo de teste',
            UserId: 3
        })
    })
   let json = await response.json();

        console.log(json);
   
        
}


document.querySelector('#botao').addEventListener('click', clicou)
document.querySelector('#inserir').addEventListener('click', inserir)


*/
/*
function clicou(e){
   if(e.keyCode == 13){
    let Enter = document.getElementById('input').value;
    const input = document.querySelector('#input')
    console.log(Enter)
    
    input.value=""

   }
}
*/
/*
function limpa(){
    document.getElementById('titulo').classList.remove('azul');
    document.getElementById('titulo').classList.remove('vermelho');
    document.getElementById('titulo').classList.remove('verde');
}

function azul(){
    limpa()
    document.getElementById('titulo').classList.add('azul');

}
function vermelho(){
    limpa()
    document.getElementById('titulo').classList.add('vermelho');

}
function verde(){
    limpa()
    document.getElementById('titulo').classList.add('verde');

}
*/
/*
function mostraTelefone(elemento){
    elemento.style.display="none"
    document.querySelector('#telefone').style.display = 'block';

}
*/
/*
function mostra(elemento){
    elemento.style.display = 'none'
    document.getElementById('nav').style.display='inline-block'

}

let carros = [ 
    "ferrari", 
    'corolla', 
    'uno', 
    'jeep'
];

let carro = {
    nome:'fiat',
    modelo: 'uno',
    peso: '800kg',
    ligado: false,
    ligar:function(){
        this.ligado = true
        console.log('vrumvrum')
    },
    acelerar: function(){
        if(this.ligado == true ){
            console.log('ririririri')
        }else{
            console.log(`o ${this.nome} ${this.modelo} não está ligado`)
        }
    }
};
console.log(`o modelo: ${carro.modelo}`)
carro.ligar()
carro.acelerar()


*/
/*
let dia = 7
let diaNome =''

switch(dia){
    case 1:
        diaNome = 'segunda-feira'
        break
    case 2:
        diaNome = 'terça-feira'
         break    
    case 3:
        diaNome = 'quarta-feira'
        break     
    case 4:
        diaNome = 'quinta-feira'
        break
    case 5:
        diaNome = 'sexta-feira'
        break    
    case 6:
    case 7:
        diaNome = 'final de semana'
        break  
    default:
        diaNome = 'dia da semana'
        break
        
        
}
document.getElementById('dia').innerHTML=`hoje é ${diaNome}`
*/
//for loop
// for loop aray



//let carros = ['ferrari', 'uno', 'corola', 'jepp','sivic']

//let html = '<ul>';
/*
for (let i in carros){
    html += '<li>'+carros[i] +'</li>'
}

html += "</ul>"
*/
/*
let c = 0

while(c <= 10){

    html+= `numero ${c} </br>`
    c++
}

for (let c = 1; c <= 10; c++){
    html+=`numero: ${c} </br>`
}

document.querySelector("#demo").innerHTML= html

*/
/*
let texto = ""

for(let i = 0;i <= 50; i++){
    texto = texto + i + '</br>'
}
*/
/*
document.getElementById('demo').innerHTML='pedro <button>botão</button>';

document.getElementsByClassName('lista')[0].innerHTML='item alterado'

document.getElementsByName('Email')

document.getElementsByTagName('button')

document.querySelector('button').innerHTML="eu quero você";
*/
/*
function verde(){
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.remove('amarelo')
    document.querySelector('#exemplo').classList.add('verde')

}
function vermelho(){
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.remove('amarelo')
    document.querySelector('#exemplo').classList.add('vermelho')
}
function azul(){
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.remove('amarelo')
    document.querySelector('#exemplo').classList.add('azul')
}
function amarelo(){
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.remove('amarelo')
    document.querySelector('#exemplo').classList.add('amarelo')
}

*/
/*
function trocar(){
   if ( document.querySelector('button').classList.contains('preto')){
    document.querySelector('button').classList.remove('preto')
    document.querySelector('button').classList.add('verde')
   } else{
   document.querySelector('button').classList.remove('verde')
   document.querySelector('button').classList.add('preto')
   }

   
}

var nome= 'jonas'
var idade = 90
var salvo = false
var cidade;

var tipo = typeof nome

console.log(tipo)

*/
/*
function trocar(titulo){
    document.getElementById('exemplo').innerHTML= titulo
    document.querySelector('.preto').value = titulo
}
*/
/*
function somar(x, y){
    let total = x + y;

    document.getElementById('soma').value=total
}

somar(16, 30)

*/
/*
function trocarimagem(filename, animalName){
    document.querySelector('.imagem').setAttribute('src', 'imagem/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalName)
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    alert(`o animal é ${animal}`)
}

*/

/*
function subirtela(){

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}
function decidirBotão(){

    if(window.scrollY === 0){
        document.querySelector('.scroolbutton').style.display='none'
    }else{
        document.querySelector('.scroolbutton').style.display='block'
    }
}

//setInterval(decidirBotão, 1000)
window.addEventListener('scroll', decidirBotão)

*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//editando string

//lengh()
//indexOf() procura a posição das strings
//slice()
//subtring()
//substr()
//replace() subtitui os valores
//toLocaleUpperCase()
// trim() tira os espaços em branco
//charAt()
// split() tranforma em array
/*
let nome  = 'jonas da silva mendes'

let resultado= " "

 if(nome.indexOf('bruno') > -1){
    resultado = 'achou'
 }else{
    resultado='ñ achou'
 }

console.log(resultado)
*/
/*
let nome = 'jonas mendes'

let resultado = nome.replace()


console.log('resultado:', resultado)
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//number manipulação

//toString() trasnformar em string
//toFixed() diminuir os numeros de decimais
// parseInt() trandofrma strings em numeros inteiros
// parsefloat() numeros decimais são preservados tbm
/*
let n = '45.6'

let res = parseFloat(n) + 5.8

console.log(res)
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//arrays e manipulação 

//toString() trandorma em sting
// join() transforma em string tbm com outras funcionalidades
// indexOf() acha a posição do item no array
// pop() remove o ultimo item do array
// shift() remove o primeiro item do array
// push() adiciona um item no array
// [lista.length] altera o item ou adicona em um lugar que ñ foi ocupado ainda 
// splice() remover itens de qualquer lugar usando 2 parametros
// concat() junta 2 arrays 
// sort() ordena as listas em ordem alfabetica A a Z
// reverse() ela faz o Sort() ficar de Z a A / e reverte a ordem dos itens sem o sort()
// map() cria uma função interna que pode substituir o for e fazer um loop em um array de uma maneira mais simples 
// filter() ele cria um filtro que pode se utilizar de função para filtrar os conteudos do array
// every() ele retorna true ou false, caso faça um desafio ele retorna com true ou false e todo mundo do array precisa estar de acordo com a condição
// find() ele retorna o item do array utilizando uma função 
// findIndex() ele retorna o numero do array na lista de arrays,você consegue fazer isso usando uma função 
/*
let lista = [
    {nome: 'jonas', id:1 , sobrenome: 'mendes'},
    {nome: 'pedro', id:2, sobrenome: 'pereira'},
    {nome: 'marcio', id:3, sobrenome: 'torrez'},
]

let pessoa = lista.find(function(i){
    return(i.id == 2) ? true: false
})



console.log(pessoa)
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// new Date() gerando a Data e hora 
// toDateString() resume a data e a hora
// toUTCString() entrega a data do global
// toString() transforma em string
// getFullYear() pegar o ano
// getMonth() pegar o mês
// getDay() pega o numero do dia da semana 
// getDate() pega a data do dia 
// getHours() pega as horas
// getMinutes() pega os minutos
// getSeconds() pega os segundos
// getMilliseconds() pega os mili segundos
// getMilliseconds() quantidade de milisegundos de 1970 até o momento


//Datas
/*
let d = new Date();

d.setTime

console.log(d)
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
// matematica 

//Math.round() arredonda a função
//Math.round() arredonda para baixo sempre
//Math.ceil () sempre arredonda para cima
//Math.abs() saber o numero absoluto
//Math.min() menor numero de de uma cadeia de numeros
//Math.max() o maior de cada cadeia de numero
//Math.random() um numero aleatorio de 0 a 10

let novoValor = Math.floor( Math.random() * 100)

console.log( novoValor)
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//intervalos

//setInterval() sempre fica atulizando o de tempos em tempos
/*
let timer

function comecar(){
    timer = setInterval(showtime, 1000);
}
function parar(){
    clearInterval(timer)
}

function showtime(){
    let d = new Date();
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()

    let txt = `${h}: ${m}: ${s}`

    document.querySelector('.demo').innerHTML= txt


}
 // settimeout() vai esperar um tempo e rodar uma função uma vez
*/
/*
let timer
function rodar(){

timer = setTimeout( function(){
    document.querySelector('.demo').innerHTML='rodou'
}, 2000)

}
function parar(){
    clearTimeout(timer)
}
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// desconstrução de objetos

/*
let pessoa  = {
    nome: 'jonas',
    sobrenome: 'mendes',
    idade: 90,
    social:{
        facebook:{
            url : 'meufaceboook',
            seguidores: 1000 
        },
        instagram: 'meMejonas'
    },
   
}

//let  { nome , idade, social:{ facebook:{url:facebook } } } = pessoa // transformando dentro de muitas e muitass

//let {nome:pessoaNome, sobrenome, idade = 0}   = pessoa //tranformar em varieavis os obejtos do array

function pegaNome({nome, sobrenome, social:{facebook: {url: facebook}}}){
    return `${nome} ${sobrenome} @${facebook}`
}
console.log(pegaNome(pessoa))

*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//descostruindo arrays
/*
function criar(){
   return [1 , 3 , 4]
    
}
let [ a, b, c] = criar()



//let [nome ,sobrenome, idade=90] = ['jonas', 'mendes', 190]; // cria variaveis ja dentro do array

//let array = ['jonas mendes', 'jonas', 'mendes','@jonas_43']

//let [ nomeCompleto, , ,instagram] = array // transfromando em uma variavel os itens do array

console.log(a ,b , c)
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*

//arrow function    

function somar(x , y ){
    return x + y
}
*/
/*
let somar = function(){
    returne x+ y
}

*/
/*
let somar = (x, y) => {  // arrow function
    return x + y
}
*/

//let somar = (x ,y) => x + y // arrow resumo e simples com uma ação especifica
/*
let letrasNoNome = nome => nome.length;


console.log(letrasNoNome('jonas'))
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// operador spread
/*
let numeros = [1, 2, 3, 4]

let outros = [5,  6, 7, 8] // spread

console.log(numeros)
*/
/*
let info = {
    nome: 'jonas',
    sobrenome:'mendes',
    idade: 21
}

let novasInfos = {
    ...info,
    cidade: 'recife',
    pais: 'brasil',
    região: 'nordeste',
}

console.log(novasInfos)
*/
/*
function adicionaInfo(info){
    let novasinfo = {
        ...info,
        status: 0,
        token: 'viva la vida loka',
        data_cadastro: '.....'
    }
    
    return novasinfo
}
console.log(adicionaInfo({nome: 'jonas', sobrenome: 'mendes'}))
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//operador rest



/*
 function add(...nomes){
        console.log(nomes)
 }

 add('jonas','pedro', 'afonso');
*/

 /*

 function add(nomes, ...novosNomes){
    
    let outroParametro = [
        ...nomes,
        ...novosNomes
    ]

    return outroParametro
 }

 let nomes = ['jonas', 'paulinho']

 let outros = add(nomes, 'antornio', 'pedro', 'guilherme')

 console.log(outros)
 */

 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 