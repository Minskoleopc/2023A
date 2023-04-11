

// promise 
// async --- sync  ------ call back hell
// promise 

// .then()
// asyn await


// API  -- list of user page wise
// API  -- single user info

//https://reqres.in/api/users?page=2 // ID
// https://reqres.in/api/users/2 // Info

function getUserPageWise(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data[0].id
        })
}

function singleUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}
function renderHtml(user){
    document.write(`<h1>${user.first_name}</h1>`)
    document.write(`<h1>${user.last_name}</h1>`)
    document.write(`<h1>${user.id}</h1>`)
    document.write(`<h1>${user.email}</h1>`)
    document.write(`<img src = "${user.avatar}"/>`)
}

// getUserPageWise(2)
// .then(function(id){
//     console.log(id)
//     return singleUserInfo(id)
// })
// .then(function(user){
//     renderHtml(user)
// })

async function info(pageNumber){
    let id = await getUserPageWise(pageNumber)
    let user = await singleUserInfo(id)
    renderHtml(user)
}
info(2)


//singleUserInfo(2)
//getUserPageWise(2)













