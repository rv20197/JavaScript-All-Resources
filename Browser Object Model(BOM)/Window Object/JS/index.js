var btn_add = document.getElementById("add_item")
var btn_update = document.getElementById("update_item")
var btn_remove = document.getElementById("remove_item")
var list = document.getElementById("todo_list")
var input_box = document.getElementById("todo_input")
var new_item 

input_box.addEventListener('input',function(e){
    new_item = e.target.value
})

input_box.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        additem()
    }
})

function new_node() {
    new_element = document.createElement('p')
    list_element = document.createElement('l1')
    text_element = document.createTextNode(new_item)
    new_element.appendChild(list_element)
    new_element.appendChild(text_element)
    new_element.id = `item ${list.childElementCount}`
    return new_element
}

function additem(){
    if (new_item !== undefined && new_item !== null && new_item !== "" && new_item !==NaN)
    {
        var new_element = new_node()
        list.appendChild(new_element)
        input_box.value = ""
        new_item = ""
    }
    
    else{
        alert("Please Enter The Valid TO-DO Item")
    }
}

function updateitem(){
    var first_element = list.firstElementChild;
    var new_element = new_node()
    list.replaceChild(new_element,first_element)
}

function removeitem() {
    var first_element = list.firstElementChild;
    list.removeChild(first_element)
}

btn_add.addEventListener('click', additem )

btn_update.addEventListener('click',updateitem)

btn_remove.addEventListener('click',removeitem)