/*
filter()
It iterates through the array to create a new array.
You can decide which elements should be added in the new array based on some conditions.
Syntax:
arr.filter(item => {
    // Callback Function
    // Return true to add /false skip the current item
})
*/
console.clear()
const numArr = [1,2,3,4,5,6,7,8,9]

const result = numArr.filter(item => {
    // console.log(item)
    return item % 2 === 0 
})

console.log(result)

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
    },

    {
        name : 'Taha',
        age : '25',
        position : "Web-Developer"
    }
]

const emp_result = emp.filter(item => {
    // console.log(item)
    return item.age > 24 
})

console.log(emp_result)