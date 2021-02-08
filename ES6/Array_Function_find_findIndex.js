/*
ES6 introduced 2 new methods to search for elements inside the array.

- find():It is used to search for an element in the array that matches some condition.
            It returns the first element that matches the condition.

- findIndex(): It is quite similar to the find() method.
                 The difference is that findIndex() method returns the index of the element instead of the element itself.
*/
console.clear()
const numArr = [-1,-2,-3,1,2,3]

const find_result = numArr.find((item)=>{
    return (item % 2 === 0 && item >= 0)
})

console.log(find_result)

console.clear()
const find_index_result = numArr.findIndex((item) => {
    return (item %2 !== 0 && item >= 0)
})

console.log(find_index_result)