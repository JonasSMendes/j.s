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