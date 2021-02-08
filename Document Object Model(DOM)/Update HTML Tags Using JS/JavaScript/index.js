var countdownelement = document.getElementById('countdown')
var bg_element = document.getElementById('bg_img')

var initialcount = countdownelement.innerHTML // Helps to modify the HTML element content

setInterval( function () {
    initialcount = initialcount > 0 ? initialcount - 1 : 0
    countdownelement.innerHTML = initialcount  

    var backimg = initialcount%2 === 0 ? 'images/img1.jpg' : 'images/img2.jpg'

    bg_element.src = backimg // Helps to modify the value of src attribute

    bg_element.className = 'bg_class' // Set the className property
    console.log(bg_element)
    // HTMLElementObject.className (bg_element.className) Returns the className property
    /*
    if(initialcount>0){
        initialcount -= 1
    }  
    else{
        initialcount = 0
    }
    countdownelement.innerHTML = initialcount  */
}, 1000);