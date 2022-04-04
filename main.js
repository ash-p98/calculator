const display = document.querySelector(".screen");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");
const buttonEquals = document.querySelector(".equals");
const buttonDecimal = document.querySelector(".decimal");
const buttonAC = document.querySelector(".clear");

buttonNumbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
     let num1 = number.innerHTML;
    console.log(num1);
    display.value += num1;
  });
});

const operator = buttonOperators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(operator.innerHTML);
    display.value += operator.innerHTML;
  });
});

buttonEquals.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(display.value);
  if (operator == "+") {
    console.log(num1);
  }
});

buttonDecimal.addEventListener("click", (decimal) => {
  e.preventDefault();
  console.log(decimal.innerHTML);
  display.value += decimal.innerHTML;
}); 

buttonAC.addEventListener("click", (e) => {
    e.preventDefault();
    if(display.value != ""){
        let display = "";
    };
});

let num1 = 10;
let num2 =2;  

function add (num1, num2){
    let total = 0;
    total = num1 + num2;
    return total;
}

function minus(num1, num2){
    let total = 0;
    total = num1 - num2;
    return total;
}

function multiply (num1, num2){
    let total = 0;
    total = num1 * num2;
    return total;
}

function divide (num1, num2){
    let total = 0;
    total = num1 / num2;
    return total;
}

if (buttonOperators == '+'){
    add(num1, num2);
} else if (buttonOperators == '-'){
    minus(num1, num2);
} else if (buttonOperators == '*'){
    multiply(num1, num2);
} else if (buttonOperators == '/'){
    divide(num1, num2);
}