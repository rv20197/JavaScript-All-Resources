console.clear()
var num1 = 10 // Global variable(Can be used anywhere in the program)
// Every time the function is called new set of variables are declared
function sum(num2) 
{   
    var total = num1+num2 // Local Variable(Only accessible in this function)
    console.log(total)
}
// console.log(total) //OUTPUT: ReferenceError: total is not defined
sum(20)
