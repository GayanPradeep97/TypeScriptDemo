 export interface user{
    name:string;
    age?:number;
    id:number;
    email:string;
   
   
}

let user:user = {name:'john', id:1 ,email:''}

interface Employee extends user {
    salary: number;
}

let employee:Employee = {name:'john' ,id:1 , email:'', salary:1000};

export interface Login{
    Login(): user;
}


let [user1, user2,] : user [] = [
    {name:'john', id:1 ,email:''},
    {name:'mike', id:2 ,email:''}
]
console.log(user1)
console.log(user2)