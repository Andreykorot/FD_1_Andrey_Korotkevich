'use strict';
let arr = prompt();
let result = [];
arr = arr.split(' ');
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
  	result.push(arr[i]);
  }
}
console.log(result);