"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let marks = [90, 80, 70, 60, 50];
console.log(marks);
console.log(marks[4]);
//declare array of student names and print the information
let studentNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(`The student names are : ${studentNames}`);
console.log(`The third student name is : ${studentNames[2]}`);
console.log(studentNames[6]); //undefined because the index 6 is out of bounds
//push() method
marks.push(40);
console.log(`The updated marks are : ${marks}`); //[90,80,70,60,50,40]
marks.push(30, 20, 10);
console.log(`The updated marks are : ${marks}`); //[90,80,70,60,50,40,30,20,10]
//unshift()method -add the element at the beginning of the array
marks.unshift(100, 110, 120, 130);
console.log(`The updated marks are : ${marks}`); //[130,120,110,100,90,80,70,60,50,40,30,20,10]
//pop() method -remove the last element from the array
let a = marks.pop();
console.log(`The removed element is : ${a}`);
console.log(`The updated marks are : ${marks}`); //[130,120,110,100,90,80,70,60,50,40,30,20]
//shift() method -remove the first element from the array
let b = marks.shift();
console.log(`The removed element is : ${b}`);
console.log(`The updated marks are : ${marks}`);
//length property
console.log(`The length of the marks array is : ${marks.length}`);
//splice() method -remove elements from the array
marks.splice(1, 0, 10); //go to first postion ,do not remove any element and add 10
console.log(`The updated marks are : ${marks}`);
let departments = ["CSE", "ECE", "CIVIL"];
departments.splice(1, 0, "MECH"); //go to second position and add MECH
console.log(`The updated departments are : ${departments}`);
departments.splice(2, 0, "EEE", "AI&DS"); //go to second position and add EEE and AI&DS
console.log(`The updated departments are : ${departments}`); //{CSE,MECH,ECE,EEE,AI&DS,CIVIL}
departments.splice(2, 2, "EIE"); //go to second position and remove 2 elements and add EIE
console.log(`The updated departments are : ${departments}`); //{CSE,MECH,EIE,CIVIL}
departments.splice(2, 3); //delete 3 elements from second position
console.log(`The updated departments are : ${departments}`); //{CSE,MECH}
departments.splice(-2, 0, "EIE"); //go to second last position and add EIE and remove 0 elements
console.log(`The updated departments are : ${departments}`); //{CSE,EIE,MECH}
departments.splice(0, 0, "KLU"); ////go to first position and add KLU and remove 0 elements
console.log(`The updated departments are : ${departments}`); //{KLU,CSE,EIE,MECH}
//EXAMPLE ON SPLICE METHOD
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
//perform possible operations using splice method
names.splice(2, 0, "Frank"); //go to second position and add Frank
console.log(`The updated names are : ${names}`);
names.splice(1, 1, "Grace"); //go to first position and remove Bob and add Grace
console.log(`The updated names are : ${names}`);
names.splice(3, 2); //go to third position and remove 2 elements
console.log(`The updated names are : ${names}`);
names.splice(-1, 0, "Heidi");
console.log(`The updated names are : ${names}`);
//slice() method -extract elements from the array
names.slice(0, 3); //from 0th index to 3rd -1=2nd index
console.log(names);
names.slice(1, 2); //from 1st index to 2nd -1=1st index
console.log(names);
names.slice(-2, 1); //from 2nd last index to 1st index -1=0th index
console.log(names);
let unive = ["KLU", "JNTU", "VIT", "IIT"];
//try extact klu only
unive.slice(0, 1);
console.log(unive);
//try extact JNTU and VIT
unive.slice(1, 3);
console.log(unive);
//extract jntu and vit from the last
unive.slice(-3, 2);
console.log(unive);
//extract all the elements from the array
unive.slice(0);
console.log(unive);
//# sourceMappingURL=arraysexample.js.map