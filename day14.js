// //              0         1       2      3        4
// let names = ["chinmay","sarika","ram","poorva","satish"]
// let numbers = [22,33,44,55,66,77,88,99,10]
// let info = ["chinmay","deshpande",7709192441,true]

// console.log(names[0])
// console.log(names[1])
// console.log(info)

// // ----------- Looing  to print element of array 

// //             0        1        2       3
// let cities = ["pune","mumbai","nagpur","wardha"]
// console.log(cities[0])

// for(let i = 0 ; i <= 3 ; i++){ // 1 // 2 // 3
//    // console.log(i) // 0 , 1 , 2 , 3
//     console.log(cities[i])
//     // 1st i = 0 
//     // 2nd i = 1
//     // 3rd i = 2
//     // 4th i = 3
// }


// // Javascript object 
// // Array - Object 
// // Object Property and Method


// // Property Lenngth 
// //               0         1          2          3
// let country = ["India","Pakistan","Srilanka","Bangladesh"]
// console.log(country.length)
// console.log(country.length - 1)
// for(let i = 0 ; i < country.length ; i++){
//     //console.log(i)
//     console.log(country[i])
// }

// // Methods 
// // Action
// // Return type


// // push()
// // action - adds the element the last 
// // return - new length of array
// //              0           1         2            3
// let vegetables = ["cabbage","brinjal","cauliflower","tomato"]
// console.log(vegetables)
// let q1 = vegetables.push("ladyfinger")
// console.log(q1)
// console.log(vegetables)

// // unshift()
// // action -- add the element at start of array
// // return - new length of array 

// let q2 = vegetables.unshift('carrot')
// console.log(q2)
// console.log(vegetables)


// // pop()
// // action - removes the last element 
// // return - returns the same
// //              0       1        2        3
// let fruits = ["apple","mango","banana","grapes"]
// console.log(fruits)
// let q3 = fruits.pop()
// console.log(fruits)
// console.log(q3)

// // shift()
// // action - removes the first element 
// // return -first element 

// let q4 = fruits.shift()
// console.log(q4)
// console.log(fruits)

// //  4 method
// // push() - new length
// // unshift() - new length
// // pop() - returns last element
// // shift() - returns first element

// // includes()
// // action - search for element 
// // return - boolean value
// let animals = ["tiger","lion","panthar","rabbit"]
// let q5 = animals.includes("Tiger")
// let q6 = animals.includes("tiger")
// console.log(q6)
// // reverse()
// let q7 = animals.reverse()
// console.log(q7)

// // indexOf()
// //               0    1   2   3   4    5
// let numberss = [555,666,777,8888,9999,8888]
// console.log(numberss)
// let q8 = numberss.indexOf(666)
// let q9 = numberss.indexOf(10000)
// console.log(q8)
// console.log(q9)

// // join()
// let infoB = ["chinmay","deshpande",7709192441]
// let q10 = infoB.join(' ') // "chinmay-deshpande-7709192441"
// console.log(q10)
// console.log(typeof q10)


// program 1
//                0    1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = []  // [34,33,32,31]
// [34,33,32,31]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let age = 2023 - birthYear[i] // 34
    ages.push(age)

}
console.log(ages)

// program 2

let age  = [11,22,33,44,22,33,44,55,66,77]
// [44,55,66,77]
let above40 = [] // [44,44,55,66,77]
let below40 = []

for(let i = 0 ; i < age.length ; i++){
    //console.log(i)
    //console.log(age[i])
    if(age[i] > 40){
        above40.push(age[i]) 
    }
    else {
        below40.push(age[i])
    }
}
console.log(above40)
console.log(below40)

// program3 

let addition = [11,22,33] // 66
let total = 0

for(let i = 0 ; i < addition .length ; i++){
    // console.log(i)
    // console.log(addition[i])
    total = total + addition[i]
    //       0    +  11 ========> 11
    //       11   +  22 ========> 33
    //       33   +  33 ========> 66
}
console.log(total)

// program 4

let namesA = ["chinmay","sarika","sameer","satish","sanket"]

for(let i = 0 ; i < namesA.length ; i++){
    // console.log(i)
    // console.log(namesA[i])
    console.log("welcome "+ namesA[i])
}

// program 1







