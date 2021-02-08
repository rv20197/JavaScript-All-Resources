console.clear()
// {NUMBER} means the number of occurence of the character in a string
var str = "He was born in the year1997 and his ages is 24@2020"
console.log(str.match(/[0-9]{1}/gi))
console.log(str.match(/[0-9]{2}/gi))
console.log(str.match(/[0-9]{3}/gi))
console.log(str.match(/[0-9]{4}/gi))
console.log(str.match(/[0-9]{2,4}/gi))

var mobile = "+91-8454870138"
console.log(mobile.match(/[0-9]{1,}/gi))

var color = "color: #122576;background-color:#AA0EF;foreground-color:#123456789"
console.log(color.match(/#[0-9a-zA-Z]{6,}/gi))
console.log(color.match(/#[\w]{6}/gi))
console.log("#123456".match(/^#[0-9a-zA-Z]{6}$/gi)) // (^): string starts with ($): string ends with

var pan = "CARPR2667H"
console.log(pan.match(/^[a-zA-Z]{5}[0-9]{4}[a-zA-z]{1}$/g))

var wpan = "CARPR2667HAASDSH"
console.log(wpan.match(/^[a-zA-Z]{5}[0-9]{4}[a-zA-z]$/gim)) // String must end with single character

var bin = '1000 100 10 1'
console.log(bin.match(/[0-9]*[\S]/g))

var web = "Secure sites have https:// and unsecure sites have http://"
console.log(web.match(/https{0,1}/gi)) // {0,1} means it can be optional
console.log(web.match(/https?/gi))