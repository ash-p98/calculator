"use strict";

var display = document.querySelectorAll(".screen");
console.log(display);
var buttonNumbers = document.querySelectorAll(".number");
console.log(buttonNumbers);
var buttonOperators = document.querySelectorAll(".operator");
console.log(buttonOperators);
buttonNumbers.forEach(function (number) {
  number.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.value);
  });
});
buttonOperators.forEach(function (operator) {
  number.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target.value);
  });
});