
const el = document.querySelector('.text-name-js h1');
const text = 'SKYE...';
const interval = 400;

function showtext(el, text, interval){
    const char = text.split('').reverse()

    const type = setInterval(()=>{
        if(!char.length){
            return clearInterval(type)
        }

        const next = char.pop()

        el.innerHTML += next

    },interval)
}

showtext(el, text, interval)

