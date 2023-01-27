
// string stores the valu by index

let firstName = "chinmay"
let lastName = `dehspande`
let middle = 'shirish'

console.log(firstName[0]) 
console.log(firstName[1])
// 0 1 2 3 4 5 6
// c h i n m a y

// String ---- object 

let city = 'pune'

// 0 1 2 3
// p u n e

console.log(city[0])

let city2 = 'chandrapur'
// 0    1    2     3     4    5    6     7    8    9
// c    h    a     n     d    r    a     p    u    r
console.log(city2[0])
// Object -- property and method
// Method action and return type 

for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
}


// Method 
// toUpperCase()
let city4 = "jaipur"
let q1 = city4.toUpperCase()
console.log(q1)

let city5 = "GOA"
let q2 = city5.toLowerCase()
console.log(q2)

let city6 = "nagpur"
let q3 = city6.includes('N')
let q4 = city6.includes('n')
let q5 = city6.includes('nag')
let q6 = city6.includes('UR')
console.log(q3)
console.log(q4)
console.log(q5)
console.log(q6)


let city7 = "Raipur" 
// 0   1  2   3   4   5
// R   a  i   p   u   r

let q7 = city7.indexOf('a')
let q8 = city7.indexOf('A')
console.log(q7)
console.log(q8)


let city8 = "udaipur"
let q9 =city8.startsWith('uda')
let q10 =city8.startsWith('u')
let q11 =city8.startsWith('I')
console.log(q9)
console.log(q10)
console.log(q11)

let city9 = "wardha"
let q12 = city9.endsWith('a')
let q13 = city9.endsWith('dha')
let q14 = city9.endsWith('Dha')
console.log(q12)
console.log(q13)
console.log(q14)

let city10 = "kanpur"
let q15= city10.charAt(2)
console.log(q15)