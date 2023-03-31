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

let operantA =0 ;
let operantB = 0;
let operator;

console.log(operate(3,"*",4));
console.log(operate(3,"-",4));
console.log(operate(3,"+",4));
console.log(operate(3,"/",4));
