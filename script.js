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

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener('click', () => {
    if (!checkForDecimal(displayValue)) {
        displayValue += decimalButton.textContent;
        display(displayValue);
    }
})

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (num1) {
            evaluate()
        }
        op = button.textContent;
        num1 = displayValue;
        displayValue = "";
    })
})

const equalButton = document.querySelector(".evaluate");
equalButton.addEventListener('click', evaluate);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => {
    displayValue = "";
    num1 = "";
    num2 = "";
    op = "";
    display(displayValue);
})

const signButton = document.querySelector(".negate");
signButton.addEventListener('click', () => {
    if (displayValue.charAt(0) === "-") {
        displayValue = displayValue.slice(1);
        display(displayValue);
    } else {
        displayValue = "-" + displayValue;
        display(displayValue);
    }
})

// Helper Functions
function checkForDecimal(value) {
    const arrayedValue = value.split("");
    return arrayedValue.includes(".");
}

function display(val) {
    document.querySelector('.display > p').textContent = val;
}

function evaluate() {
    num2 = displayValue;
    if (op === "/" && num2 === "0") {
        display("uhhh")
    }
    else if (num1 && num2 && op) {
        displayValue = operate(op, Number(num1), Number(num2));
        display(displayValue);
    }
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

function divide(a, b) {
    return a / b;
}