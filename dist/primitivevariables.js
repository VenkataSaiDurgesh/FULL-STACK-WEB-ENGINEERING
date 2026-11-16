"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let eno = 101;
var sno = 201;
let price = 1000.50;
const tax = -18.5;
console.log(eno);
console.log(sno);
console.log(price);
console.log(tax);
//string type variable
let department = "CSE";
console.log(`The string value is : ${department}`);
let course = "TypeScript";
console.log(`The string value is : ${course}`);
//boolean type variable
let job = true;
let passed = false;
console.log(`The boolean value is : ${job}`);
console.log(`The boolean value is : ${passed}`);
//undefined type variable
let javamarks;
console.log(`The undefined value is : ${javamarks}`);
//null type variable
let cmarks = null;
console.log(`The null value is : ${cmarks}`);
//bigint type variable
let aadharnumber = 12345678901234567890n;
console.log(`The bigint value is : ${aadharnumber}`);
//symbol type variable
let dno = Symbol("id");
let lno = Symbol("id");
console.log(`The symbol value is : ${dno === lno}`);
//print the following details:
//sno,sname,isjobavailable,modify sno value,change the sname,
//company name is not know in advance,make sure salary is null
//the description of the eno and sno are different
//store the aadhar number
let sno1 = 301;
let sname = "Ramesh";
let isjobavailable = true;
sno1 = 302;
sname = "Suresh";
let companyname = undefined;
let salary = null;
let eno2 = Symbol("primaryid");
let sno2 = Symbol("primaryid");
let aadharnumber1 = 12345678901234567890n;
console.log(`The student number is : ${sno1}`);
console.log(`The student name is : ${sname}`);
console.log(`Is job available : ${isjobavailable}`);
console.log(`The company name is : ${companyname}`);
console.log(`The salary is : ${salary}`);
console.log(`The employee number is : ${eno2 === sno2}`);
console.log(`The aadhar number is : ${aadharnumber1}`);
//# sourceMappingURL=primitivevariables.js.map