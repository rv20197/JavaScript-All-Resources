console.clear();
var a = 10 // Integer
var b = 2 // Decimal

console.log(typeof(a))
console.log(typeof(b))

console.log("Addition")
console.log(a+b)

console.log("Subtraction")
console.log(a-b)

console.log("Multiply")
console.log(a*b)

console.log("Divide")
console.log(a/b)

console.log("Divide by Zero")
console.log(a/0) // Returns Infinity and type is a number in javascript

console.log("Not a Number")
console.log(a/"a") // Return NAN and its type is number

/* BUILT-IN Number Functions */
console.clear()
var num1 = 10;

// toString() takes number as input and return string
console.log(num1.toString())

// parseInt() takes string number as input and return integer number
console.log(parseInt("1"))
console.log(parseInt("12.2"))

// parseFloat() takes string number as input and return float number
console.log(parseFloat('2.5'))

// toFixed() takes decimal number and rounds off to nearest value
var c = 2.45214
console.log(c.toFixed())
console.log(c.toFixed(2)) // 2 resembels the number of digits after decimal point
