//             0         1          2      3
let names = ["chinmay","poorva","mayuri","amit"]

// array --- object 
// property and method
// action and return 
console.log(names.length)

// push()
let q1 = names.push('amey')
console.log(q1)
console.log(names)

//unshift()
let q2 = names.unshift('ram')
console.log(q2)
console.log(names)

// pop()
let q3  = names.pop()
console.log(q3)
console.log(names)

// shift()
let q4 = names.shift()
console.log(q4)
console.log(names)

// reverse()
//[ 'chinmay', 'poorva', 'mayuri', 'amit' ]
let q5 = names.reverse()
console.log(names)

// includes()
//[ 'amit', 'mayuri', 'poorva', 'chinmay' ]

let q6  = names.includes('Poorva')
let q7  = names.includes('amit')
console.log(q6)
console.log(q7)

// indexOf()
//   0         1           2        3
//[ 'amit', 'mayuri', 'poorva', 'chinmay' ]

let q8 = names.indexOf("mayuri")
console.log(q8)
let q9 = names.indexOf("mayur")
console.log(q9)

// map()
let numbers = [22,33,44,66]
let q10 = numbers.map(function(el,index ,arr){
    return el + 2
})
console.log(q10)

// filter()
let q11 = numbers.filter(function(el,index,arr){
    return el < 40
})
console.log(q11)

let q12 = numbers.reduce(function(acc,el,index,arr){
    return  el + acc
},2)
console.log(q12)

// forEach()
let city = ["pune","mumbai","banglore","kolkalta","chennai"]
city.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// find()
let j =[11,22,33,44,22,33,44,55,66,77]
let w2 = j.find(function(el,index,arr){
    return el > 60
})
console.log(w2)
// findIndex()
let w23= j.findIndex(function(el,index,arr){
    return el > 60
})
console.log(w23)

// some()

let w233= j.some(function(el,index,arr){
    return el > 60
})
console.log(w233)

// every()
let w2334= j.every(function(el,index,arr){
    return el > 10
})
console.log(w2334)


//----------------**-------------------------------------

// concat()
let k = [11,22,33]
let l = [44,55,66]

let q14 = k.concat(l)
console.log(q14)

let q15 = l.concat(k)
console.log(q15)

// flat()
//            0          1           2
//          0  1  2   0  1  2    0   1  2
let jkl = [[11,22,33],[44,55,66],[77,88,99]] 
console.log(jkl[0][0]) // [11,22,33]
console.log(jkl[1][2])
console.log(jkl[1][1])
console.log(jkl[2][0])
let q16 = jkl.flat()
console.log(q16)

// join()
let info = ["chinmay","deshpande",770192441]
let aa = info.join('@')
console.log(aa)

// sort()
let country = ["india","australia","america","pakistan"]
let q17 = country.sort()
console.log(q17)

// at()
//              0       1         2       3 
let fruits = ["apple","mango","banana","grapes"]
let q18= fruits.at(2)
console.log(q18)

// slice()

//               0         1         2         3        4          5       6         
let cities = ["wardha","nagpur","bangalore","delhi","amravati","chennai","delhi"]
//               -7         -6      -5        -4        -3          -2        -1        
//cities.slice(start,endposition)
let q111 = cities.slice(3)
console.log(q111)
console.log(cities.slice(1,5))
console.log(cities.slice(0,4))
console.log(cities.slice(-4))
console.log(cities.slice(-7,-4))
console.log(cities.slice(1,-4))
console.log(cities.slice(-7,5))
console.log(cities.slice(-1,4))
// splice()
//                  0          1       2        3
let vegetables = ["tomato","potato","brinjal","onion"]
// vegetables.pop()
// vegetables.shift()
console.log(vegetables)
//vegetables.splice(startIndex,numberOfElementsTobeDeleted)
// let q333 = vegetables.splice(2,1)
// console.log(vegetables)
// console.log(q333)
//vegetables.splice(startIndex,numberOfElementsTobeDeleted,repl,repl)
vegetables.splice(1,2,"cabbage","cauliflower","carrot")
console.log(vegetables)

// fill()
//           0  1  2   3  4  5 6  
let marks = [22,33,44,55,66,77,88]
//let q444 =  marks.fill(true,1)
let q5555 =  marks.fill(true,1,4)
console.log(q5555)