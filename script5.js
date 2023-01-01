
// conditional 

// 1 input multiple output



//numberT > 0 && numberT <= 5  // 5 % discount
//numberT > 5 && numberT <= 10  // 10 % discount
//numberT > 10  // 20 % discount

let numT = 43

// if(numT > 0  && numT <= 5){
//     console.log('5 % discount')
// }
// if(numT > 5  && numT <= 10){
//     console.log('10 % discount')
// }
// if(numT > 10){
//     console.log('20 % discount')
// }

// if(numT > 0  && numT <= 5){
//     console.log('5 % discount')
// }
// else if(numT > 5  && numT <= 10){
//     console.log('10 % discount')
// }
// else if(numT > 10){
//     console.log('20 % discount')
// }

let marks = 72
// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 80){
//     console.log('Grade B')
// }
// if(marks > 70){
//     console.log('Grade C')
// }


// if(marks > 90){
//     console.log('Grade A')
// }
// else if(marks > 80){
//     console.log('Grade B')
// }
// else if(marks > 70){
//     console.log('Grade C')
// }


// if else 
let a  = 10
let b = 50 

// if(a > b ){
//     console.log('a is greater')
// }
// else {
//     console.log('b is greater')
// }


let a1 = 100
let b1 = 500 
let c1 = 2500

if(a1 > b1 && a1 > c1){
    console.log('a1 is greater')
}
else if( b1 > a1 && b1 > c1){
    console.log('b1 is greater')
}
else {
    console.log("c1 id greater")
}


let x = 100
let y = 500
// if(x > y){
//     console.log('x is greater')
// }
// else {
//     console.log('y is greater')
// }

// ternary operator
x > y ? console.log('x is greater'):console.log('y is greater')
let age = 17
let q1 = age >= 18 ? "can drive":"cannot drive"
console.log(q1)

// friday sat 