function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,operation,b){
    if(operation == "+")
        return add(a,b);
    else if(operation == "-")
        return subtract(a,b);
    else if(operation == "*")
        return multiply(a,b);
    else if(operation == "/")
        return divide(a,b);
}

const inputButtons = document.querySelectorAll(".input-button");
const operatorButtons = document.querySelectorAll(".operation-button");
const equalsButton = document.querySelector(".equals-button");
const clearButton = document.querySelector(".clear-button");
const display = document.querySelector(".display");
let displayValue = 0;
let operant1=0;
let operant2=0;
let operation = "";
inputButtons.forEach((inputButton) => {
    inputButton.addEventListener("click", function(){
        if(display.textContent == "0")
            display.textContent = inputButton.textContent;
        else
            display.textContent += inputButton.textContent;
        displayValue = Number(display.textContent);
    })
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", function(){
        if(operant1 == 0)
            {
            operant1 = displayValue;
            }
            else if(operant1 != 0)
            {
            operant1 = operate(operant1,operation, displayValue);
            }
        operation = operatorButton.textContent;
        display.textContent = 0;
        console.log(operant1 + " " + operation);
            
    })
})

equalsButton.addEventListener("click", function() {
    operant2 = displayValue;
    displayValue = operate(operant1, operation, operant2);
    display.textContent = displayValue;
    operant1 = 0;
    operant2 = 0;
    operation = "";
})

clearButton.addEventListener("click", function(){
    operant1 = 0;
    operation = 0;
    operant2 = 0;
    displayValue = 0;
    display.textContent = 0;
})