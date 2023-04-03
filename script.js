//input variables
let firstOperand = 0;
let secondOperand = 0;
let currentOperator = null;

//get user data
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const clear = document.getElementById('clear');
const deleteScreen = document.getElementById('delete');
const equals = document.getElementById('equals');
const point = document.getElementById('point');
const result = document.getElementById('result');

//math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//operator function
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '−':
            return subtract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }

}

//show numbers
numbers.forEach((button) => {
    button.addEventListener('click', () => changeNumber(button.textContent));
});

function changeNumber(number) {
    const screenNumber = result.innerHTML;
    if (screenNumber.length < 9)
        result.textContent = parseInt(screenNumber + number).toString();
}

//select operator
operators.forEach((button) => {
    button.addEventListener('click', () => changeOperator(button.textContent));
})

function changeOperator(operator) {
    currentOperator = operator;
    firstOperand = result.textContent;
    result.textContent = null;
    
}




    












