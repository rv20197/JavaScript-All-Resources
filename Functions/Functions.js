console.clear()
/* SYNTAX
function name(params) {
    // BLOCK OF CODE
}
*/

// NON-Parameterized Function
function mul() {
    var num1=10,num2=20
    console.log(`Multiplication is ${num1*num2}`)
}
mul()

// Parameterized Function
function sum2(num1,num2) {
    console.log(`sum is ${(num1+num2)}` )
    return (num1+num2) 
}

Total = sum2(3,5)
console.log(Total)

// Parameterized Function with default value
function sum3(num1,num2 = 10) {
    console.log(`sum is ${(num1+num2)}` )
    return (num1+num2) 
}

Total = sum3(3)
console.log(Total)
Total = sum3(3,100)
console.log(Total)

Total = sum3(3,100,11) // If more values are passed than required then JS will just ignore it 
console.log(Total)

// Parameterized Function with condition
function sum4(num1,num2) {
    
    if(num2 !== undefined){
        console.log(`sum is ${(num1+num2)}` )
    }
    else
    {
        console.log(`Second Parameter is Undefined, So Printing the only provided one i.e. ${num1}`)
}
}
sum4(5)
