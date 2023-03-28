"use strict";
// one way to write function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(3, 4));
// another way to write function(arro function)
const sub = (num1, num2) => num1 - num2;
console.log(sub(9, 4));
// another way to write function(arro function2)
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(5, 2));
//another option
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, 4, 5, 6, 7, 8, 9, 10));
//------------------
function getItems(items) {
    return new Array().concat(items);
}
let concatNumbers = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["1", "2", "3"]);
