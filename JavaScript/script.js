let marks = [12,3,45,67,99]
let names = ["Narsimha","Mahesh","Sai","Ganesh","Ashok"]

console.log(marks)
console.log(marks.length)

// for loop
// for(let i = 0 ; i< names.length; i++){
//     console.log(names[i])
// }

// for of loop

for (let el of names){
    console.log(el.toUpperCase())
}

let Avg = [85,97,44,37,76,60]

let sum = 0

for(let el of Avg){
    sum+=el
}
console.log(sum/Avg.length)

let vals = [250,645,300,900,50]

// let newArray = []

// let newV = 0
// for(let i of vals){
//     let offer = i*0.10;
//     newval = i-offer
//     vals[newV] = newval
//     newV++
//     // newArray.push(newval);
// }
// console.log(vals)

console.log("--------------------------------")

for(let i=0; i<vals.length;i++){
    let data = vals[i]/10
    let offer = vals[i] - data
    vals[i] = offer
}
console.log(vals)

let foodItems = ["apple","mango","letchi"]

foodItems.push("Banana","Pizza")

console.log(foodItems)

let deletedItems = foodItems.pop()
console.log(deletedItems)
console.log(foodItems.toString())

let heros = ["Narsimha"]

let myArray = [2,3,55,6,77,87,99]
myArray.splice(2,1,1998)
myArray.splice(2,0,2000)
console.log(myArray)