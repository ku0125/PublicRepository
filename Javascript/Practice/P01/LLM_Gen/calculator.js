// calculator.js

let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    if (currentOperand.includes('.') && number === '.') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function appendDot() {
    if (currentOperand === '') {
        currentOperand = '0.';
    } else if (!currentOperand.includes('.')) {
        currentOperand += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentOperand;
}
