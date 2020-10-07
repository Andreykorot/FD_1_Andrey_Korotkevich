'use strict';
let arr = [2, 4, 1, 8, 1, 1, 2, 5, 8];
let resultArr = [];
resultArr.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
    if (resultArr.indexOf(arr[i]) === -1) {
        resultArr.push(arr[i]);
    }
}
console.log(resultArr);