var eno:number=101;
console.log(eno);
console.log(`Employee number is : ${eno}`);
var eno:number=102;//reintializing the variable eno
console.log(`updated Employee number is : ${eno}`);
eno=103;//reassigning the value to the variable eno
console.log(`updated reassigned Employee number is : ${eno}`);

let univ:string="KL University";
//let univ:string="KLef";//not allowed to reinitialize the variable univ
univ="KL University of Engineering";//allowed to reassign the value to the variable univ
console.log(`Updated University name is : ${univ}`);

const ename:string="Ravi";
//const ename:string="Ramesh";//not allowed to reinitialize the variable ename
//ename="Ramesh";//not allowed to reassign the value to the variable ename
console.log(`Employee name is : ${ename}`);