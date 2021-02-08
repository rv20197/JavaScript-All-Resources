// Automaticaaly done by JavaScript
console.clear()
var s = 'Hello'
var a = 5
var sum = s+a
console.log('String and Number')
console.log(sum);
console.log(typeof(sum))

console.clear()
console.log("String an Boolean")
console.log("Hi"+true)
console.log(typeof("Hi"+true))

console.clear()
console.log('2')
console.log(typeof('2'))
console.log(+'2')
console.log(typeof(+'2'))
// If we have string like 'apple' then it will give nan
console.clear()
console.log(+'apple')

console.clear()
var comp = 2>= '2' // It will conver '2' into number and then do logical comparison
console.log(comp)
console.log(typeof(comp))

console.clear()
console.log("Boolean Type Conversion")

// If anything except 0 , null, undefined, '' is entered in if statement then it's considered as true 
if(''){
    console.log('True')
}
else{
    console.log('False')
}
