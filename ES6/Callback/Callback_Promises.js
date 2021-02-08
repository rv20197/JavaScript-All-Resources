/*
In JavaScript the code is execute line-byline in a sequence so when we run a parallel operation
or asynchronous operation like fetching data from backend, JavaScript doesn't wait for the response
it simply executes the next line of code. We give the asynchronous operation a function to call
when it is completed. This function is called a Callback Function.
*/
console.clear()
/*
//////////Callback/////////

let list = []
$.get("https://jsonplaceholder.typicode.com/posts",(response) => {
    // console.log(response)
    list = response
})
console.log(list)
// This return an empty list as JavaScript doesn't wait for the response it simply executes the next line of code

// Solution to the above issue (callback)
$.get("https://jsonplaceholder.typicode.com/posts",(response) => {
    console.log(response)

    id = 1
    $.get(`https://jsonplaceholder.typicode.com/posts/${id}`,(response) => {
    console.log(response)
    }).fail(err => {
        console.log(err)
    })

    $.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,(response) => {
        console.log(response)
    }).fail(err => {
        console.log(err)
    })

}).fail(err => {
    console.log(err)
})
*/
/*
Promises
A Promise is used to handle the asynchronous result of an operation.
It defers the execution of a code block until an asynchronous request is completed.
This way, other operations can keep running without interruption.

A Promise has 3 states: 
- Pending: It means the opeartion is going on.
- Fulfilled: It means the operation was completed.
- Rejected: It means the operation did not completed and an error can be thrown

Syntax:
const mPromise = new Promise((resolve,reject) =>{
    // Promise body
    // Call resolve() when operation is completed.
    // Call reject() when operation is failed.
})
*/
// Promise Object
// const Post_List_Promise = new Promise((resolve,reject)=>{
//     $.get("https://jsonplaceholder.typicode.com/posts",(data) => {
//         // console.log('GET Post List => ',data)
//         resolve(data);
//         }).fail(err => {
//             reject(new Error(`Call failed for GET post list request with status ${err.status}`))
//     })
// })
// /**
//  * then() method is called when the resolve() is executed. It receives data passed in resolve() method as arguments.
//  * catch() method is called when the reject() is executed. It receives data passed in reject() method as arguments.
//  */

// Post_List_Promise
// .then((response) =>{
//     console.log("Call Success")
//     console.log("Then Response => ",response)
// })
// .catch((error_response) =>{
//     console.log("Call Failed")
//     console.log("Catch Response => ",error_response)
// })

// CHAINING PROMISES
console.clear()
const Post_List_Promise = new Promise((resolve,reject)=>{
    $.get("https://jsonplaceholder.typicode.com/posts",(data) => {
        console.log('Sending List Call')
        resolve(data);
        }).fail(err => {
            reject(new Error(`Call failed for GET post list request with status ${err.status}`))
    })
})

const Post_Details_Promise2 = (data) => new Promise((resolve,reject) => {
    console.log("Sending Details Call")
    $.get(`https://jsonplaceholder.typicode.com/posts/${data[0].id}`,(data) => {
        // console.log(data)
    resolve(data);
    }).fail(err => {
        // reject(`Details Call Failed and Status ${err.status}`) // Gives plain text with error code
        reject(new Error(`Details Call Failed and Status ${err.status}`)) // Gives Error Object
    })
})

Post_List_Promise
.then(Post_Details_Promise2)
.then(response =>{
    console.log("Post Details Response => ",response)
})
.catch((error_response) =>{
    console.log("Call Failed")
    console.log("Catch Response => ",error_response)
})