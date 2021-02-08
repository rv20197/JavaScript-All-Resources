/*
Just like map(), reduce() also iterates throught the entire array and it accepts a callback function
to perform somme action on the array element. The difference here is that reduce() passes the result
of the callback from one iteration to the next one. This callback result is called accumulator.
The accumulator can be prettymuch anything(integer, string, object or array) and must be instantiated
and passed while calling reduce().
Syntax:
arr.reduce((acc,item)=>{
    //Callback function body
},acc_default_value)
*/
console.clear()
const numArr = [1,2,3,4,5]

const result = numArr.reduce((acc,item) => {
    // console.log(item)
    // console.log(acc)
    return acc+item
},0)
console.log(result)

console.clear()
const emp = [
    {
        name: 'Vatsal',
        age : 24,
        position: "ML Engineer"
    },

    {
        name : 'Jibran',
        age : 25,
        position : "ETL-Developer"
    }
]

const emp_details = emp.reduce((acc1,data) => {
    // console.log(data.age)
    // console.log(acc1)
    return acc1+data.age
},0)

console.log(emp_details)