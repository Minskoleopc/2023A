// comparison operator
// <, > , <= , >= , == , != , == , !== ,=== 
// === , !== (value and type )
// == != (only value)

console.log(typeof 10) // number
console.log(typeof '10') // string 


console.log(4 < 3)// False
console.log(4 == 3) // False
console.log(4 > 3) // True
console.log(4 != 3) // True
console.log(4 <= 3) // False
console.log(4 >= 3) // True
console.log(4 == 3) // False
console.log(4 < 3) // False
console.log(4 == '4') // True
console.log(4 === '4') // False
console.log(4 === 4) //True
console.log(4 !== 4)  // False
console.log(4 !== '4') //True

// Logical operator 

// AND &&

// True  && True  ===> True 
// False && True  ===> False
// True  && False ===> False
// False && False ===> False

console.log(7 === 7 && 8 === 8)
console.log(7 !== 7 && 8 !== '8')
console.log(8 !== '8' && 7 === '7')
console.log(7 > 8 && 7 >= 9)

// OR ||

// True  || True  ===> True 
// False || True  ===> True
// True  || False ===> True
// False || False ===> False

console.log(7 === 7 || 8 === 8)
console.log(7 !== 7 || 8 === 8)
console.log(7 === 7 || 8 !== 8)
console.log(7 !== 7 || 8 !== 8)

// NOT !
// True - False
// False - True
console.log(!(9 !== '9'))
console.log(!(9 === '9'))


// Conditional statements 

// numT > 0 && numT <=5   ====> 5%
// numT > 5 && numT <=10  ====> 10%
// numT > 10              ====> 20 %

// if(condition){

// }


let numT = 11

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











