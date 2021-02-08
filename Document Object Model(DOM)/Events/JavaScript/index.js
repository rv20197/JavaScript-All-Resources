var button = document.getElementById('btn')
var div_container = document.getElementById('container')

function change_bg(){
    v1 = Math.floor(Math.random()* 255);
    v2 = Math.floor(Math.random()* 255);
    v3 = Math.floor(Math.random()* 255);
    div_container.style.backgroundColor = 'rgb('+v1+','+v2+','+v3+')'
}

button.addEventListener("click", change_bg)

/*

function onClick(){
    alert('You Clicked on button')
}
Event Handler Property
button.onclick = onClick;

Addevent listener
button.addEventListener("click", onClick)

*/

/////////////////////////////////////////////////////////////////////////

var mainheading = document.getElementById("main_heading");

mainheading.classList.add('big')

function remove_class(){
    mainheading.classList.remove('big')
}

button.addEventListener('click',remove_class)
// setTimeout(remove_class,5000)