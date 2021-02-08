var countdownelement = document.getElementById('countdown')
var bg_element = document.getElementById('bg_img')

var initialcount = countdownelement.innerHTML // Helps to modify the HTML element content

var interval = setInterval( function () {
    initialcount = initialcount > 0 ? initialcount - 1 : 0
    countdownelement.innerHTML = initialcount  

    // Decrease the size of FONT
    countdownelement.style.fontSize = `${initialcount * 10}px`

    // Decrease the background size
    bg_element.style.width = `${initialcount * 10}%`

    if(initialcount<=0){
        clearInterval( interval )
    }
    
}, 1000);