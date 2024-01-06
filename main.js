let display = document.querySelector('#display');
let numberBtn = document.querySelectorAll('.number');
let clearBtn = document.querySelector('.clear');
let negativeBtn = document.querySelector('.negative');
let pourcentBtn = document.querySelector('.pourcent');
let egalBtn = document.querySelector('.egal');

for(let i = 0; i<numberBtn.length; i++){
    numberBtn[i].addEventListener('click', ()=>{
        display.value += numberBtn[i].textContent;
    })
}

clearBtn.addEventListener('click', clear)

document.addEventListener('keydown', function (event) {
    if (event.key === "Backspace") {
        let temp = "" + display.value;
        display.value = temp.slice(0,-1);
    } else if(event.key === "Delete") {
        clear();
    };
})

egalBtn.addEventListener('click', ()=>{
    display.value = eval(display.value);
})

negativeBtn.addEventListener('click', ()=>{
    let temp = "" + eval(display.value);
    if(temp > 0) {
        temp = "-" + temp;
    }
    else if(temp < 0) {
        console.log('negative');
        temp = temp.slice(1)
    };
    display.value = temp;
})

pourcentBtn.addEventListener('click', ()=>{
    display.value = eval(display.value) / 100;
})


function clear(){
    display.value = "";
}