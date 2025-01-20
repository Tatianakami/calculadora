let currentInput = '';
let previousInput = '';
let operation = undefined;

const displayElement = document.getElementById('display');

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate(); 
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay(); 
}

function calculate() {
    if (operation === undefined || currentInput === '') return;

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    let result;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = undefined;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    displayElement.textContent = currentInput || '0';
}

