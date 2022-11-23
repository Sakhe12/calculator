let InputValue = document.querySelector("#input")
let outputValue = document.querySelector('#equal')
// let display = document.querySelector('.display')
// let btnEqual = document.querySelector(eval)

// btnEqual.addEventListener('click', function()){}
function display(number) {
    InputValue.value = InputValue.value + number
}
function calculate() {
    var p =document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
}

function clr() {
    InputValue.value = "";
}