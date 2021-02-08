console.clear()
var obj = {
    "name" : "Vatsal",
    "age" : 24,
    score:{
        "Science":24
    }
}

console.log(obj)

str = JSON.stringify(obj)
console.log(str)
obj1 = JSON.parse(str)
console.log(obj1)

// var arr = [
//     {
//         "name" : "Vatsal",
//         "age" : 24
//     },

//     {
//         "name" : "Jibran",
//         "age" : 23
//     },

//     {
//         "name" : "Taha",
//         "age" : 25
//     }

// ]

// console.log(arr[0])
// console.log(arr[1].name)
// console.log(arr[2].age)