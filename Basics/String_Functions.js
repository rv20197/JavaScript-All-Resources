var String1 = "This is a string for JavaScript String functions"

// Length Function
console.log(String1.length)

// Find index of a string inside a string
console.log(String1.indexOf('JavaScript'))
console.log(String1.indexOf("This"))

// Find LAST index of a string inside another string
console.log(String1.lastIndexOf("functions"))

// Get a part of string slice(Start, end)
console.log(String1.slice(0, 5))
console.log(String1.slice(21,31))
console.log(String1.slice(-10))

// If only one value is given then it will fetch all the following characters from the given index value
console.log(String1.slice(10))

// Get sub string function - substr(start,length)
console.log(String1.substr(String1.indexOf('string'),'string'.length))

/* String Function Part 2 */
console.clear()
 var s2 = "This is JavaScript Tutorial"

//  toUpperCase() - It converts the string to the uppercase
console.log(s2.toUpperCase())

// toLowerCase() - It converts the string to the LowerCase 
console.log(s2.toLowerCase())

// concat() - It merges two or more strings
var fName = "Vatsal"
var lName = "Rajgor"
console.log(fName.concat(" ",lName))
console.log(fName + " " + lName) // Using + to concat

// trim() - Removes extra whitespaces
var s3 = "          Hello World                "
console.log(s3.trim())

// charAt() - Takes Position an input and returns the character at that position
console.log(fName.charAt(3))
console.log(fName.charAt(0))

// split - splits the string on the basis of arguements passed and converts into list
var s4 = "String for split function"
console.log(s4.split(" "))
