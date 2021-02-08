var red = document.getElementById("btn_1")
var blue = document.getElementById("btn_2")
var pink = document.getElementById("btn_3")
var purple = document.getElementById("btn_4")
var black = document.getElementById("btn_5")

function red_image(){
    document.getElementById("watch_image").src="Images\\Red.png"
}

function blue_image(){
    document.getElementById("watch_image").src="Images\\Blue.png"
}

function pink_image(){
    document.getElementById("watch_image").src="Images\\Pink.png"
}

function purple_image(){
    document.getElementById("watch_image").src="Images\\Purple.png"
}

function black_image(){
    document.getElementById("watch_image").src="Images\\Black.png"
}


red.addEventListener('click', red_image)
blue.addEventListener("click",blue_image)
pink.addEventListener('click',pink_image)
purple.addEventListener('click',purple_image)
black.addEventListener('click',black_image)

var watch_image = document.getElementById('container')


watch_image.addEventListener('mousemove', function(){
    var d = new Date();
    var n = d.toDateString();
    var t = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = n +"<br/>"+ t;
})
