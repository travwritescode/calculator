let displayValue = "";
let num1;
let num2;
let op;

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.textContent;
        display(displayValue);
    })
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        op = button.textContent;
        num1 = displayValue;
        displayValue = "";
        display(displayValue)
    })
})

const equalButton = document.querySelector(".evaluate");
equalButton.addEventListener('click', () => {
    num2 = displayValue;
    displayValue = operate(op, Number(num1), Number(num2));
    display(displayValue);
})

function display(val) {
    document.querySelector('.display > p').textContent = val;
}

function operate(operator, number1, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2)
        case "-":
            return subtract(number1, number2);
        case "*":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            break;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a ,b) {
    return a / b;
}