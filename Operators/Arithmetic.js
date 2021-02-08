console.clear()
var a = 10 // Integer
var b = 2 // Decimal
operation = "++"

switch (operation) {
    case "+":
        console.log("Addition")
        console.log(a+b)
        break;
    
    case "-":
        console.log("Subtraction")
        console.log(a-b)
        break;
    
    case "*":
        console.log("Multiply")
        console.log(a*b)
        break;

    case "/":
        console.log("Divide")
        console.log(a/b)
        break;

    case "%":
        console.log("Modulus")
        console.log(a%b)
        break;

    case "++":
        console.log('First Print Then Increment')
        console.log(a++)
        console.log('First Increment Then Print')
        console.log(++a)
        break;

    case "--":
        console.log('First Print Then Decrement')
        console.log(a--)
        console.log('First Decrement Then Print ')
        console.log(--a)
        break;

    default:
        console.log('Today GYM is closed')
        break;
}