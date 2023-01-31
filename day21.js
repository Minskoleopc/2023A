// Object literal
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:30,
    skills:["python","sql","html","css"]
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:32,
    skills:["python","cypress","html","css"]
}

// 4 lines 
// 40 object ---- 160 lines
// user defined data type

class Student {
    firstName = undefined
    lastName = undefined
    age = undefined
    skills = undefined
}
// let v = true
// let a = 90
// let firstName = "ram"
// let names = ["chinmay","sarika","poorva"]
let amola = new Student()
let chinmaya = new Student()
console.log(amola)
console.log(chinmaya)

// setting the value outside the class
amola.firstName = "amol"
amola.lastName = "rao"
amola.age = 22
amola.skills = ["python", 'html']
console.log(amola)

// setting the value at the time of object creation

class Person {
    constructor(fn,ln,ag,sk){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.skills = sk
    }
}
let amolb = new Person("amol","rao",23,["python","sql"])
let poorva = new Person("poorva","vyas",23,["python3","sql"])
console.log(amolb)
console.log(poorva)
poorva.city = "ujjain"
console.log(poorva)


class PersonD {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setSkills(sk){
        this.skills = sk
    }
}
let amolc = new PersonD()
console.log(amolc)
amolc.setFirstName("amol r")
amolc.setLastName('rao')
amolc.setAge(24)
amolc.setSkills(["python","css","html"])
console.log(amolc)




// console.log(amol)
// // retrive 
// console.log(amol.firstName)
// console.log(amol['firstName'])
// // update 
// amol.firstName = "amol r"
// amol['firstName'] = "amol rD"
// // add 
// amol.city = "nagpur"
// amol['city'] = "wardha"
// // delete
// delete amol.city
// delete amol['firstName']