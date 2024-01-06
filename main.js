const display = document.querySelector('#display');
const numberBtn = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const negativeBtn = document.querySelector('.negative');
const pourcentBtn = document.querySelector('.pourcent');
const egalBtn = document.querySelector('.egal');

numberBtn.forEach(btn => btn.addEventListener('click', () =>{
    display.value += btn.textContent;
}));

clearBtn.addEventListener('click', clear)

document.addEventListener('keydown', function (event) {
    if (event.key === "Backspace") {
        let temp = display.value.toString();
        display.value = temp.slice(0,-1);
    } else if(event.key === "Delete") {
        clear();
    };
})

egalBtn.addEventListener('click', ()=>{
    if(calcul() != undefined) {
        display.value = calcul();
    }
})

negativeBtn.addEventListener('click', ()=>{
    if(calcul() != undefined) {
        let temp = calcul();
        if(temp > 0) {
            temp = "-" + temp;
        }
        else if(temp < 0) {
            temp = temp.slice(1)
        };
        display.value = temp;
    }
})

pourcentBtn.addEventListener('click', ()=>{
    display.value = eval(display.value) / 100;
})

function calcul(){
    try {
        return eval(display.value).toString();
    } catch (error) {
        display.value = "Error"
        setTimeout(() => {
            display.value = "";
        }, 2000);
    }
}

function clear(){
    display.value = "";
}