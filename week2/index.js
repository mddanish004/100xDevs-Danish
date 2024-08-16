
const fs = require('fs');
const express = require('express');

function callbackFn(err, data) {
    console.log(data);
    
}

fs.readFile('data.txt', 'utf8', callbackFn);

// function CalculateSum(counter) {
//     var sum = 0;
//     for (var i = 0; i < counter; i++) {
//         sum += i;
//     }
//     return sum;
// }

// var CalculateSum = CalculateSum(100);
// console.log(CalculateSum);