
let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    rollNo: 23,
    parent: {
        mother: "kanchan deshpande",
        father: "shirish deshpande"
    }
}

console.log(info.firstName)
console.log(info.parent?.mother)



let info2 = {
    firstName: "chinmay2",
    lastName: "deshpande2",
    city: {
        native: "nagpur"
    }
}

let info3 = {
    firstName: "chinmay3",
    lastName: "deshpande3",
    city: {
        job: "pune",
    }
}

let info4 = {
    firstName: "chinmay4",
    lastName: "deshpande4",
}

let info5 = {
    firstName: "chinmay5",
    lastName: "deshpande3",
    city: {
        native: "nagpur"
    }
}


let students = [info2, info3, info4, info5]
students.forEach(function (el) {
    if (el.city?.native) {
        console.log('N')
    }
    else if(el.city?.job) {
        console.log("J")
    }
    else {
        console.log('No city')
    }

})




let a = 7 < 6  && "hello"
console.log(a)

let b = 7 > 6  && "hello"
console.log(b)

let ba = 9 == 9 || "bye"
console.log(ba)






