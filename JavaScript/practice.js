//practice 01 print even numbers
for (let i = 0; i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//  Guess the correct number

// let gameNum = 25;

// let userNum = prompt("Enter the correct number : ")

// while (gameNum != userNum){
//     userNum = prompt("You entered the wrong number please try again")
// }
// console.log("Congratulations !!")


// Strings 

let str = "Narsimha"
console.log(str.length)
console.log(str[0])

// template litrals is  a special type of string
let specialString = `This is special string used backtricks !!`
console.log(specialString)

// why used backticks for example follow below code

let obj ={
    pen:"penteck",
    price:10
}
console.log("The pen is" , obj.pen, "And the price is ", obj.price);

// here above code we print the pen and its price in sparted stings info insted of we can implememt in
// single string using the backticks follow the below example for that 
let output = `the pen is ${obj.pen} and its price is ${obj.price} ruppes`
console.log(output) // ${} this is called the string interpolation

// escape charater gives the new line in output
console.log("Narsimha \n chellabin") // new line
console.log("Narsimha \t chellabin") // new tab space


// string Methods
// These are the built-in dunctions that are manupulated the string

let nameX = "   narsimha chellaboina  "
console.log(nameX.toUpperCase())
console.log(nameX.toLowerCase())
console.log(nameX.trim()) // remove starting and ending spaces 

let user_name = "Narsimha"
console.log(user_name.slice(0,3))

console.log(nameX.concat(user_name)) // concantation

let word = "hello";
console.log(word.replace("h","y")) // with replace we can replace one time if you want to do it all then you use
// word.replaceAll()
console.log(word.charAt(0));// what character is present at index 0.


let username = prompt("Please enter your name : ")
let username_legth = user_name.length
console.log(username_legth)
let new_username = `@${user_name}${username_legth}`
console.log("newusername = ",new_username)