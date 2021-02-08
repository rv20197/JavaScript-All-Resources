console.clear()
// To String
var  num = 15
console.log(typeof(num))
console.log(String(num),typeof(String(num)))
console.log(String(true),typeof(String(true)))
console.log(String(false),typeof(String(false)))
console.log(String(-98.1),typeof(String(-98.1)))
console.log(String(null),typeof(String(null)))
console.log(String(undefined),typeof(String(undefined)))


// No matter what we define in String() it will convert it into string

// To Number
console.log(Number('2.14'), typeof(Number('2.14')))
console.log(Number(true),typeof(Number(true)))
console.log(Number(false),typeof(Number(false)))
console.log(Number('apple'),typeof(Number('apple')))

// To Boolean
console.log(Boolean('Hi'), typeof(Boolean('Hi')))
console.log(Boolean(1), typeof(Boolean(1)))
console.log(Boolean(0), typeof(Boolean(0)))
console.log(Boolean(null), typeof(Boolean(null)))
console.log(Boolean(undefined), typeof(Boolean(undefined)))