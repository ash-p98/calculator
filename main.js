const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const point = document.getElementById("point");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const negate = document.getElementById("negate");
const percentage = document.getElementById("percentage");
const display = document.querySelector("#display");

let newInput = "";
let firstNumber = "";
let secondNumber = "";

let firstOperator = "";
let newOperator = "";

let partialOutput = "";
let finalOutput = "";

operator.forEach (e => e.disabled = true);

number.forEach(item => {
    item.addEventListener("click", (e) => {
    equal.disabled = false;
    operator.forEach (e => e.disabled = false);
     if (finalOutput == "") {
        newInput = e.target.value;
        display.innerHTML += newInput;
        if(e.target.innerHTML === '.')
        point.disabled = true;     
    } else {
        display.innerHTML = ""
        finalOutput = ""
        newInput = e.target.value;
        display.innerHTML += newInput;
        if(e.target.innerHTML === '.')
        point.disabled = true;     
        }
    })
})

operator.forEach(item => {
    item.addEventListener("click", (e) => {
        point.disabled = false;
        equal.disabled = true;
        operator.forEach (e => e.disabled = true)

        if (firstNumber == "") {
            firstNumber = display.innerHTML;
            firstOperator = e.target.value;
            console.log(firstNumber)
            display.innerHTML = "";
        } else { 
            secondNumber = display.innerHTML;
            newOperator = e.target.value;
            if (firstOperator == "+") {
                partialOutput = parseFloat(firstNumber) + parseFloat(secondNumber);
            } else if (firstOperator == "-") {
                partialOutput = parseFloat(firstNumber) - parseFloat(secondNumber);
            } else if (firstOperator == "x") {
                partialOutput = parseFloat(firstNumber) * parseFloat(secondNumber);
            } else if (firstOperator == "÷") {
                partialOutput = parseFloat(firstNumber) / parseFloat(secondNumber);
            }
            firstNumber = partialOutput;
            display.innerHTML = "";
            firstOperator = newOperator;
        }
    })
})


equal.addEventListener("click", (e) => {
    if (firstNumber != "") {
        secondNumber = display.innerHTML;
        if (firstOperator == "+") {
            finalOutput = parseFloat(firstNumber) + parseFloat(secondNumber);
        } else if (firstOperator == "-") {
            finalOutput = parseFloat(firstNumber) - parseFloat(secondNumber);
        } else if (firstOperator == "x") {
            finalOutput = parseFloat(firstNumber) * parseFloat(secondNumber);
        } else if (firstOperator == "÷") {
            finalOutput = parseFloat(firstNumber) / parseFloat(secondNumber);
        }
        display.innerHTML = finalOutput;
    } else { display.innerHTML = display.innerHTML;
        }
    point.disabled = false;
    equal.disabled = true;
    firstNumber = "";
})


clear.addEventListener("click", (e) => {
    display.innerHTML = "";
    point.disabled = false;
    firstNumber = "";
    secondNumber = "";
    firstOperator = "";
    output = "";
    operator.forEach (e => e.disabled = true);
})


percentage.addEventListener("click", e => {
    point.disabled = true;
    if (display.innerHTML == "") {
        display.innerHTML = "";
    } else {
        display.innerHTML = parseFloat(display.innerHTML)/100;
    }
})


negate.addEventListener("click", (e) => {
    if (display.innerHTML == "") {
        display.innerHTML = "";
    } else {
        display.innerHTML = parseFloat(display.innerHTML)* (-1);
    }
})