console.clear()
Str = "Air Birm Circle"
console.log(Str.match(/[ABC]irm/gi))

str_1 = "Same Naas Fame Gas"
console.log(str_1.match(/[A-Z]ame/gi))

str2 = "Vatsal20197Rajgor$ @"
console.log(str2.match(/[0-9]/gi))
console.log(str2.match(/[A-Z][0-9]/gi))
console.log(str2.match(/[0-9][A-Z]/gi))
console.log(str2.match(/[A-Z]/g))
console.log(str2.match(/[a-z]/g))
console.log(str2.match(/[^0-9]/gi)) // Select everything except the number
console.log(str2.match(/[^A-Z]/gi)) // Select everything except the alphabets
console.log(str2.match(/[a-z0-9A-Z]/g)) // It will select everything except the special symbols
console.log(str2.match(/[\W]/g)) // It will select only special characters even spaces
console.log(str2.match(/[\s]/g)) // It will select only spaces
console.log(str2.match(/[\S]/g)) // It will slect everything except the spaces
