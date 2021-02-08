var button = document.getElementById("top_button");

button.addEventListener('mousedown',function () {
    console.log('Mouse Down Event Triggered')
})

button.addEventListener('mouseup',function () {
    console.log('Mouse UP Event Triggered')
})

button.addEventListener('click',function () {
    console.log('click Event Triggered')
})

button.addEventListener('dblclick',function () {
    console.log('Double click Event Triggered')
})


// Mouse Over
var mouse_over = document.getElementById("over")

var over_count = 0;
mouse_over.addEventListener('mouseover', function(){
    var count = document.querySelector("#over > p")
    over_count += 1;
    count.innerHTML = over_count
    console.log("Mouse Over Event")
})

// Mouse Enter
var mouse_enter = document.getElementById("enter")
var enter_Count = 0;

mouse_enter.addEventListener('mouseenter',function(){
    var count = document.querySelector("#enter > p")
    enter_Count += 1
    count.innerHTML = enter_Count
})

// Move Move
var mouse_move = document.getElementById("move")
var move_count = 0

mouse_move.addEventListener('mousemove', function(){
    var count = document.querySelector("#move > p")
    move_count += 1
    count.innerHTML = move_count
})