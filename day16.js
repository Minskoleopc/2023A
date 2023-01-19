let n = [11,22,33,44,55]
// [13,24,35,46,57,68,79]
let s = n.map(function(el,index,arr){
    return el + 2
})
console.log(s)

let birthYear = [1989,1990,1991,1992]
let ages = birthYear.map(function(el,index,array){
    return 2023 - el
})
console.log(ages)

// program 2
let numbers = [22,33,44,55,22,33,44,55,66]
let above50 = numbers.filter(function(el,index,arr){
    return el > 50
})
console.log(above50)
numbers = [22,33,44,55,22,33,44,55,66]
let even = numbers.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(even)

// program 3

let nnm = [11,22,33]  // 66
let sum = 0

for(let i = 0 ;i < nnm.length ; i++){
    sum = sum + nnm[i]
    //     0  +   11  ======> 11
    //     11 +   22 ======> 33
    //     33 +   33 ======> 66
}
console.log(sum)
let sumA = nnm.reduce(function(acc,el,index,arr){
    return acc + el  // 33
},5)
console.log(sumA)


let bal = [11,22,33,44,55,66,110,123,-190,323,-900,-99000]

let deposit = bal.filter(function(el,index,arr){
    return el > 0
})

let withdrawl = bal.filter(function(el,index,arr){
    return el < 0
})
console.log(deposit)
console.log(withdrawl)

let totalBal = deposit.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(totalBal)

// map() , filter() , reduce()
// forEach()
let names = ['chinmay',"shirish","ram"]
names.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// map() , filer() , reduce() ,forEach()



