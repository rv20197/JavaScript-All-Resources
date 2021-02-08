var username = document.getElementById("username");
var login_form = document.getElementById("login_form");
username.addEventListener('input',function(event){
    var current_value = event.target.value;
    current_value = current_value.toUpperCase();
    console.log(current_value);
    username.value = current_value;
});

username.addEventListener('focus',function(){
    console.log("Focus")
})

username.addEventListener('blur',function(){
    console.log("Focus Lost")
})

login_form.addEventListener("submit",function(e){
    alert("Form submitted")
    // e.preventDefault();
})