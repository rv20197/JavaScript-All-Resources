console.clear()
var string_1 = "This is a black ball pen. This pen is really smooth. It is a parker pen"
var patt = /pen/gi

console.log(string_1.search(patt))
console.log(patt.test(string_1))
console.log(string_1.match(patt))

var patt1 = /peen/gi
console.log(string_1.search(patt1))
console.log(patt1.test(string_1))
console.log(string_1.match(patt1))

// BUILT IN CLASS
var patt3 = new RegExp('pen', 'gi')
console.log(string_1.match(patt3))

var patt3 = new RegExp('s', 'gi')
console.log(string_1.match(patt3))

var patt3 = new RegExp('[0-9]', 'gi')
console.log(string_1.match(patt3))

var patt3 = new RegExp('.', 'gi')
console.log(string_1.match(patt3))
