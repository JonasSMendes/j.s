let currentQuestion = 0;
let correctCurrent = 0;
showQuestion();

document.querySelector('.scoreArea button').addEventListener('click', resetEvent)

function showQuestion() {
    if(questions[currentQuestion]){
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100)

        document.querySelector('.progress--bar').style.width = `${pct}%`

        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'

        document.querySelector('.question').innerHTML = q.question
        document.querySelector('.options').innerHTML = ''

        let optionsHtml = ''
        for(let i in q.options){
            optionsHtml += `<div data-op ="${i}" class='option'><span>${parseInt(i)+ 1} </span>${q.options[i]} </div>`  
        }

        document.querySelector('.options').innerHTML = optionsHtml

        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent)
        })
    }else{
        finishQuiz()
    }
}

function optionClickEvent(e){
    let clickOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickOption){
        correctCurrent++;
    }

    currentQuestion++
    showQuestion()
}
function finishQuiz(){

    let points = Math.floor((correctCurrent / questions.length )*100)

    if(points < 30){
        document.querySelector('.scoreText1').innerHTML = `ta ruim heim meu chapa,bora estudar mais`
        document.querySelector('.scorePct').style.color = '#ff0000'
    } else if(points >= 30 && points < 70){
        document.querySelector('.scoreText1').innerHTML = `ta indo bem`
        document.querySelector('.scorePct').style.color = '#ffff00'
    }else if(points >= 70){
        document.querySelector('.scoreText1').innerHTML = `uhuu, você é muito bom`
        document.querySelector('.scorePct').style.color = '#0d630d'
    }

    document.querySelector('.scorePct').innerHTML = `acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML = `você respondeu ${questions.length} quatões e acertou ${correctCurrent}`
    
    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.progress--bar').style.width = `100%`

}

function resetEvent(){
    currentQuestion = 0;
    correctCurrent = 0;
    showQuestion();
}