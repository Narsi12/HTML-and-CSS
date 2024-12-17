function test(){
    console.log("Test function")
}
test()
//-----------------------------------------------------------------------------------
function msg(text){
    console.log(text)
}
msg("First time writing msg in javascript")
//---------------------------------------------------------------------------------------
function sum_values(a,b){ // parms are local scope which is accessed inside the function only
    return a+b
}
console.log(sum_values(10,20))

//-----------------------------------------------------------------------------
// Arrow function

const sum = (a,b) => {
    return a+b
}
console.log(sum(1998,2000))

//-------------------------------------------------------------------------------
// function returns the vowles

function vowelsCode(string) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of string) {  
        if (vowels.includes(char)) { // Check if the character is in vowels
            count++;
        }
    }

    return count;
}

console.log(vowelsCode("Narsimha")); // Output: 3

//-----------------------------------------------------------------------------
// for each method

let arr = [10,20,30,4,0,50,60]

arr.forEach(function printVal(val){
    console.log(val)
})

arr.forEach((val) =>{
    console.log("val = ", val)
})
//---------------------------------------------------------------------------------
// higher order function and higer order method where we can call "FOR EACH "

// square a every number using the forEach

let data_vals = [10,20,30,40]

data_vals.forEach((val) =>{
    let x = val**2
    console.log("square vales = ",x)
})
//------------------------------------------------------------
// here user the call back function
let nums =[10,20]
let calculate = (num) =>{
    console.log(num*num)
}
nums.forEach(calculate)
//-----------------------------------------------------------------

// MAP method is similar to forEach

let newArr = [10,20,30,40]

newArr.map(
    (i) =>{
        console.log(i*2)
    }
)
//-------------------------------------------------------------------------
// filter the values 
let narsimha = newArr.filter((val)=>{return val%2 === 0 })
console.log(narsimha)

// -------------------------------------------------------------------------

// reduce the values into a sum
let ch = [1,2,3,4]
const res_data = ch.reduce((res,curr)=>{ // current will shift the index values and res will update line by line
    let x= res+curr;
    return x
})
// at startin res will have the 1 like res = 1, curr = 1 , 1+1 = 2, 
// now res = 2 and curr = 2 , 2+2 = 4
// now res = 4 and curr = 3, 4+3 = 7
// now res = 7 and curr = 4 , 
console.log(res_data)

// print largest values in array

const narsimha_ch = ch.reduce((prev,curr) =>{
    return prev > curr ? prev : curr
})

console.log(narsimha_ch)
