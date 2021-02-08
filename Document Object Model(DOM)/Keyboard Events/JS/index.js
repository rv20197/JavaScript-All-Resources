document.body.addEventListener('keydown',function(e){
    // console.log(e.keyCode)
    if(e.keyCode==13){
        console.log("Key Down")
        alert("Key Down")
    }
    
})

document.body.addEventListener('keyup',function(e){
    // console.log(e.keyCode)
    if(e.keyCode==38){
        console.log("Key UP")
        alert("Key UP")
    }
    
})

document.body.addEventListener('keypress',function(e){
    // console.log(e.keyCode)
    console.log("Key Press")

    
})
