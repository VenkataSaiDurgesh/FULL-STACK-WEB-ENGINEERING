//tuples will store the data in the format we specify.
//syntax:
//let varname:[datatype1,datatype2,..]=[value1,value2,.....];
//ex:
let t:[number,string,boolean]=[1,"Klu",true];
console.log(t);
let t1:[number,string];
t1=[1,"cse"];
console.log(t1);
let t2:[boolean,string,number];
//t2=["cse",true,101];//error order of valuse 
t2=[true,"cse",101];
console.log(t2);
//acces the elements of tuples :like array with indices
console.log(t2[1]);
//example:wrtie a function to pass a tuples and display the tuple
let student:[number,string,number];
student=[101,"raj",78];
function studentinfo(s:[number,string,number]):void
{
    console.log(s);
}
studentinfo(student);
