let Jvalidator = {
    handleSubmit:(event)=>{
        event.preventDefault();

        let send = true

        let inputes = form.querySelectorAll('input')

        Jvalidator.clearError()

        for(let i = 0; i < inputes.length; i++ ){
            let input = inputes[i]
         let check =    Jvalidator.checkInput(input)
         if(check !== true){
            send = false
            Jvalidator.showError(input, check)
         }
           
        }
        

        if(send){
            form.submit();
        }
    },
    checkInput:(input)=>{
        let rules = input.getAttribute('data-rules')

        if(rules !== null){
            rules = rules.split('|')
            for(let k in rules){
                let rDetails = rules[k].split('=');

                switch(rDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'campo deve estar preenchido'
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetails[1]){
                            return `ao menos ${rDetails[1]} caractes`
                        }
                    break;
                    case 'email':

                        if(input.value != ''){
                            let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

                            if(!regex.test(input.value.toLowerCase())){
                                return ` Email invalido`
                            }
                        }

                    break;

                }

            }
        }
        return true
    },

    showError:(input,error)=>{
        input.style.borderColor = '#ff0000'

        let errorElement = document.createElement('div')
        errorElement.classList.add('error')
        errorElement.innerHTML = error

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearError:()=>{
        let inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++){
            inputs[i].style = ''
        }


        let errorElements = document.querySelectorAll('.error');
        for(let i = 0; i< errorElements.length;i++){
            errorElements[i].remove();
        } 
    }
}

let form = document.querySelector('.Jvalidator')
form.addEventListener('submit', Jvalidator.handleSubmit)

