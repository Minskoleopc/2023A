
// sync vs asyn 

// function additionA(){
//     console.log("Printed A")
// }

// function additionB(){
//     console.log("Printed B")
// }
// additionA()
// additionB()


//------------------------------------------
// function additionC(){
//     setTimeout(function(){
//         console.log("Printed C")
//     },2000)
// }

// function additionD(){
//     console.log("Printed D")
// }
// additionC()
// additionD()

//----------------------------------------------

//async ------ execution -- sync

function GetInfo() {
    setTimeout(() => {
        console.log('user created....')
    }, 3000);
    setTimeout(() => {
        console.log('get id ....')
    }, 2000);
    setTimeout(() => {
        console.log('get info by id....')
    }, 1000);
}
//GetInfo()


// user created.. get id 'get info by id

// function GetInfo() {
//     setTimeout(() => {
//         console.log('user created....'),
//             setTimeout(() => {
//                 console.log('get id ....')
//                 setTimeout(() => {
//                     console.log('get info by id....')
//                 }, 1000);
//             }, 2000)
//     }, 3000);
// }
// GetInfo()

// promise

//  pending resolve reject


let prop = new Promise(function(resolve,reject){
    let a  = 10;
    let b =  10;
    if(a == b){
        resolve("hello")
    }
    else {
        reject('bye')
    }

})

// prop.then(function(a){
//     console.log(a)
// },function(b){
//     console.log(b)
// })


// prop
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })


prop
.then(function(a){
    console.log(a)  /// "hello"
    return "hello-b"
})
.then(function(b){
    console.log(b) // hello-b
    console.log('b') // 'b'
})
.catch(function(b){
    console.log(b)
})
.finally(function(){
    console.log("always executed") //"always execute"
})



// function GetInfo() {
//     setTimeout(() => {
//         console.log('user created....'),
//             setTimeout(() => {
//                 console.log('get id ....')
//                 setTimeout(() => {
//                     console.log('get info by id....')
//                 }, 1000);
//             }, 2000)
//     }, 3000);
// }
// GetInfo()


function GetUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

function GetId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get user by id')
        },2000)
    })
}

function GetInfoById(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Get info by id')
        },1000)
    })
}

GetUser()
.then(function(a){
    console.log(a)
    return GetId()
})
.then(function(b){
    console.log(b)
    return GetInfoById()
})
.then(function(c){
    console.log(c)
})
.catch(function(){
    console.log("hello")
})
.finally(function(){
    console.log('Executed')
})
















