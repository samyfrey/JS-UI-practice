class Calculator {
    constructor(previousOperandText, currentOperandText) {

        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        // calls clear function as soon as we instantiate the calculator class
        this.clear()

    }
    clear(){
        this.currentOperandText = ''
        this.previousOperandText = ''
        this.operation = undefined


    }
    appendNumber(number){

    }
    chooseOperation(operation){

    }
    compute(){

    }

}

const screen = document.getElementById('screen')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelector('[data-operation]')
const clearButton = document.querySelector('[data-all-clear')
const deleteButton = document.querySelector('[data-delete]')
const equalButton = document.querySelector('[data-equals]')
const previousOperandText = document.querySelector('[data-previous-operand')
const currentOperandText = document.querySelector('[data-current-operand')
function startOperation(value){
    screen.innerHTML = `${value}`
}