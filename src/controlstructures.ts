let age:number=25;
if(age>=18){
    console.log("You are eligible to vote");
}
//if-else statement
let marks:number=75;
if(marks>=90){
    console.log("Grade A");
}
else{
    console.log("Grade D");
}
//if-else-if ladder
let number:number=10;
if(number>0){
    console.log("The number is positive");
}
else if(number<0){
    console.log("The number is negative");
}
else{
    console.log("The number is zero");
}
//nested if 
let num:number=15;
if(num>0){
    if(num%2==0){
        console.log("The number is positive and even");
    }
    else{
        console.log("The number is positive and odd");
    }       
}
//switch statement
let day:number=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
//useing if-eles-if
//take a string array.If the length of the array is less than 2-->display short
//if the length of the array is more than 2 and less than 4-->display small
//if the length of the array is more than or equal to 4-->display large
//use switch for this problem
let strArray:string[]=["apple","banana","cherry","date","berry","starfruit"];
let l=strArray.length;
if(strArray.length<2){
    console.log("short");
}
else if(strArray.length>2 && strArray.length<4){
    console.log("small");
}
else if(strArray.length>=4){
    console.log("large");
}
else{
    console.log("Invalid");
}
switch(l){
    case 0:if(strArray.length<2){
        console.log("short");
    }
    break;
    case 1:if(strArray.length>2 && strArray.length<4){
        console.log("small");
    }
    break;
    case 2:if(strArray.length>=4){
        console.log("large");
    }
    break;
    default:console.log("length of the array is high");
}
//for loop
let subjects:string[]=["java","typescript","react","nextjs","nodejs"];
for(let i=0;i<subjects.length;i++){
    console.log(i);
    console.log(subjects[i]);
}
//for-of loop
for(let subject of subjects){
    console.log(subject);
}
