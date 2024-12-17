// Types of variable

/*   
var = which is used to re-declared and update the value , its a global scope
   ---> Accroding to the es2015 we dont is use the var keyword.
   var age = 12
   var age = 21
   var age = 97  // every time it will take the new value its not a standar rule
  
let = can not re-declared but update the value , block scope variable
const = can not re-declared and not update the value , block scope variable.

scope = Is a block of code mainly used in functions
*/


// variables declartion
console.log("Hello Narsimha");
full_name = "Narsimha Chellaboina";
is_active = true
let age = 29
const information = "Backedn developer"
console.log(full_name+age+is_active+" "+information)
let value = 23
let price = 24.12
let myname = "Narsimha"

// data type below one's are primitive data types
let datatype = "Number , string, Boolean, undefined, Null, BigInt, Symbol"
let person_age = 24
let school_name = "ZPHS"
let isAllowed = true
let x; // undefined
let grade = null ; // null it self is object that represents the intentional absence of any object value.
let sum = BigInt("123")
let marks = Symbol("Hello!")

// Non - Primitive data type are 
/*  
Objects (arrays,functions) both will come under objects category.
Objctes are the collection of values just like an Dictonary 
{
age : 24, name:"Narsimha",role:"Backed"
}
we use the const & let variable to declare the objects
arrays
functions

*/

const student = { // objects
    FullName: "Narsimha",
    age: 24,
    Isworking: true,
    Income: "10 LPA"
};
student["age"] = student["age"] +5
console.log(student["Income"])
console.log(student.age)


// control statements
let your_age = 18
if (your_age > 18){
    console.log("You can vote")
}else{
    console.log("Your not eligible")
}



let mode = "dark";
let color;

if (mode == "dark"){
    color = "Black"
}else if(mode == "light"){
    color = "white"
}else{
    color = null
}
console.log(color)

let number = 29

if (number%2 == 0){
    console.log("Even num")
}else if(number%2 !=0){
    console.log(
        "Odd number"
    )
}else{
    console.log("Check number")
}




// for loops
for(count = 1 ; count<=5;count++){
    console.log("Narsimha");
}

// sum of numbers 1 to n
let sum_val = 0
for(let i = 1; i<=5;i++){
    // sum_val+=i
    sum_val = sum_val+i
}
console.log(sum_val,"*****")


// while loop condition at the start of the loop
let i = 1
while(i<=5){
    console.log("i = ",i);
    i++;
}

// do while loop will excute and condition will check at the end.at least run at 1 time

let j = 1;
do{
    console.log("Apna college");
    i++;
}while(i<=10)

// for-of loop will help us iterarte on Strings and Arrays, value will come automatically and updatation will 
// also done automatically

let str = "NArsimhachellaboina";
for (let i of str){
    console.log("i= ",i);
}


let teacher = {
    name : "Narsimha",
    age:24,
    slaray:300000,
    subject:"Computer science",
    isAvalibale:true
};

// It will return the keys of every object
for(let key in teacher){
    console.log("key=", key, "val=", teacher[key] )
}

