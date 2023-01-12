

console.log("hello")

// Math

console.log(Math.floor(23.4)) // 23
console.log(Math.floor(-23.4))  // -24
console.log(Math.ceil(23.4))  // 24
console.log(Math.ceil(-23.4)) // -23
console.log(Math.round(2.4)) // 2
console.log(Math.round(2.5)) // 3

console.log(Math.random()) // 0 - 1
console.log(Math.random()*6)// 0-6
console.log(Math.floor(Math.random()*6)) // 0,1,2,3,4,5
console.log(Math.floor(Math.random()*6)+1) // 1,2,3,4,5,6


// prompt function works in browser only
// let randomNumber = Math.floor(Math.random()*6)+1 // 4
// console.log(randomNumber)
// let userInput = prompt('Please guess the number') // 3
// if(randomNumber == userInput){
//     console.log("Guess is correct")
// }
// else {
//     console.log("Guess is incorrect")
// }

// Ternary operatory
//randomNumber == userInput ? console.log("Guess is correct"):console.log("Guess is incorrect")


// for loop 
// let randomNumber = Math.floor(Math.random()*6)+1 
// console.log(randomNumber)
// for(let i = 1 ; i <= 5 ; i++){
//    let userInput = prompt('Please guess the number')
//    if(userInput == randomNumber){
//         console.log('Guess is correct')
//         break;
//    }
//    else {
//         console.log("Guess is incorrect")
//    }
// }

// while loop
let randomNumber = Math.floor(Math.random()*6)+1  // 4
console.log(randomNumber)
let userInput;
console.log(userInput) // undefined
while(userInput != randomNumber){
    userInput = prompt('Guess the number') // 3 // 4
    if(userInput == randomNumber){
        console.log('Guess is correct')
        //break
    }
    else {
        console.log('Guess is incorrect')
    }
}









