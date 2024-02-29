let MAX_DISPLAY_LENGTH = 8;

let displayValue = "";
let num1;
let num2;
let op;

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue.length < 8) {
            displayValue += button.textContent;
            display(displayValue);
        }
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

const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener('click', () => {
    if (displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
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
    }

    if (checkForDecimal) {
        display(roundOutput(displayValue));
    }
    else {
        display(displayValue);
    }

    num1 = "";

}

function roundOutput(val) {
    let displayValueString = val.toString();
    if (displayValueString.length > 8) {
        let displayValueStringDecimalIndex = displayValueString.indexOf(".");
        if (displayValueString.includes(".")) {
            let roundTo = MAX_DISPLAY_LENGTH - (displayValueStringDecimalIndex + 1);
            val = displayValue.toFixed(roundTo);
        }
    }

    return val
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