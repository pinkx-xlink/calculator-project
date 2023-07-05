
//add function
function add(num1, num2) {
   let res = num1 + num2
   return res
}


//subtract function
function subtract(num1, num2) {
    let res = num1 - num2;
    return res
}


//multiply function
function multiply(num1, num2) {
    let res = num1 * num2;
    return res;
}


//divide function
function divide(num1, num2) {
    let res = num1 / num2;
    return res;
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelector('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');



class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

delete() {
}

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperand(operation) {
    operationsButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText)
            calculator.updateDisplay()
        })
    })
}

compute() {
}

updateDisplay() {
}

//const number 1



//const operator



//const number 2



// functions to populate display when number keys are clicked



//operate() function



