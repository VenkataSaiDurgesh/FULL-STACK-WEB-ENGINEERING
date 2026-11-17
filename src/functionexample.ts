
// 1. Function without parameters and without return type
function display(): void {
    console.log("Display function");
}
display(); // Function calling


// 2. Function with parameters and without return type
function display1(message: string): void {
    console.log(`The given message: ${message}`);
}
display1("Welcome"); // Correct function call


// 3. Function with two parameters and return type
// Find the sum of two numbers
function sum(a: number, b: number): number {
    let s = a + b;
    return s;
}

console.log("The sum is:", sum(3, 4));
console.log("The sum is:", sum(1, 2));


// 4. Function with parameters and return type
// Read two strings and return the message
function messagefunction(s1: string, s2: string): string {
    let s3: string = s1 + " " + s2;
    return `The string is: ${s3}`;
}

let s4: string = messagefunction("Welcome", "to TypeScript");
console.log(s4);


// 5. Example: Function with parameters and return type
function sum1(a: number, b: number): number {
    let c = a + b;
    return c;
}

let d: number = sum1(4, 5);
console.log(d);
//write a function to take the following
//eno,ename,esal,dept


// Function without parameters and without return type
function displayEmployeeInfo(): void {

    let eno: number = 1001;
    let ename: string = "teja";
    let esal: number = 50000;
    let dept: string = "IT";
    let isHike: boolean = true;

    console.log(`Employee number is ${eno}`);
    console.log(`Employee name is ${ename}`);
    console.log(`Employee salary is ${esal}`);
    console.log(`Employee department is ${dept}`);
    console.log(`Employee is eligible for hike: ${isHike}`);
}
//function with  parameter and  no return type for employee details
function employee1(eno:number,ename:string,dept:string,salaryHike:number):void{
    console.log(`Employee number is ${eno}`);
    console.log(`Employee name is ${ename}`);
    console.log(`Employee department is ${dept}`);
    console.log(`Employee salary hike is ${salaryHike}`);
    
}
employee1(101,"Sriram","IT",10);
employee1(102,"Nanasaheb","HR",15);
employee1(103,"Pavanhari","Finance",20);

//function with  parameter and  return type for employee details
function employee2(eno:number,ename:string,dept:string,salary:number,isHike:boolean):string{
    return `Employee number is ${eno}, Employee name is ${ename}, Employee department is ${dept}, Employee salary is ${salary}, Employee has hike: ${isHike}`;
}
let msg:string=employee2(101,"raj","hr",230000,true);
console.log(msg);

//function with optional parameters
function disp2(s1:string,s2?:string):void{
    console.log(`the data is :${s1}${s2}`);
}
disp2("Klu","University");
disp2("KLU");
//function with defualt values
function display4(a:number,b:number,c:number=100):void{
    console.log(`a,b,c values are:${a},${b},${c} `);

}
display4(1,2,3);
display4(1,4);
// arrow function
//Arrow Functions
let display00 = (): void => {
    console.log("Welcome");
};
display00();