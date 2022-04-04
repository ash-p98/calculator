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
  let calculationArray = display.value.split("");
  console.log(calculationArray);
  if (calculationArray[1] == '+'){
    add(num1, num2);
} else if (calculationArray[1] == '-'){
    minus(num1, num2);
} else if (calculationArray[1] == '*'){
    multiply(num1, num2);
} else if (calculationArray[1] == '/'){
    divide(num1, num2);
}
});

buttonDecimal.addEventListener("click", (decimal) => {
  e.preventDefault();
  console.log(decimal.innerHTML);
  display.value += decimal.innerHTML;
}); 

buttonAC.addEventListener("click", (e) => {
    e.preventDefault();
        display.value == "";
    });

let num1 = 10;
let num2 =2;  

function add (num1, num2){
    let total = 0;
    total = num1 + num2;
    display.value =+ total;
}

function minus(num1, num2){
    let total = 0;
    total = num1 - num2;
    display.value =+ total;
}

function multiply (num1, num2){
    let total = 0;
    total = num1 * num2;
    display.value =+ total;
}

function divide (num1, num2){
    let total = 0;
    total = num1 / num2;
    display.value =+ total;
}
