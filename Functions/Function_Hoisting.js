console.clear()

console.log('Before function')
sum(10,35)

function sum(num1,num2) {
    console.log(num1+num2)
}

console.log('After function')
sum(10,8)

// add(10,35) // TypeError: add is not a function
// Whole function is assigned to the variable ,
// once it is done we can use it as a function but not before that.
var add = function (num1,num2) {
    console.log(num1+num2)
}

add(10,45)

// We can also do variable hoisting in function

function sums(a,b) {
    total = a + b
    console.log(total)
    // var total // even if variable is not assigned the JS will assign it and use
}

sums(1,5)

x = 5
console.log(typeof(x),x)

y = '5'
console.log(typeof(y),y)