console.clear()
let name = "Vatsal"
console.log(`Hello ${name}`)
function getFullName(fName,lName) {
    return `${fName} ${lName}`
}

name = getFullName("Vatsal","Rajgor")
console.log(`Hello ${name}`)

let red = 100
let green = 150
let blue = 100
let alpha = 0.8

const rgba_Exp = `rgba(${red},${green},${blue},${alpha})`
console.log(rgba_Exp)