let eno:number=101;
var sno:number=201;
let price:number=1000.50;
const tax:number=-18.5;
console.log(eno);
console.log(sno);
console.log(price);
console.log(tax);  

//string type variable
let department:string="CSE";
console.log(`The string value is : ${department}`);
let course="TypeScript";
console.log(`The string value is : ${course}`);

//boolean type variable
let job:boolean=true;
let passed:boolean=false;
console.log(`The boolean value is : ${job}`);
console.log(`The boolean value is : ${passed}`); 

//undefined type variable
let javamarks:undefined;
console.log(`The undefined value is : ${javamarks}`);

//null type variable
let cmarks:null=null;
console.log(`The null value is : ${cmarks}`);

//bigint type variable
let aadharnumber:bigint=12345678901234567890n;
console.log(`The bigint value is : ${aadharnumber}`);

//symbol type variable
let dno:symbol=Symbol("id");
let lno:symbol=Symbol("id");
console.log(`The symbol value is : ${dno===lno}`);


//print the following details:
//sno,sname,isjobavailable,modify sno value,change the sname,
//company name is not know in advance,make sure salary is null
//the description of the eno and sno are different
//store the aadhar number
let sno1:number=301;
let sname:string="Ramesh";
let isjobavailable:boolean=true;
sno1=302;
sname="Suresh";
let companyname:string|undefined=undefined;
let salary:number|null=null;
let eno2:symbol=Symbol("primaryid");
let sno2:symbol=Symbol("primaryid");
let aadharnumber1:bigint=12345678901234567890n;
console.log(`The student number is : ${sno1}`);
console.log(`The student name is : ${sname}`);
console.log(`Is job available : ${isjobavailable}`);    
console.log(`The company name is : ${companyname}`);
console.log(`The salary is : ${salary}`);
console.log(`The employee number is : ${eno2===sno2}`);
console.log(`The aadhar number is : ${aadharnumber1}`);
