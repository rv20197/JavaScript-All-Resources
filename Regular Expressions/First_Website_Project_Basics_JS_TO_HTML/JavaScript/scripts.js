/*
console.log('Script Loaded')

console.log(document.getElementById('profile_info'))

console.log(document.getElementsByClassName('description'))

console.log(document.getElementsByTagName('h1'))
*/

// console.log(document.querySelectorAll('.menu a'))

// console.log(document.querySelector('.menu a'))

// console.log(document.querySelectorAll('#home_image'))

// console.log(document.querySelector('#home_image'))

var username = document.getElementById('username')
var user_name_error = document.getElementById("user_name_error")
var pattern = /^[\w]{6,8}$/

username.addEventListener('input',function(e){
    str = e.target.value
    if(pattern.test(str)===true){
        user_name_error.style.display = 'none'
    }
    else{
        user_name_error.style.display = 'block'
    }
})