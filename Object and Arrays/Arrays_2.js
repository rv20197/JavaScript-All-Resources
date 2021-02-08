console.clear()
var l1 = ['a','b','c','d','e']
console.log(l1)
/*
Adding element at specific position
1. 1st Tells where to start
2. 2nd Tells how many elements to delete
3. 3rd and 4th and so on tells what items to be added
*/
l1.splice(3,0,'f')
console.log(l1)

// Delete Item at specific position
l1.splice(3,1)
console.log(l1)

// Concatenate two lists
console.clear()
var nums = [0,1,2,3,4]
var combo = l1.concat(nums)
console.log(combo)

// Sorting the list
combo.sort() // Ascending Order
console.log(combo)

combo.reverse() // Descending Order
console.log(combo)