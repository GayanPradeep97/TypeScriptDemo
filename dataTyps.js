"use strict";
//string
let lname;
lname = 'kumara';
let newName = lname.toUpperCase();
console.log(newName);
//number
let age;
age = 25;
let dob = '26';
let result = parseInt(dob);
console.log(result);
//boolean
let isValid = true;
console.log(isValid);
//array
let empList;
empList = ["gayan", "kumara", "shanaka"];
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let results = numList.filter((num) => num > 2);
console.log(results);
let emp = empList.find((emp) => emp = "gayan");
console.log(emp);
let c = 1 /* Color.Blue */;
//tuple
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNumbs = swapNumbers(10, 20);
//any data type
let departmant;
departmant = 'gayan';
departmant = 10;
