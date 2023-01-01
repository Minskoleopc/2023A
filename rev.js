// let and const 

let x = 19
x = 100
console.log(x)


// const 

const h = 100
//h = 900
console.log(h)


// Arithmetic operator

let a = 100
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

let s = 40
let t = 20

console.log(s + t)
console.log(s - t)
console.log(s * t)
console.log(s / t)
console.log(s % t)


// function 


function cal(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
cal(12, 4)
cal(10, 2)
cal(10, 5)


// function without parameter and without return type

function addA() {
    console.log(8 + 9)
}
addA()
addA()
addA()

// function with parameter and without return type

function addB(x, y) {
    console.log(x + y)
}
addB(23, 4)
addB(23, 7)

// function with parameter and with return type

function addC(x, y) {
    return x + y
}
let q1 = addC(34, 45)
console.log(q1)
console.log(q1 + q1)
console.log(q1 - q1)

// comparison
console.log(typeof '10')
console.log(typeof 10)


console.log(7 == '7') // True
console.log(7 == 7) // True
console.log(7 === 7) // True
console.log(7 === '7') // False
console.log(7 !== '7') // True
console.log(7 !== 7) // False
console.log(7 != 7) // False
console.log(7 != '7') // False

// Logical operator

// AND -- &&

// True  && True  ---- True
// True  && False  ---- False
// False  && True  ---- False
// False  && False  ---- False


// OR - 

// True  || True  ---- True
// True  || False  ---- True
// False  || True  ---- True
// False  || False  ---- False


// NOT 
// True - False
// False - True 

console.log(5 == 55 || 8 !== '8')
console.log(5 == 5 && 8 !== '8')
console.log(5 == 5 && 8 === '8')
console.log(5 == 55 || 8 === '8')
console.log(!(6 == 3))
console.log(!(3 != 3))

// conditional statements 


let numT = 10

// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }

// if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }

// if(numT > 10){
//     console.log('20 % discount')
// }

// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }

// else if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }

// else if(numT > 10){
//     console.log('20 % discount')
// }


// tenary - operator

let a1 = 10
let a2 = 5















