console.clear();
var str = "84548701387654"
var str1 = "8454870138"
console.log(str.match(/[\d]/g)) // It will return every number as a character
console.log(str.match(/[\d]+/g)) // It returns whole string
console.log(str.match(/[\d]{10}/g)) // It shouldn't match but it does as it fetches first 10 characters
console.log(str.match(/^[\d]{10}$/gi)) // Returns NULL as string doesn't start and end strictly with 10 characters
console.log(str1.match(/^[\d]{10}$/gi)) // Returns the exact string

var str2 = "+91-8454870138"
// For grouped optional use put the condition in ()
console.log(str2.match(/^(\+91\-)?[0-9]{10}$/g))
console.log(str1.match(/^(\+91\-)?[0-9]{10}$/g))

var url = "www.google.com"
var pattern = /^(www)\.[\w]+\.(com|co|in|org|net)$/g
console.log(url.match(pattern))