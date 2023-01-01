//let  and const

let balance = 0
console.log(balance)
balance = 800
console.log(balance)

// const 

const i = 900
console.log(i)
//i = 9000

// Arithmetic operator 
// + , - , * , / ,%


let a = 1000
let b = 500

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(22%7) // 1

let s = 3000
let t = 1500

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// 10 pair DRY


function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,6)
Calculator(120,60)


// Basic functions 
// function without parameter and without return type 
function Addition(){
    console.log(9+9)
}
Addition()
Addition()
Addition()
Addition()

// function with parameter and without return 
function AdditionB(x,y){
    console.log(x+y)
}
AdditionB(12,3)
AdditionB(120,3)
AdditionB(120,30)

// function with parameter and with return type 
// 100 show
// 100 given 

function AdditionC(x,y){
    return x + y
}
let q1 = AdditionC(1,3)
console.log(q1) // 4
console.log(q1 + q1)
console.log(q1 * 0.4)
console.log(q1 - 4)

// 100 
// fn ---- discount   --- 90
// payment fn -- 90


// Type 

// Introvert      |  Extrovert
// calm           //  loud
// speaks less    // speaks more  
// less outing    // outing 


// Human  - type 
// Property - age , gender , height , weight , color
// Method  -  talk() , walk()

// Vehicle 
// Property - color , type , regNo , modelNo
// Method - start(), stop()

// Bank - 
// Property - bankAcc , type ,bal ,IFSC code
// Method - withdrawl() , deposit()

let x1 = 10 // Number -- 12.3,0,-89,77
console.log(x1)
console.log(typeof x1)

let x2 = true
console.log(x2)
console.log(typeof x2) // true or false

let x3 = "chinmay"
console.log(x3)
console.log(typeof x3) // "chi", "chin12" , "chin3@", "A" , " "


// Comparison operator
// < , > , <= , >= , != , == ,=== , !==
console.log(typeof '10') // string
console.log(typeof 10) // number

