// console.log(btnincreaseFont.style.marginRight);
// console.log(window.getComputedStyle(btndeccreaseFont).marginRight);
// console.log(window.getComputedStyle(btndeccreaseFont).textDecoration);
// console.log(btndeccreaseFont.style);

var mainheading = document.getElementById('main_heading');
var btndeccreaseFont = document.getElementById('btn_decrease');
var btnincreaseFont = document.getElementById('btn_increase');
var initialsize = (window.getComputedStyle(mainheading).fontSize);

size = initialsize.substr(0,(initialsize.length-2))
size = parseInt(size)

// Increase size
btnincreaseFont.onclick = function(){
    size += (10)
    mainheading.style.fontSize = size + "px"
}

// Decrease Size
btndeccreaseFont.onclick = function(){
    size -= (10)
    mainheading.style.fontSize = size + "px"
}