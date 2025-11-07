const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const output = document.getElementById('output');
console.log("hh");
function add() {
    const op = Number(num1.value) + Number(num2.value);
    output.innerText = op;
}

function sub() {
    const op = Number(num1.value) - Number(num2.value);
    output.innerText = op;
}

function mul() {
    const op = Number(num1.value) * Number(num2.value);
    output.innerText = op;
}

function div() {
    if (Number(num2.value) === 0) {
        output.innerText = "Cannot divide by zero";
        return;
    }
    const op = Number(num1.value) / Number(num2.value);
    output.innerText = op;
}