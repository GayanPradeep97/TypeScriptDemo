
// one way to write function
function add(num1:number , num2:number){
    return num1 + num2 ;
}

console.log(add(3,4));



// another way to write function(arro function)
const sub = (num1:number, num2:number ): number => num1 - num2;

console.log(sub(9,4));


// another way to write function(arro function2)

const mult = function (num1:number, num2:number){
    return num1*num2;
};

console.log(mult(5,2))


//another option

function add2(num1:number, num2:number,...num3:number[]) :number{
    return num1 + num2 + num3.reduce((a,b) => a+b)
}

let numbers = [1,2,3,4,5]
console.log(add2(2,3,4,5,6,7,8,9,10))



//------------------
function getItems<type>(items: type[]) : type[]{
    return new Array<type>().concat(items);
}

let concatNumbers = getItems<number>([1,2,3,4,5]);
let concatString = getItems<string>(["1","2","3"]);