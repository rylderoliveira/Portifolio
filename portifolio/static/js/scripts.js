const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.previousOperand = " ";
    this.currentOperand = " ";
    this.operation = undefined;
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }

  delete() {
    this.currentOperand = currentOperandTextElement.innerText
    this.previousOperand = previousOperandTextElement.innerText
    this.currentOperand = this.currentOperand.substring(0, this.currentOperand.length - 1)
  }

  appendNumber(number) {
    if (this.currentOperand.includes(".") && number == ".") return
    this.currentOperand = currentOperandTextElement.innerText + number
    this.previousOperand = previousOperandTextElement.innerText
  }

  chooseOperator(operation) {
    this.operation = operation
    
    // Clear the previousOperando after a equals operand
    if (this.previousOperand.includes("=")) {
      this.previousOperand = " "
    }

    // I use this for not repeat the operator on the previusOperand
    if(this.currentOperand == " ") {
      this.previousOperand = previousOperandTextElement.innerText
      this.previousOperand = this.previousOperand.substring(0, this.previousOperand.length - 1) + this.operation
    } else {
      this.previousOperand = this.previousOperand + this.currentOperand + this.operation
      this.currentOperand = " "
    }
  }

  calcule(expression){
    const ans = eval(expression + this.currentOperand)
    this.previousOperand = this.previousOperand + this.currentOperand + "="
    this.currentOperand = ans
    console.log(ans)
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

for (const numberButton of numberButtons){
  numberButton.addEventListener("click", () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
  })
}

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
})

for (const operatorButton of operatorButtons){
  operatorButton.addEventListener("click", () => {
    calculator.chooseOperator(operatorButton.innerText);
    calculator.updateDisplay();
  })
}

equalsButton.addEventListener("click", () => {
  calculator.calcule(previousOperandTextElement.innerText);
  calculator.updateDisplay();
})

