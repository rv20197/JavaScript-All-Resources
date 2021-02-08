/*
It allows us to "unpack" arrays or objects into a bunch of variables which makes 
working with arrays and objects a bit more convenient.
Syntax:
let [a,b] = [1,2,3,4,5];
let {name, age} = {fName:"Vatsal",lName:"Rajgor", age:24}
*/
console.clear();

const full_name = "Vatsal Dinesh Rajgor"
const nameArr = full_name.split(" ")
console.log(nameArr)

/*
let f_name = nameArr[0]
let m_name = nameArr[1]

console.log(f_name)
console.log(m_name)
*/

/*
Better Option 
It will automatically assign the 0th and 1st element to it respective variables
NOTE: Sequence Matters
*/

let [f_name,m_name,l_name] = nameArr
console.log(f_name)
console.log(m_name)
console.log(l_name)

let [first_name,,last_name] = nameArr
console.log(first_name)
// console.log(m_name)
console.log(last_name)

// Object
console.clear()
const person = {
    firstname : "Vatsal",
    lastname : "Rajgor",
    age : 24
}

// Variable name should be same as the key
// Sequence doesn't matter as mapping is done based on key in object
let {firstname,lastname} = person 

console.log(firstname)
console.log(lastname)

console.clear()
let subject_1 = "Maths"
let subject_2 = "Science"
let subject_3 = "Computer"

// To create the object using variable with same key name as the variable name
const study = {
    subject_1,
    subject_2,
    subject_3
}

console.log(study)

// To create the object using variable but with different key name than the variable name
const studies = {
    sub_1 : subject_1,
    sub_2 : subject_2,
    sub_3 : subject_3
}

console.log(studies)