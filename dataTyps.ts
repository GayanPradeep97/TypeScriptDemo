//string
let lname:string;

lname ='kumara';

let newName = lname.toUpperCase();

console.log(newName);



//number

let age:number;

age = 25;

let dob = '26';

let result = parseInt(dob);
console.log(result)


//boolean
let isValid : boolean = true;

console.log(isValid);


//array

let empList : string[];

empList = ["gayan", "kumara", "shanaka"];

let numList: number[];

numList = [1,2,3,4,5,6,7,8,9];

let results =numList.filter((num) => num > 2);

console.log(results);

let emp = empList.find((emp) => emp="gayan");
console.log(emp);



//enum
const enum Color{
    Red,
    Blue,
    Green
}

let c: Color = Color.Blue;


//tuple
let swapNumbs: [firstNumbera:number,secondNumber:number];

function swapNumbers(num1:number, num2:number) : [number,number]{
    return [num1,num2]
}

swapNumbs = swapNumbers(10,20);



//any data type

let departmant;

departmant = 'gayan';
departmant = 10;