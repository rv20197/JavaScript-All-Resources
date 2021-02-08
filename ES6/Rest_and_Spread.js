console.clear()
const mSum = (...args) => {
    console.log(args)
    let sum = 0
    for(let i = 0;i<args.length;i++){
        sum += args[i]
    }
    console.log(sum)
}

mSum(1,2,3)

console.clear()
// Rest operator(...args) should always be at the last
const Sum = (num1,num2,...args) => {
    console.log(num1)
    console.log(num2)
    console.log(args)
    let sum = num1+num2
    for(let i = 0;i<args.length;i++){
        sum += args[i]
    }
    console.log(sum)
}

Sum(1,2,3,4,5,6,7,8,9)

console.clear()
/*
 SPREAD OPERATOR 
Spread syntax allows arrays and objects to be copied into:
    - elements in case of array.
    - key-value pairs in case of object
*/

let arr1 = [1,2,3,4]
// let arr2 = arr1
let arr2 = [...arr1]
arr1.push(5)
console.log(arr1,arr2)

let arr3 = [...arr1,...arr2]
console.log(arr3)

let arr4 = [0,...arr1,...arr2,9]
console.log(arr4)

let obj1 = {
    name:"Vatsal" 
}

let obj2 ={
    Age:24
}

let obj3 = {...obj1,...obj2}
console.log(obj3)