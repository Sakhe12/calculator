let InputValue = document.querySelector("#input")
let outputValue = document.querySelector('#equal')
let allowComa = true;
let screen = document.querySelector('.display')
// let btnEqual = document.querySelector(eval)

// btnEqual.addEventListener('click', function()){}
function display(number) {
    InputValue.value = InputValue.value + number
    allowComa = true;
}

//Formula to make the decimal clickable once per calculation
function displayDecimal (number) {
    if (allowComa === true) {
        InputValue.value = InputValue.value + number
        allowComa = false;
    }
}
function symbols (number) {
    InputValue.value = InputValue.value + number;
    allowComa = true;
}
function calculate() {
    var p =document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
    toggleAllowComma();
}

function clr() {
    toggleAllowComma();
    InputValue.value = "";
}

const toggleAllowComma = () => {
    allowComa = true;
} 
function islastDot() {
    let x = (InputValue.value.length - 1);
    if ((InputValue.value[x]).includes('.') ) {
        return false;
    }
    else {
        return true;
    }
}

function del() {
    InputValue.value = InputValue.value.slice(0,-1);
}