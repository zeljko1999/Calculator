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
const deleteButton = document.querySelector(".delete-button");
const current = document.querySelector(".current-result");
const display = document.querySelector(".display");
let displayValue = 0;
let operant1=0;
let operant2=0;
let operation = "";
inputButtons.forEach((inputButton) => {
    inputButton.addEventListener("click", function(){
        if(inputButton.textContent == ".")
        {
            let current = display.textContent.split("");
            for(let i=0;i<current.length;i++)
                {
                    if(current[i] == ".")
                        return 0;
                }
        }
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
        current.textContent = operant1 + " " + operation;
            
    })
})

equalsButton.addEventListener("click", function() {
    if(operation == "=")
            return 0;
    if(operant2 == 0 && operant1 == 0)
            return 0;
    operant2 = displayValue;
    if(operant2 == 0)
        return 0;
    current.textContent += " " + operant2 + " =";
    displayValue = operate(operant1, operation, operant2);
    displayValue = parseFloat(displayValue);
    if(!Number.isInteger(displayValue))
        displayValue= displayValue.toFixed(2);
    display.textContent = displayValue;
    operant1 = 0;
    operant2 = 0;
    operation = "=";
})

clearButton.addEventListener("click", function(){
    operant1 = 0;
    operation = 0;
    operant2 = 0;
    displayValue = 0;
    display.textContent = 0;
    current.textContent = "";
})

deleteButton.addEventListener("click", function() {
    if(display.textContent == "0")
            display.textContent = 0;
        else if(display.textContent.length == "1")
            display.textContent = 0;
        else 
            {
                display.textContent= display.textContent.slice(0,-1);
            }
    displayValue = Number(display.textContent);
})

