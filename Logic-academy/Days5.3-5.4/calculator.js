let numOne = document.querySelector('#num1');
let numTwo = document.querySelector('#num2');
let sumButton = document.querySelector('#sum');
sumButton.addEventListener('click', addition);
let subButton = document.querySelector('#sub');
subButton.addEventListener('click', subtraction);
let divButton = document.querySelector('#div');
divButton.addEventListener('click', division);
let multButton = document.querySelector('#mult');
multButton.addEventListener('click', multiplication);
let result = document.querySelector('div');

function addition() {
  let firstNum = parseFloat(numOne.value);
  let secondNum = parseFloat(numTwo.value);
  let sum = firstNum + secondNum;
  result.innerText = sum;
}

function subtraction() {
  let firstNum = parseFloat(numOne.value);
  let secondNum = parseFloat(numTwo.value);
  let sub = firstNum - secondNum;
  result.innerText = sub;
}

function division() {
  let firstNum = parseFloat(numOne.value);
  let secondNum = parseFloat(numTwo.value);
  let div = firstNum / secondNum;
  result.innerText = div;
}

function multiplication() {
let firstNum = parseFloat(numOne.value);
let secondNum = parseFloat(numTwo.value);
let mult = firstNum * secondNum;
result.innerText = mult;
}

