

// api - 2
// api - 3
// api - 4

// api-2
// api-3
// api-4


function getSingleuserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}

// async function GetInfo(){
//    let a =  await getSingleuserInfo(1)
//    let b =  await getSingleuserInfo(2)
//    let c =  await getSingleuserInfo(3)
//    let d =  await getSingleuserInfo(4)
//    console.log(a)
//    console.log(b)
//    console.log(c)
//    console.log(d)
// }
// GetInfo()


async function GetInfo() {
   let a =  await Promise.all([
        getSingleuserInfo(1),
        getSingleuserInfo(2),
        getSingleuserInfo(3),
        getSingleuserInfo(4),

    ])
    console.log(a)
}
//GetInfo()


// Promise.all()
// Promise.allSettled()
// Promise.any()
// Promise.race()


async function allMethod(){
   let aa = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("bye"),
        Promise.reject("Rejected"),
        Promise.resolve("GA")

    ])
    console.log(aa)
}
//allMethod()

async function allSet(){
    let aa = await Promise.allSettled([
         Promise.resolve("hello"),
         Promise.resolve("bye"),
         Promise.reject("Try another time"),
         Promise.resolve("GA")
     ])
     console.log(aa)
 }
 //allSet()

function getResolve(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello")
        },2000)
    })
}

function getReject(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye")
        },1000)
    })
    
}
 async function allRace(){
    let aa = await Promise.race([
        getResolve(),
        getReject()  
     ])
     console.log(aa)
 }
 allRace()
 





