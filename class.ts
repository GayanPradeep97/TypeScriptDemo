import { Login, user} from './interface';

interface Address{
    street:string;
    city:string;
    state:string;
    pin:string;
}



class Employee implements Login{

    #id!: number;
    name!: string;
    address!:Address;
    

    get empId(): number{
        return this.#id ;
    }

    set empId(id:number) {
       this.#id =id; 
    }

    static getEmployeeCount() : number {
        return 50;
    }


    //constructor create
    constructor(id:number, name:string, address:Address){
        this.#id = id;
        this.name = name;
        this.address =address;
    }


    Login(): user {
        return {name:'john', id:1 ,email:''};
    }

    //method
    getAddressWithName() :string {
        return `${this.name} stays at ${this.address}`;
    }
} 

let john = new Employee(1, 'gayan',{
    street:'ABC',
    city:'Banglore',
    state:'kandy',
    pin:'123654'
});

john.empId = 100;

console.log(john.empId)

let printThis = john.getAddressWithName();



// john.id =1;
// john.name = 'john';
// john.address = 'highway 71';

console.log(printThis)



//chiled class
class manager extends Employee {

    constructor(id: number, name:string, address:Address){
        super(id, name, address)
    }

    getNameWithAdrress() : string {
        return `${this.name} ${this.address}`;
    }
}

// let mike =new manager(1, 'mike', 'kandy');

// let printt = mike.getNameWithAdrress();

// console.log(printt);