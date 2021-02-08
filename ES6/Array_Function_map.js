console.clear()
/*
map()
It iterates the array for us and we can pass a callback function 
to perform some operation on each array item.
The updated values can be returned by the callback function to create a new array.

Syntax:
arr.map((item)=>{
    //Callback function body
})
*/

const arr1 = [1,2,3,4,5,6]

// Classic method
let newarr = []

const double_values = (item) =>{
    return item*2
}
   
for(let i=0;i<arr1.length;i++){
    newarr.push(double_values(arr1[i]))
}
console.log(newarr)

// Using map() function on array
let newArr = arr1.map((item,i)=>{
    console.log(`Item at pos: ${i} is ${item}`)
    return item*2
})

console.log(newArr)

// Using map() function on array consisting of object
console.clear()
const emp = [
    {
        name: 'Vatsal',
        age : '24',
        position: "ML Engineer"
    },

    {
        name : 'Jibran',
        age : '25',
        position : "ETL-Developer"
    }
]

let emp_details = emp.map((data) => {
    return{name:data.name,
    position:data.position}
})

console.log(emp_details)