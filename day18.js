// //            0            1      2  3
// let info = ["chinmay","deshpande",33,44]
// console.log(info[0])
// //firstName   lastName   age   rollNumber
// //["chinmay","deshpande",33,44]

// // object
// let info2 = {
//     // property:value
//     // key:value 
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:33,
//     rollNo:44
// }

// program2
//            0         1          2       3
let names = ["rasika","satish","ramesh","rakesh"]

// retrive
console.log(names[1])
// add
names.push("mayuri")
names.unshift("maya")
// update 
names[2] = "sanket"
// delete

names.pop()
names.shift()
names.splice(2,1)


let vehicle = {
    color:"red",
    model:"Q4",
    type:"SUV"
}

// retrive  (dot notation and bracket notation)
//console.log(vehcile[0]) X

console.log(vehicle.color)
console.log(vehicle.model)
console.log(vehicle.type)

// bracket notation
console.log(vehicle['color'])
console.log(vehicle['model'])
console.log(vehicle['type'])

// add (dot notation and bracket notation)
vehicle.name  = "audi"
vehicle['regNo'] = "123"
console.log(vehicle)

// udate (dot notation and bracket notation)
vehicle.color = "blue"
vehicle['regNo'] = 789
console.log(vehicle)

// delete (dot notation and bracket notation)
delete vehicle.color
delete vehicle['regNo']

console.log(vehicle)


let info2 = {
    firstName:'chinmay',
    lastName:"deshpande",
    age:33,
    rollNo:44
}

// dot notation
// retrive 
console.log(info2.lastName)
// add
info2.city = "pune"
// update 
info2.rollNo = 55
// delete 
delete info2.firstName

// bracknotation
console.log(info2['lastName'])
info2['language'] = "marathi"
info2['rollNo'] = 66
delete info2.lastName

let fruits = ["apple","mango","banana","grapes"]
for(let i = 0 ; i < fruits.length ; i++){ // 1 //2  // 3 //4
   // console.log(i) //0 // 1 // 2 // 3
    console.log(fruits[i])
}
console.log("-------------------")
let animal = {
    namee:"tiger",
    legs:4
}
// dot notation does not work inside for loop
for(let x in animal){
    console.log(x,animal[x])
}

