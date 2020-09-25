'use strict'
let numOne = prompt();
let operation = prompt();
let numTwo = prompt();
numOne = Number(numOne);
numTwo =  Number(numTwo);
if (operation === '+') {
    alert(numOne + numTwo)
}
if (operation === '-') {
    alert(numOne - numTwo)
}
if (operation === '*') {
    alert(numOne * numTwo)
}
if (operation === '/') {
    alert(numOne / numTwo)
}