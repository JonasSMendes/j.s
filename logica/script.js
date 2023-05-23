//inicio do programa



// a- consultar saldo
// b- depositar dinheiro
// c- retirar dinheiro
// d - encerrar programa


const Caixa_eletronico = () =>{

    Array = ['a', 'b' , 'c' ]

    let selecionar_opcao = Array[1];
    let saldo = 1000;
    let valor = 50;
    let encerrar_programa = false;

    if(encerrar_programa === false){
        if(selecionar_opcao === 'a'){
            console.log(saldo);
        }else if(selecionar_opcao == 'b'){
            console.log(parseInt(saldo) + parseInt(valor));
        }else if(selecionar_opcao == 'c'){
            if(saldo < valor){
                console.log('saldo insuficiente')
            }else{
                console.log(saldo - valor);
            }    
        }
    }else{
        console.log('obrigado volte sempre')
    }

}

Caixa_eletronico()

let m = 5
let c  = 10

const calculinho = () =>{
    

    for(let t = 1; t < m; t++ ){
       console.log(c * (1 + t))
    }
    
}

calculinho();


let nome = 'jonas'

let dia = '22'

let mes  = '10'



console.log('LOGIN:',dia + nome + mes)