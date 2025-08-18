const userAge = 42;
const userName: string = "Bohdan";
const userBacalavr: boolean = true;
const userMillatary: null = null;
let value: undefined;

// userAge.split(" ");
// userName.toFixed(2);

const getFullName = (name: string, lastName: string): string => {
    const result = `${name} ${lastName}`;
    const normalizedFullName = result.trim();
    return normalizedFullName; 
}

const fullName = getFullName("Bohdan", "Liamzin");

const searchWithRegister = (str: string, searchStr: string)=> {
    const normalizedStr = str.toLowerCase();
    const normalizedSearchStr = searchStr.toLowerCase();
    return normalizedStr.includes(normalizedSearchStr);
}

const calcWeightIndex = (weight: number, height: number): number => {
    const result = weight / (height ** 2);
    return Number(result.toFixed());
}

// type User = {
//     name: string,
//     lastName: string,
//     getFullName(): string,
// };
type User = {
    name: string;
    lastName: string;
    getFullName(): string;
};

const user: User = {
    name: "Bohdan",
    lastName: "Liamzin",
    getFullName(){
        return `${this.name} ${this.lastName}`
    }
};

interface Product {
    name: string;
    description?: string;
    price: number;
    getPriceWithDiscount(discount: number): number;
};

const notebook: Product = {
    name: "Lenovo X120S",
    price: 1200,
    getPriceWithDiscount(discount){
        return this.price * (1 - discount / 100);
    } 
}

const sallaries: number[] = [1200, 3000, 2000];

const getAverageSallary = (arr: number[]): number => {
    const sum = arr.reduce((acum: number, item: number): number => acum + item);
    return Number((sum / arr.length).toFixed(0));
}

interface Address {
    country: string;
    city: string;
    street: string;
    postalCode: number;
}

interface Employee {
    name: string;
    sallary: number;
    address: Address;
}
  
const calcSallarySum = (arr: Employee[]): number =>
    arr.reduce((acum: number, item: Employee): number => item.sallary + acum, 0);

const logMessage = (message: string):void => {
    console.log(`${message}\n`);
}


