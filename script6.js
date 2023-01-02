let a = 100
let b = 200

// if(a > b){
//     console.log(a)
// }
// else {
//     console.log(b)
// }

a > b ? console.log('a is greater'):console.log('b is greater')


// program 2

let age = 17
let q1 = age >= 18 ? "can drive":"cannot drive"
console.log(q1)


// program 3
// switch case 
// if not break statement , will execute all statements after the case is matched
let city = "indoreA"
switch(city){
    case "pune":
        console.log("MH")
    case "indore":
        console.log("Mp")
    case "jaipur":
        console.log("RJ")
    case "kanpur":
        console.log("UP")
    default:
        console.log('Incorrect city name') 
}

let cityB = "Bhopal"
switch(cityB){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "indore":
        console.log("MP")
        break
    case "kanpur":
        console.log("UP")
        break
    default:
        console.log("incorrect city")
}

// program 5
// let cityC = "bhopjjal"
// switch(cityC){
//     case "pune":
//     case "nagpur":
//         console.log("MH")
//         break
//     case "jaipur":
//     case "udaipur":
//         console.log("RJ")
//         break
//     case "indore":
//     case "bhopal":
//         console.log("MP")
//         break
//     case "kanpur":
//     case "lucknow": 
//         console.log("UP")
//         break
//     default:
//         console.log("incorrect city")
// }

// Truthy value and false value

// Truthy - 'A' , "chinmay" , "3" , 4 , -67, "&&" ," ", [] , {} , 98.7 , 78 < 90 ,true
// Falsy - 0,undefined , null ,NaN, "",false, 45 > 66

if(0){
    console.log("Hello")
}
else {
    console.log("Bye")
}










