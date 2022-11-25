let InputValue = document.querySelector("#input")
let outputValue = document.querySelector('#equal')
let dota = true;
let screen = document.querySelector('.display')
// let btnEqual = document.querySelector(eval)

// btnEqual.addEventListener('click', function()){}
function display(number) {
    InputValue.value = InputValue.value + number
}

//Formula to make the decimal clickable once per calculation
function displayDecimal (number) {
    if (dota === true) {
        InputValue.value = InputValue.value + number
        dota = false;
    }
}
function symbols (number) {
    InputValue.value = InputValue.value + number;
    dota = true;
}
function calculate() {
    var p =document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
    toggledota();
}

function clr() {
    toggledota();
    InputValue.value = "";
}

const toggledota = () => {
    allowComa = true;
} 