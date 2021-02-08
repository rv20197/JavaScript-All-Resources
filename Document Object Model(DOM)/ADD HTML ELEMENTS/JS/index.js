var btn_add = document.getElementById("add_item")
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

function additem(){
    if (new_item !== undefined && new_item !== null && new_item !== "" && new_item !==NaN)
    {
        new_element = document.createElement('p')
        list_element = document.createElement('l1')
        text_element = document.createTextNode(new_item)
        new_element.appendChild(list_element)
        new_element.appendChild(text_element)
        new_element.id = `item ${list.childElementCount}`
        list.appendChild(new_element)
        input_box.value = ""
        new_item = ""
    }
    
    else{
        alert("Please Enter The Valid TO-DO Item")
    }
}

btn_add.addEventListener('click', additem )

/*

// To add items into list in reverse order
var btn_add = document.getElementById("add_item")
var list = document.getElementById("todo_list")

btn_add.addEventListener('click', function(){
    new_element = document.createElement('p')
    list_element = document.createElement('l1')
    text_element = document.createTextNode(`List Item ${list.childElementCount+1}`)
    new_element.appendChild(list_element)
    new_element.appendChild(text_element)
    new_element.id = `item ${list.childElementCount}`
    first_item = list.firstElementChild
    // list.appendChild(new_element)
    list.insertBefore(new_element,first_item)
    console.log(new_element)
    console.log(list.childElementCount)
})


*/

